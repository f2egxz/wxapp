import testReducer 		from 'redux-test-reducer'
import pay			 	from "../../reducers/pay"
import { ActionType }	from "../../actions/counter"


const assertReducer = testReducer(pay)

describe("teest reducer pay page ",()=>{
	it("pay way is 'weichat'",()=>{
		assertReducer({
			from:{
					payWay:"funds",
				 },
			to:{
					payWay:"weichat",
				},
			action: {type: ActionType.WEICHAT}
		})
	}),
	it("pay way is 'funds'",()=>{
		assertReducer({
			from:{
					payWay:"weichat",
				 },
			to:{
					payWay:"funds",
				},
			action: {type: ActionType.FUNDS}
		})
	}),
	it("pay money is '3'",()=>{
		assertReducer({
			from:{
					chargeMoney:'',
				 },
			to:{
					chargeMoney:'3',
				},
			action: {
				type: ActionType.CHANGEMONEY,
				payload:'3'
			}
		})
	}),
	it("pay verify is true",()=>{
		assertReducer({
			from:{
					verify:false,
					chargeMoney:'3'
				 },
			to:{
					verify:true,
					chargeMoney:''
				},
			action: {
				type: ActionType.VERIFY,
				payload: true
			}
		})
	})
	it("async startHttp action",()=>{
		assertReducer({
			from:{
					StartHttp:false
				 },
			to:{
					StartHttp:true
				},
			action: {
				type: ActionType.HTTPREQ,
			}
		})
	})
	it("async startHttp success action",()=>{
		assertReducer({
			from:{
					StartHttp:true,
					ratio:'',
					userName: ''
				 },
			to:{
					StartHttp:false,
					ratio:5,
					userName: 'gxz'
				},
			action: {
				type:ActionType.HTTPREQ_SUCCESS,
				payload:{userName:'gxz',ratio:5}
			}
		})
	})
	it("async startHttp fail action",()=>{
		assertReducer({
			from:{
					StartHttp:false,
					ratio:5
				 },
			to:{
					StartHttp:false,
					ratio:'*'
				},
			action: {
				type:ActionType.HTTPREQ_ERROR
			}
		})
	})
	it('default action',()=>{
		assertReducer({
			from:{
					payWay:"funds",
					chargeMoney:'',
					balance:100,
					verify:false,
					StartHttp:false,
					ratio:5,
					userName: ''
				 },
			to:{
					payWay:"funds",
					chargeMoney:'',
					balance:100,
					verify:false,
					StartHttp:false,
					ratio:5,
					userName: ''
				},
			action: {
				type:'other'
			}
		})
	})
})
