import { compose } from 'redux'
import { connect } from 'wxapp-redux'
import * as action from '../../actions/signupAction'
import style from '../../styles/counter.css'
import http from '../../util/http'

function mapStateToProps(state) {
	return {
		verifyCode  : state.signup.verifyCode,
		phone		: state.signup.phone,
		verify		: state.signup.verify,
		username	: state.signup.username,
		password 	: state.signup.password,
		passwordagain: state.signup.passwordagain,
		referrer 	: state.signup.referrer,
		checked 	: state.signup.checked,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		verification:function(){
	    	//发送验证码
		    const phoneRegExp = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
		    if(phoneRegExp.test(this.data.phone)){
		      	dispatch(action.sendVerify(verifyError))
		    }else{
		    	errorMsg('请输入正确的手机号！')
		    }
	  	},
	  	bindKeyInput:(e)=>{
	  		dispatch(action.keyInput(e.currentTarget.id, e.detail.value))
	  	},


		formSubmit: (e) =>{
			// 表单提交
			const msg = e.detail.value
			dispatch(action.submint(msg,errorMsg,submitSuccess,submitError))
		},
		protocol:function(){
		  // //跳转到协议页面
		  // wx.redirectTo({
		  //   url: '../protocol/protocol'
		  // })
		},
		// 点击复选框
		checkboxChange:()=>dispatch(action.checkedBox()),
	}
}

// 输入信息有误的函数
function errorMsg(msg){
	wx.showModal({
		title:'输入的信息有误',
		content:msg,
		showCancel:false
	})
}

// 表单验证码发送失败的函数
function verifyError(){
	wx.showModal({
		title:'发送验证码失败',
		content:'请重试！',
		showCancel:false
	})
}

// 表单提交成功的函数
function submitSuccess(){
	// 跳转页面
	// wx.redirectTo({
	//   url: ''
	// })
}

// 表单提交失败的函数
function submitError(){
	wx.showModal({
		title:'注册失败',
		content:'注册失败请重试！',
		showCancel:false
	})
}


connect(mapStateToProps, mapDispatchToProps)({
	onLoad:function(option){}
}, style)