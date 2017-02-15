import { ActionType }	   from "../actions/signupAction"

export 	const initState = {
	verifyCode:'获取验证码',
	phone:"",
	verify:'',
	username:'',
	password:'',
	passwordagain:'',
	referrer:'',
	checked:false,
	submit:false
};

export default (state=initState, action)=>{
	const { type, payload } = action
	switch (type){
		// 设置输入内容
		case ActionType.SETIFO:
			return Object.assign({},state,{
				[payload.key]:payload.value
			});
		// 设置是否已经阅读协议(复选框)
		case ActionType.SETCHECKED:
			return Object.assign({},state,{
				checked:!state.checked
			})
		// 设置发送验证码按钮的内容
		case ActionType.SENDVERIFY:
			return Object.assign({},state,{
				verifyCode:payload
			})
		// 设置发送开始
		case ActionType.SUBMIT:
			return Object.assign({},state,{
				submit:true
			})
		// 设置表单提交成功
		case ActionType.SUBMITSUCCESS:
			return Object.assign({},state,{
				submit:false
			})
		// 设置表单提交失败
		case ActionType.SUBMITFAIL:
			return Object.assign({},state,{
				verifyCode:'获取验证码',
				phone:"",
				verify:'',
				username:'',
				password:'',
				passwordagain:'',
				referrer:'',
				checked:false,
				submit:false
			})
		default:
			return state;
	}
}