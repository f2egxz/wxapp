import { combineReducers } from 'redux';
import { ActionType }	   from "../actions/counter"


export const initState = {
	payWay:"funds",
	chargeMoney:'',
	balance:100,
	verify:false,
	ratio:5,
	user: ''
};

export default (state = initState, action) => {
	const { type, payload } = action
	switch (type){
		case ActionType.WEICHAT:
			return Object.assign({},state,{
				payWay:"weichat"
			});
		case ActionType.FUNDS:
			return Object.assign({},state,{
				payWay:"funds"
			});
		case ActionType.CHANGEMONEY:
			return Object.assign({},state,{
				chargeMoney:payload
			});

		case ActionType.VERIFY:
			return Object.assign({},state,{
				verify:payload,
				chargeMoney:'',
			});
		case ActionType.HTTPREQ_SUCCESS:
			return Object.assign({},state,{
				ratio:payload
			});
		case ActionType.HTTPREQ_ERROR:
			return Object.assign({},state,{
				ratio:'*'
			})
		default:
			return state;
	}
};
