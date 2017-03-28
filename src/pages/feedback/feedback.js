import { compose } from 'redux'
import { connect } from 'wxapp-redux'
import * as action from '../../actions/feedbackAction'
import style from '../../styles/counter.css'


function mapStateToProps(state){
	return {
		message:state.feedback.message,
		tel:state.feedback.tel
	}
}

function mapDispatchToProps (dispatch) {
	return {
		bindmsg:(e)=>{
	  		dispatch(action.Message(e.detail.value))
	  	},
		bindtel:(e)=>{
	  		dispatch(action.Tel(e.detail.value))
	  	},
	  	bindSubmit:()=>{
	  		dispatch(action.Submit(errorMsg,submitSuccess,submitFail))
	  	}
	}
}

function errorMsg(msg){
	wx.showModal({
	  title: '信息有误',
	  content: msg,
	  showCancel:false
	})
}

function submitSuccess (){
	wx.showModal({
	  title: '提交成功',
	  content: '您的建议我们已经收集！',
	  showCancel:false,
	  success: function(res) {
	    if (res.confirm) {
	      // 跳转页面
	    }
	  }
	})
}

function submitFail (){
	wx.showModal({
	  title: '提交失败',
	  content: '请重新提交!',
	  showCancel:false
	})
}

connect(mapStateToProps,mapDispatchToProps)({},style)