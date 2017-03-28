import testReducer 		from 'redux-test-reducer'
import goods		 	from "../../reducers/goods"
import { ActionType }	from "../../actions/goodsAction"

const assertReducer = testReducer(goods)

describe("test reducer goods page",()=>{
	it("show interoduce test",()=>{
		assertReducer({
			from:{
					showTab:"details",
				 },
			to:{
					showTab:"introduce",
				},
			action: {
				type: ActionType.SHOWINTRODUCE,
			}
		})
	})

	it("show details test", ()=>{
		assertReducer({
			from: {
				showTab:"introduce",
			},
			to: {
				showTab:"details",
			},
			action:{
				type: ActionType.SHOWDETAILS,
			}
		})
	})

	it("collect test", ()=>{
		assertReducer({
			from: {
				collect:false,
			},
			to: {
				collect:true,
			},
			action: {
		  		type: ActionType.COLLECTION,
		  		payload:true
		  			
			}
		})
	})

	it("httpreq test ", ()=>{
		assertReducer({
			from: {
				httpreq:false,
			},
			to: {
				httpreq:true,
			},
			action: {
		  		type: ActionType.HTTPREQ,
			}
		})
	})

	it("httpreq_success test ", ()=>{
		assertReducer({
			from: {
				httpreq:true,
			},
			to: {
				httpreq:false,
			},
			action: {
		  		type: ActionType.HTTPREQ_ERROR,
		  		payload: {
		  			httpreq:false,
		  		}
			}
		})
	})

	it("default test ", ()=>{
		assertReducer({
			from: {
				price:0, 
			    hasConversion:0,
			    conversion:0,
			    company:"", 
			    phoneNumber:"18810630121", 
			    introduceContent:["1111",'111'], 
			    detailsContent:ss"2222",'22'],
			},
			to: {
				price:0, 
			    hasConversion:0,
			    conversion:0,
			    company:"", 
			    phoneNumber:"18810630121", 
			    introduceContent:["1111",'111'], 
			    detailsContent:["2222",'22'],
			},
			action: {
		  		type: "default"
			}
		})
	})

})