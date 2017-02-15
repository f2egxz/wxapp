import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import * as Action from './../../actions/action'

const mockStore = configureMockStore([ thunkMiddleware ])

describe('pay actions test',()=>{
	it('ActionType test',()=>{
		const expectedAction = {
			PAYWAY:"payWay",
			CHANGEMONEY:"changeMoney",
			VERIFY:"verify",
			HTTPREQ:"http_requert",
			HTTPREQ_SUCCESS:"http_requert_success",
			HTTPREQ_ERROR:"http_requert_error"
		}
		expect(Action.ActionType).toEqual(expectedAction)
	})
	it('payWay action',()=>{
		const expectedAction = {
    		type: Action.ActionType.PAYWAY,
    		payload:'funds'
  		}
  		const event = 'funds'
  		expect(Action.payWay(event)).toEqual(expectedAction)
	})
	it('chargeMoney action',()=>{
		const event = '1'
		const expectedAction = {
			type:Action.ActionType.CHANGEMONEY,
			payload:'1'
		}
		const { dispatch, getActions } = mockStore({})
		dispatch(Action.chargeMoney(event))
		expect(getActions()).toEqual([expectedAction])
	})
	it('submit action',()=>{

	})
	it('payStartHttp action',()=>{
		const expectedAction = {
			type:Action.ActionType.HTTPREQ
		}
		// const http = jest.fn()
		const { dispatch, getActions } = mockStore({})
		dispatch(Action.payStartHttp())
		expect(getActions()).toEqual([expectedAction])
		// dispatch(Action.payStartHttp())()
	})
})