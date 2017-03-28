import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import * as Action from './../../actions/feedbackAction'

const mockStore = configureMockStore([ thunkMiddleware ])

describe('feedbackAction actions test',()=>{
	it('ActionType test',()=>{
		const expectedAction = {
			MESSAGE:'message',
			TEL:'tel',
			SUBMIT:'submit',
			SUBMITSUCC:'submit_success',
			SUBMITFAIL:'submit_fail'
		}
		expect(Action.ActionType).toEqual(expectedAction)
	})
	it('Message is test',()=>{
		const expectedAction = {
			type: Action.ActionType.MESSAGE,
			payload: 'test'
		}
		expect(Action.Message('test')).toEqual(expectedAction)
	})
	it('Tel is 18810000000',()=>{
		const expectedAction = {
			type: Action.ActionType.TEL,
			payload: '18810000000'
		}
		expect(Action.Tel('18810000000')).toEqual(expectedAction)
	})
	it('submit test',()=>{
	})
})