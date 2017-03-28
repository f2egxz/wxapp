import testReducer 		from 'redux-test-reducer'
import signup			 	from "../../reducers/signup"
import { ActionType }	from "../../actions/signupAction"

const assertReducer = testReducer(signup)

describe("test reducer signup page ",()=>{
	it("set verify is 4321",()=>{
		assertReducer({
			from:{
					verify:'',
				 },
			to:{
					verify:'4321',
				},
			action: {
				type: ActionType.SETIFO,
				payload: {
					key:'verify',
					value:'4321'
				}
			}
		})
	})
	it('set checked is true',()=>{
		assertReducer({
			from:{
					checked:false,
				 },
			to:{
					checked:true,
				},
			action: {
				type: ActionType.SETCHECKED,
			}
		})
	})
	it('set verify is 50',()=>{
		assertReducer({
			from:{
					verifyCode:'获取验证码'
				 },
			to:{
					verifyCode:50
				},
			action: {
				type: ActionType.SENDVERIFY,
				payload:50
			}
		})
	})
	it('set submit is true',()=>{
		assertReducer({
			from:{
					submit:false
				 },
			to:{
					submit:true
				},
			action: {
				type: ActionType.SUBMIT,
			}
		})
	})
	it('set submitSuccess',()=>{
		assertReducer({
			from:{
					submit:true
				 },
			to:{
					submit:false
				},
			action: {
				type: ActionType.SUBMITSUCCESS,
			}
		})
	})
	it('set submitFail',()=>{
		assertReducer({
			from:{
					verifyCode:'获取验证码',
					phone:"",
					verify:'',
					username:'',
					password:'',
					passwordagain:'',
					referrer:'',
					checked:false,
					submit:true
				 },
			to:{
					verifyCode:'获取验证码',
					phone:"",
					verify:'',
					username:'',
					password:'',
					passwordagain:'',
					referrer:'',
					checked:false,
					submit:false
				},
			action: {
				type: ActionType.SUBMITFAIL,
			}
		})
	})
	it('default action',()=>{
		assertReducer({
			from:{
					verifyCode:'获取验证码',
					phone:"",
					verify:'',
					username:'',
					password:'',
					passwordagain:'',
					referrer:'',
					checked:false,
					submit:false
				 },
			to:{
					verifyCode:'获取验证码',
					phone:"",
					verify:'',
					username:'',
					password:'',
					passwordagain:'',
					referrer:'',
					checked:false,
					submit:false
				},
			action: {
				type:'other'
			}
		})
	})
})