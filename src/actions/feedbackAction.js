import http from '../util/http'

export const ActionType = {
	MESSAGE:'message',
	TEL:'tel',
	SUBMIT:'submit',
	SUBMITSUCC:'submit_success',
	SUBMITFAIL:'submit_fail'
};

// 输入的留言信息
export function Message (value){
	return {
		type: ActionType.MESSAGE,
		payload: value
	}
}

// 输入的电话号码
export function Tel (value){
	return {
		type: ActionType.TEL,
		payload: value
	}
}

// 提交表单
export function Submit (errorMsg,submitSuccess,submitFail){
	return (dispatch,getState) => {
    	const { message,tel } = getState().feedback
    	const phoneRegExp = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/

		if(message.trim()===''){
			errorMsg('请输入建议！');
			return;
		}

		if(!phoneRegExp.test(tel)){
			errorMsg('请输入正确的手机号！');
			return;
		}

    	dispatch({type:ActionType.SUBMIT})
    	http({
    		url:'',
    		data:{
    			messages:message,
    			phoneNum:tel
    		},
    		success:(response)=>{
    			if(response.success){
    				dispatch({type:ActionType.SUBMITSUCC})
    				submitSuccess()
    			}else{
    				dispatch({type:ActionType.SUBMITFAIL})
    				submitFail()
    			}
    		},
    		fail: ()=>{
    			dispatch({type:ActionType.SUBMITFAIL})
    			submitFail()
    		}
    	})
	}
}