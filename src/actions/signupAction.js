import http from '../util/http'

export const ActionType = {
	SENDVERIFY:'sendVerify',
	SETIFO:'setIfo',
	SETCHECKED:'setChecked',
	VERIFY:'verify',
	VERIFYSUCCESS:'verifySuccess',
	VERIFYFAIL:"verifyFail",
	SUBMIT:'submit',
	SUBMITSUCCESS:'submitSuccess',
	SUBMITFAIL:'submitFail'
};


/**
 * 获得输入内容的action
 * @param keys  	{String} store中要修改的key
 * @param values  	{String} store中要修改的key的value
 *
 */
export function keyInput (keys,values){
	return {
		type:ActionType.SETIFO,
		payload:{
			key:keys,
			value:values
		}
	}
}

/**
 * 发送验证码的action
 * @param verifyError  	{func} 验证码发送失败
 *
 */
export function sendVerify (verifyError){
	return (dispatch,getState)=>{
		// 如果按钮的内容是“获取验证码”，则发起请求
		const { verifyCode } = getState().signup;
		if(verifyCode==='获取验证码'){
			http({
				url:'',
				method:'POST',
				// 请求成功修改按钮内容为倒计时
				success:()=>{
					let setInt=setInterval(()=>{
						let msg = '';
						const { verifyCode } = getState().signup
						if(verifyCode==='获取验证码'){
							msg = 59
						}else if(verifyCode<=1){
							msg = '获取验证码'
						}else {
							msg = verifyCode-1
						}
						dispatch({
							type:ActionType.SENDVERIFY,
							payload:msg
						})
						msg==='获取验证码'?clearInterval(setInt):''
					},1000)
				},
				// 请求失败执行传入的失败事件
				fail:verifyError()
			})
		}
	}
}


/**
 * 表单提交按钮的action
 * @param msg 			{Obj} 需要提交的内容
 * @param errorMsg  	{func} 输入信息有误的
 * @param submitSuccess {func} 表单提交成功
 * @param submitError 	{func} 表单提交失败
 *
 */
export function submint (msg,errorMsg,submitSuccess,submitError){
	return (dispatch,getState) => {
		const {phone,verify,username,password,passwordagain,referrer} = getState().signup
		const Phone 		= phone.trim()
		const Verify    	= verify.trim()
		const Username      = username.trim()
		const Password 	 	= password.trim()
		const Passwordagain = passwordagain.trim()
		const Referrer 		= referrer.trim()
		const phoneRegExp = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/

		if(!phoneRegExp.test(Phone)){
			errorMsg('请输入正确的手机号！');
			return;
		}
		if(Verify===''||Verify.length!==4){
			errorMsg('验证码输入错误！');
			return;
		}
		if(Username===''){
			errorMsg('请输入用户名！');
			return;
		}
		if(Password===''){
			errorMsg('请输入密码！');
			return;
		}
		if(Passwordagain===Password){
			errorMsg('两次输入的密码不同！');
			return;
		}
		if(!phoneRegExp.test(Referrer)){
			errorMsg('请输入正确的推荐人手机号！');
			return;
		}
		console.log('form发生了submit事件，携带数据为：', msg)
		dispatch({
			type:ActionType.SUBMIT
		})
		http({
			url:'',
			method:'POST',
			success:(response)=>{
				if(response.success){
					dispatch({
					type:ActionType.SUBMITSUCCESS
					})
					submitSuccess()
				}else{
					dispatch({
						type:ActionType.SUBMITFAIL
					})
					submitError()
				}
			},
			fail:()=>{
				dispatch({
					type:ActionType.SUBMITFAIL
				})
				submitError()
			}
		})
	}
}

// 修改复选框选中状态的action
export function checkedBox(){
	return {
		type:ActionType.SETCHECKED
	}
}