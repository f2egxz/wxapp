export const ActionType = {
  WEICHAT:"weichat",
  FUNDS:"funds",
  CHANGEMONEY:"changeMoney",
  VERIFY:"verify"
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
    	money: value
  	})
  	return value
  }
};



const verify = (dispatch, verify)=>{
  dispatch({
     type: ActionType.VERIFY,
     verify:verify
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


