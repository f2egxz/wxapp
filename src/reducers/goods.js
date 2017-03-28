import { combineReducers } from 'redux';
import { ActionType }	   from "../actions/goodsAction"

export const initState = {
	payType:"gold",//integral,gold
    imgUrls:[
	    './../../static/images/test1.jpg',
	    './../../static/images/test2.jpg',
	    './../../static/images/test1.jpg'
	],
    price:0, //每个的价钱
    hasConversion:0,//已兑
    conversion:0,//共多少件
    company:"", //公司名
    phoneNumber:"18810630121", //公司电话
    introduceContent:["1111",'111'], //商品介绍的内容
    detailsContent:["2222",'22'], //商家信息的内容
    notice:{     //兑换须知
      way:"",
      startTime:"",
      endTime:"",
      rule:""
    },
    showTab:"introduce", //details,introduce 显示的菜单栏
    collect:false, //收藏
    httpreq:false,//是否正在发送请求
};

export default (state = initState, action) => {
	const { type, payload } = action
	switch(type){
		// 切换显示Tab 商品介绍
		case ActionType.SHOWINTRODUCE:
			return Object.assign({},state,{
				showTab:"introduce",
			});
		// 切换显示Tab 商家详情
		case ActionType.SHOWDETAILS:
			return Object.assign({},state,{
				showTab:"details",
			});
		//收藏功能
		case ActionType.COLLECTION:
			return Object.assign({},state,{
				collect:payload,
			});
		// httpreq是否正在发送 
		case ActionType.HTTPREQ:
			return Object.assign({},state,{
				httpreq:true,
			});
		case ActionType.HTTPREQ_SUCCESS:
			return Object.assign({},state,payload);

		case ActionType.HTTPREQ_ERROR:
			return Object.assign({},state,{
				httpreq:false,
			});

		default:
			return state;
	}

}