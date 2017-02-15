import { combineReducers } from 'redux';
import { ActionType }	   from "../actions/action"


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
		// 设置支付方式
		case ActionType.PAYWAY:
			return Object.assign({},state,{
				payWay:payload
			});
		// 设置充值金额
		case ActionType.CHANGEMONEY:
			return Object.assign({},state,{
				chargeMoney:payload
			});
		// 设置是否完成验证(验证是否有足够的余额)
		case ActionType.VERIFY:
			return Object.assign({},state,{
				verify:payload,
				chargeMoney:'',
			});
		// 页面加载后发送的请求
		case ActionType.HTTPREQ:
			return Object.assign({},state,{
				StartHttp:true,
			});
		// 页面加载时的请求成功
		case ActionType.HTTPREQ_SUCCESS:
			return Object.assign({},state,{
				StartHttp:false,
				ratio:payload.ratio,
				userName: payload.userName
			});
		// 页面加载时的请求失败
		case ActionType.HTTPREQ_ERROR:
			return Object.assign({},state,{
				StartHttp:false,
				ratio:'*'
			})
		default:
			return state;
	}
};
