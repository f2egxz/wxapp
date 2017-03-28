import http from '../util/http'

export const ActionType = {

  SHOWINTRODUCE:"showIntroduce",
  SHOWDETAILS:"showDetails",
  COLLECTION:"collect",
  HTTPREQ:"http_requert",
  HTTPREQ_SUCCESS:"http_requert_success",
  HTTPREQ_ERROR:"http_requert_error"
};

// 展示
export function showIntroduce() {
  return {
    type: ActionType.SHOWINTRODUCE,
  }
}

export function showDetails() {
  return {
    type: ActionType.SHOWDETAILS,
  }
}

export function collect(suc) {
  	return (dispatch,getState)=>{
	  	var {collect, httpreq} = getState().goods;
	  	if(!httpreq){
	  		dispatch({
	  			type:ActionType.HTTPREQ
	  		})
	  		http({
		  		url:"",
		  		success:(res)=>{
		  			dispatch({
			  			type:ActionType.HTTPREQ_SUCCESS,
			  			payload:{
			  				httpreq:false,
			  			}
			  		})
		  			if(res.success){
		  				suc()
		  				dispatch({
		  					type: ActionType.COLLECTION,
		  					payload:!collect
		  				})
		  			}
		  		},
		  		fail:(res)=>{
		  			dispatch({
			  			type:ActionType.HTTPREQ_ERROR,
			  			payload:{
			  				httpreq:false,
			  			}
			  		})
		  		}
	  		})
	  	}
  	}
};

const payStartREQ_SUCCESS = (response) => {
	var payloadObj = Object.assign({},response,{
						httpreq:false,
					});
  return {
    type:ActionType.HTTPREQ_SUCCESS,
    payload:payloadObj
  }
}

function payStartREQ_ERROR(reqError) {
  return (dispatch)=>{
    reqError();
    dispatch({
      type:ActionType.HTTPREQ_ERROR,
      payload:{
      	httpreq:false,
	  }
    })
  }
}


export function payStartHttp(reqError){
  return (dispatch) => {
    dispatch({
    	type:ActionType.HTTPREQ
    })
    return http({
      url:'',
      success:response=>{
      	if(response.success){
      		dispatch(payStartREQ_SUCCESS(response))
      	}else{
      		dispatch(payStartREQ_ERROR(reqError))
      	}
      },
      fail:response => dispatch(payStartREQ_ERROR(reqError))
    })
  }
}