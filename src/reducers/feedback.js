import { combineReducers } from 'redux';
import { ActionType }	   from "../actions/feedbackAction"


export const initState = {
	message:'',
	tel:'',
	http:false,
	response:''
};

export default (state=initState,action)=>{
	const { type, payload } = action
	switch(type){
		// 留言信息
		case  ActionType.MESSAGE :
			return Object.assign({},state,{
				message: payload
			});
		//电话号码 
		case ActionType.TEL :
			return Object.assign({},state,{
				tel: payload
			});
		//提交表单 
		case ActionType.SUBMIT:
			return Object.assign({},state,{
				http:true
			})
		case ActionType.SUBMITSUCC:
			return Object.assign({},state,{
				http:false,
				response:true
			})
		case ActionType.SUBMITFAIL:
			return Object.assign({},state,{
				message:'',
				tel:'',
				http:false,
				response:false
			})
		default :
			return state;
	}
}