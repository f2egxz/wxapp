import { combineReducers } from 'redux';
import { ActionType }	   from "../actions/counter"


export const initState = {
	payWay:"funds",
	chargeMoney:'',
	balance:100,
	verify:false,
	StartHttp:false,
	ratio:5,
	userName: ''
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
		case ActionType.HTTPREQ:
			return Object.assign({},state,{
				StartHttp:true,
			});
		case ActionType.HTTPREQ_SUCCESS:
			return Object.assign({},state,{
				StartHttp:false,
				ratio:payload.ratio,
				userName: payload.userName
			});
		case ActionType.HTTPREQ_ERROR:
			return Object.assign({},state,{
				StartHttp:false,
				ratio:'*'
			})
		default:
			return state;
	}
};
