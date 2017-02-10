import http from './http'

export const ActionType = {
  WEICHAT:"weichat",
  FUNDS:"funds",
  CHANGEMONEY:"changeMoney",
  VERIFY:"verify",
  HTTPREQ:"http_requert",
  HTTPREQ_SUCCESS:"http_requert_success",
  HTTPREQ_ERROR:"http_requert_error"
};

export function payWay(event) {
  return {
    type: event.detail.value
  }
};

export function chargeMoney(e) {
  return (dispatch) => {
    const value = e.detail.value
  	dispatch({
  		type:ActionType.CHANGEMONEY,
    	payload: value
  	})
  	return value
  }
};



const verify = (dispatch, verify)=>{
  dispatch({
     type: ActionType.VERIFY,
     payload:verify
  })
}





/**
  * @param {func} fundsPayment  零钱支付
  * @param {func} weichatPayment  微信支付
  * @param {func} notMoney  没有足够的零钱的时候
  * @param {func} errMoney  输入的金额有误的时候
  */
export function submit(fundsPayment,weichatPayment,notMoney,errMoney) {
  return  (dispatch,getState) => {
    const { balance, chargeMoney,payWay } = getState().pay
    console.log(getState())
    if(chargeMoney>0){
      if(payWay===ActionType.FUNDS){
        balance>=chargeMoney?function(){
          verify(dispatch ,true);
          fundsPayment(chargeMoney);
        }()
        :function(){
          notMoney();
          verify (dispatch,false)
        }()
      }else if(payWay===ActionType.WEICHAT){
        weichatPayment(chargeMoney);
        verify(dispatch,true);
      }
    }else{
      errMoney();
      verify (dispatch,false)
    }
  }
}




// 页面加载时的请求
const payStartREQ = () => {
  return {
    type:ActionType.HTTPREQ
  }
}

const payStartREQ_SUCCESS = (response) => {
  return {
    type:ActionType.HTTPREQ_SUCCESS,
    payload:response
  }
}

function payStartREQ_ERROR(reqError) {
  return (dispatch)=>{
    reqError();
    dispatch({
      type:ActionType.HTTPREQ_ERROR
    })
  }
}




export function payStartHttp(reqError){
  return (dispatch) => {
    dispatch(payStartREQ())
    this.dispatch = dispatch
    return http('/userdata',response=>dispatch(payStartREQ_SUCCESS(response.balance)),response => dispatch(payStartREQ_ERROR(reqError)))
  }
}

