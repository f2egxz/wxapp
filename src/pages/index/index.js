import { compose } from 'redux'
import { connect } from 'wxapp-redux'
import * as action from '../../actions/counter'
import style from '../../styles/counter.css'
import http from '../../util/http'
import { randomString,orderNum } from '../../util/util'

function mapStateToProps(state) {
	return {
		weichat: action.ActionType.WEICHAT,
		funds: action.ActionType.FUNDS,
		payWay: state.pay.payWay,
		money: state.pay.chargeMoney,
		balance: state.pay.balance,
		verify: state.pay.verify,
		ratio: state.pay.ratio,
		userID: state.pay.userID
	}
}

function mapDispatchToProps(dispatch) {
	return {
		bindRadioGroupCheck: compose(dispatch, action.payWay),
		bindKeyInput: compose(dispatch, action.chargeMoney),
		bindSubmit: () => dispatch(action.submit(fundsPayment, weichatPayment, notMoney, errMoney)),
		startHttp: () => dispatch(action.payStartHttp(reqError))
	}
}

function fundsPayment(chargeMoney,userName) {
	wx.showToast({
		title: '支付中',
		icon: 'loading',
		duration: 2000,
		success: function() {
			// TODO 调用余额支付的API（传参：ID 金额）
			http({
				url:'/userdata',
				data:{
					userName:userName,
					money:chargeMoney
				},
				success:response => {
					if(response.success){
						wx.navigateTo({
							url: '../paySuccess/paySuccess?money=' + chargeMoney
						})
					}else{
						wx.hideToast()
						resError()
					}
				},
				fail:response => {
					wx.hideToast()
					reqError()
				}
			})
		},
		fail: function() {

		}
	})
}

function weichatPayment(chargeMoney) {
	//TODO 调用微信支付的API
	const successRes = (response)=>{
		// const response = JSON.parse(response);
		if(response.success) {
			const nonceString = randomString(31)
			const prepay_id = response.result.prepay_id;
			const paySign = response.result.paySign;
			wx.requestPayment({
				timeStamp:Date.now(),
				nonceStr: nonceString,
				package:  prepay_id ,
				signType: 'MD5',
				paySign:  paySign,
				// 暂时定为：success接受回调结果
				success:  (response)=>{
					if(response.requestPayment==='ok'){
						http({
							url:'',
							data:'OK',
							success:wx.navigateTo({
										url: '../paySuccess/paySuccess?money=' + chargeMoney
									}),
							fail:()=>{
								wx.showModal({
 									title: '充值遇到问题',
  									content: '很抱歉的告知您，金额已经扣除，但是充值过程中遇到问题，请联系客服！',
  									success: function(res) {
    									if (res.confirm) {
      										// console.log('用户点击确定')
    									}
  									}
								})
							}

						})
					}else if(response.requestPayment==='fail cancel'){
						http({
							url:'',
							data:'cancel',
							success:wx.showModal({
										title: '支付取消',
										content: '支付已取消！',
										showCancel: false,
										success: function() {},
										fail: function() {}
									}),
							fail:()=>{}
						})
					}else{
						http({
							url:'',
							data:response.requestPayment,
							success:wx.showModal({
										title: '支付失败',
										content: '支付失败，请重试！',
										showCancel: false,
										success: function() {},
										fail: function() {}
									}),
							fail:()=>{}
						})
					}

				},
				fail:     (response)=>{
					wx.showModal({
						title: '充值失败',
						content: '微信支付接口调用失败，请再试一次！',
						showCancel: false,
						success: function() {},
						fail: function() {}
					});

				},
				complete: ()=>{}
			})
		}else{
			wx.showModal({
				title: '支付失败',
				content: response.msg,
				showCancel: false,
				success: function() {},
				fail: function() {}
			})
		}
	}
	http({
		url:'/userdata',
		data:{userName:'',money:chargeMoney},
		success:successRes,
		fail:reqError,
	})

}

function notMoney() {
	wx.showModal({
		title: '余额不足',
		content: '请使用其它支付方式支付！',
		showCancel: false,
		success: function() {},
		fail: function() {}
	});
}

function errMoney() {
	wx.showModal({
		title: '金额输入有误',
		content: '请输入正确的充值金额！',
		showCancel: false,
		success: function() {},
		fail: function() {}
	});
}

function reqError() {
	wx.showModal({
		title: '网络错误',
		content: '请重新刷新页面',
		showCancel: false,
		success: function() {},
		fail: function() {}
	});
}

function resError(){
	wx.showModal({
		title: '支付失败',
		content: '支付失败请重新支付',
		showCancel: false,
		success: function() {},
		fail: function() {}
	})
}


connect(mapStateToProps, mapDispatchToProps)({
	onLoad:function(option){
		this.startHttp()
	}
}, style)