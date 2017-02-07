import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import * as Action from './../../actions/counter'

const mockStore = configureMockStore([ thunkMiddleware ])

describe('actions',()=>{
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
		const { dispatch, getActions } = mockStore({})
		expect(dispatch(Action.chargeMoney(event))).toEqual('1')
	})
	it('submit action',()=>{
		
	})
})