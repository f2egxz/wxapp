import testReducer 		from 'redux-test-reducer'
import pay			 	from "../../reducers/pay"
import { ActionType }	from "../../actions/counter"


const assertReducer = testReducer(pay)

describe("teest reducer pay page ",()=>{
	it("pay way is 'weichat'",()=>{
		assertReducer({
			from:{
					payWay:"funds",
					chargeMoney:'',
					balance:100,
					verify:false
				 },
			to:{
					payWay:"weichat",
					chargeMoney:'',
					balance:100,
					verify:false
				},
			action: {type: ActionType.WEICHAT}
		})
	}),
	it("pay way is 'funds'",()=>{
		assertReducer({
			from:{
					payWay:"funds",
					chargeMoney:'',
					balance:100,
					verify:false
				 },
			to:{
					payWay:"funds",
					chargeMoney:'',
					balance:100,
					verify:false
				},
			action: {type: ActionType.FUNDS}
		})
	}),
	it("pay money is '3'",()=>{
		assertReducer({
			from:{
					payWay:"funds",
					chargeMoney:'',
					balance:100,
					verify:false
				 },
			to:{
					payWay:"funds",
					chargeMoney:'3',
					balance:100,
					verify:false
				},
			action: {
				type: ActionType.CHANGEMONEY,
				money:'3'
			}
		})
	}),
	it("pay verify is true",()=>{
		assertReducer({
			from:{
					payWay:"funds",
					chargeMoney:'',
					balance:100,
					verify:false
				 },
			to:{
					payWay:"funds",
					chargeMoney:'',
					balance:100,
					verify:true
				},
			action: {
				type: ActionType.VERIFY,
				verify: true
			}
		})
	})
})
