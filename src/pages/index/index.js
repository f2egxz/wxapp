import { compose } from 'redux'
import { connect } from 'wxapp-redux'
import * as action from '../../actions/counter'
import style from '../../styles/counter.css'
import http from '../../actions/http'

function mapStateToProps(state) {
  return {
  	weichat:action.ActionType.WEICHAT,
  	funds:  action.ActionType.FUNDS,
    payWay: state.pay.payWay,
    money:  state.pay.chargeMoney,
    balance:state.pay.balance,
    verify: state.pay.verify,
    ratio:  state.pay.ratio,
    userID: state.pay.userID
  }
}

function mapDispatchToProps(dispatch) {
  return {
    bindRadioGroupCheck: compose(dispatch, action.payWay),
    bindKeyInput: compose(dispatch,action.chargeMoney),
    // bindSubmit:compose(dispatch,action.submit)
    bindSubmit:()=>dispatch(action.submit(fundsPayment,weichatPayment,notMoney,errMoney)),
    startHttp:()=>dispatch(action.payStartHttp(reqError))
  }
}

function fundsPayment(chargeMoney){
	wx.showToast({
	  	title: '支付中',
	  	icon: 'loading',
	  	duration:2000,
	  	success:function(){
	  		// TODO 调用余额支付的API（传参：ID 金额）
	  		http('',
	  			response => {
      				wx.navigateTo({
						url:'../paySuccess/paySuccess?money='+chargeMoney
					})
      			},
				response => {
					wx.hideToast()
      				wx.showModal({
	  					title: '支付失败',
	  					content:'支付失败请重新支付',
	  					showCancel:false,
	  					success:function(){},
	  					fail:function(){}
					});
      			}
			)
	  	},
	  	fail:function(){

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
	  	showCancel:false,
	  	success:function(){},
	  	fail:function(){}
	});
}

function errMoney(){
	wx.showModal({
	  	title: '金额输入有误',
	  	content:'请输入正确的充值金额！',
	  	showCancel:false,
	  	success:function(){},
	  	fail:function(){}
	});
}

function reqError(){
	wx.showModal({
	  	title: '网络错误',
	  	content:'请重新刷新页面',
	  	showCancel:false,
	  	success:function(){},
	  	fail:function(){}
	});
}

connect(mapStateToProps, mapDispatchToProps)({
	onReady: function () {
		this.startHttp()
	}
}, style)
