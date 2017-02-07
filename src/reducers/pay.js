import { combineReducers } from 'redux';
import { ActionType }	   from "../actions/counter"


export const initState = {
	payWay:"funds",
	chargeMoney:'',
	balance:100,
	verify:false
};

export default (state = initState, action) => {
	const { type, money, verify } = action
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
				chargeMoney:money
			});

		case ActionType.VERIFY:
			return Object.assign({},state,{
				verify:verify,
				chargeMoney:'',
			});
		default:
			return state;
	}
};
