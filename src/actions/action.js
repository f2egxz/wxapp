import http from '../util/http'
import { randomString} from '../util/util'

export const ActionType = {
  PAYWAY:"payWay",
  CHANGEMONEY:"changeMoney",
  VERIFY:"verify",
  HTTPREQ:"http_requert",
  HTTPREQ_SUCCESS:"http_requert_success",
  HTTPREQ_ERROR:"http_requert_error"
};

export function payWay(payway) {
  return {
    type: ActionType.PAYWAY,
    payload: payway
  }
};

/**
  * 修改输入金额的action
  * @param {String} value  输入的金额
  *
  */
export function chargeMoney(value) {
  return (dispatch) => {
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
  * 提交表单的action
  * @param {func} fundsPayment  零钱支付
  * @param {func} weichatPayment  微信支付
  * @param {func} notMoney  没有足够的零钱的时候
  * @param {func} errMoney  输入的金额有误的时候
  */
export function submit(fundsPayment,weichatPayment,notMoney,errMoney) {
  return  (dispatch,getState) => {
    const { balance, chargeMoney,payWay,userName } = getState().pay
    if(chargeMoney>0){
      if(payWay==='funds'){
        balance>=chargeMoney?function(){
          verify(dispatch ,true);
          fundsPayment(chargeMoney,userName);
        }()
        :function(){
          notMoney();
          verify (dispatch,false)
        }()
      }else if(payWay==='weichat'){
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



// TODO 暂定为从这里获取用户的userName (或者由上一个页面传入)
/**
  * 页面加载时请求的action
  * @param {func} reqError  请求失败
  *
  */
export function payStartHttp(reqError){
  return (dispatch) => {
    dispatch(payStartREQ())
    return http({
      url:'/userdata_start',
      success:response=>dispatch(payStartREQ_SUCCESS({userName:response.username,ratio:response.balance})),
      fail:response => dispatch(payStartREQ_ERROR(reqError))
    })
  }
}


