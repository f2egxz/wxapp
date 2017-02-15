import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import * as Action from './../../actions/signupAction'

const mockStore = configureMockStore([ thunkMiddleware ])

describe('signup actions test',()=>{
	it('ActionType test',()=>{
		const expectedAction = {
			SENDVERIFY:'sendVerify',
			SETIFO:'setIfo',
			SETCHECKED:'setChecked',
			VERIFY:'verify',
			VERIFYSUCCESS:'verifySuccess',
			VERIFYFAIL:"verifyFail",
			SUBMIT:'submit',
			SUBMITSUCCESS:'submitSuccess',
			SUBMITFAIL:'submitFail'
		}
		expect(Action.ActionType).toEqual(expectedAction)
	})
	it('keyInput action test',()=>{
		const expectedAction = {
			type:Action.ActionType.SETIFO,
			payload:{
				key:'phone',
				value:"18810630121"
			}
		}
		expect(Action.keyInput('phone',"18810630121")).toEqual(expectedAction)
	})
	it('sendVerify action test',()=>{

	})
	it('submit action test',()=>{

	})
	it('checkedBox action test',()=>{
		const expectedAction={
			type:Action.ActionType.SETCHECKED
		}
		expect(Action.checkedBox()).toEqual(expectedAction)
	})
})