import testReducer 		from 'redux-test-reducer'
import feedback		 	from "../../reducers/feedback"
import { ActionType }	from "../../actions/feedbackAction"

const assertReducer = testReducer(feedback)

describe("test reducer feedback page",()=>{
	it("add msg test",()=>{
		assertReducer({
			from:{
					message:'',
				 },
			to:{
					message:'test',
				},
			action: {
				type: ActionType.MESSAGE,
				payload: 'test',
			}
		})
	})
	it("add msg 1881000",()=>{
		assertReducer({
			from:{
					tel:'',
				 },
			to:{
					tel:'1881000',
				},
			action: {
				type: ActionType.TEL,
				payload: '1881000',
			}
		})
	})
	it("test submit",()=>{
		assertReducer({
			from:{
					http:false,
				 },
			to:{
					http:true
				},
			action: {
				type: ActionType.SUBMIT,
			}
		})
	})
	it("test submitSuccess",()=>{
		assertReducer({
			from:{
					http:true,
					response:''
				 },
			to:{
					http:false,
					response:true
				},
			action: {
				type: ActionType.SUBMITSUCC,
			}
		})
	})
	it("test submitFail",()=>{
		assertReducer({
			from:{
					message:'test',
					tel:'tset',
					http:true,
					response:''
				 },
			to:{
					message:'',
					tel:'',
					http:false,
					response:false
				},
			action: {
				type: ActionType.SUBMITFAIL,
			}
		})
	})
	it('other ',()=>{
		assertReducer({
			from:{
					message:'',
					tel:'',
					http:false,
					response:''
				 },
			to:{
					message:'',
					tel:'',
					http:false,
					response:''
				},
			action: {
				type: 'other',
			}
		})
	})
})