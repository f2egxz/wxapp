import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import * as Action from './../../actions/counter'

const mockStore = configureMockStore([ thunkMiddleware ])

describe('actions',()=>{
	it('ActionType test',()=>{
		const expectedAction = {
			WEICHAT:"weichat",
			FUNDS:"funds",
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
    		type: Action.ActionType.WEICHAT
  		}
  		const event = {
  			detail:{
  				value:Action.ActionType.WEICHAT
  			}
  		}
  		expect(Action.payWay(event)).toEqual(expectedAction)
	})
	it('chargeMoney action',()=>{
		const event = {
			detail:{
  				value:'1'
  			}
		}
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