import { compose } from 'redux'
import { connect } from 'wxapp-redux'
import * as action from '../../actions/counter'
import style from '../../styles/counter.css'

function mapStateToProps(state) {
  return {
  	weichat:action.ActionType.WEICHAT,
  	funds:action.ActionType.FUNDS,
    payWay: state.pay.payWay,
    money:state.pay.chargeMoney,
    balance:state.pay.balance,
    verify:state.pay.verify
  }
}

function mapDispatchToProps(dispatch) {
  return {
    bindRadioGroupCheck: compose(dispatch, action.payWay),
    bindKeyInput: compose(dispatch,action.chargeMoney),
    // bindSubmit:compose(dispatch,action.submit)
    bindSubmit:()=>dispatch(action.submit(fundsPayment,weichatPayment,notMoney,errMoney))
  }
}

function fundsPayment(chargeMoney){
	wx.showToast({
	  	title: '支付中',
	  	icon: 'loading',
	  	duration:2000,
	  	success:function(){
	  		console.log("余额支付成功！")
	  		// TODO 调用余额支付的API
	  		wx.navigateTo({
				url:'../paySuccess/paySuccess?money='+chargeMoney
			})
	  	}
	})
}

function weichatPayment(chargeMoney){
	console.log('微信支付成功！');
	//TODO 调用微信支付的API
	wx.navigateTo({
		url:'../paySuccess/paySuccess?money='+chargeMoney
	})
}

function notMoney(){
	wx.showModal({
	  	title: '余额不足',
	  	content:'请使用其它支付方式支付！',
	  	showCancel:false
	});
}

function errMoney(){
	wx.showModal({
	  	title: '金额输入有误',
	  	content:'请输入正确的充值金额！',
	  	showCancel:false
	});
}



connect(mapStateToProps, mapDispatchToProps)({}, style)
