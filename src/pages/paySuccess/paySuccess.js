import { compose } from 'redux'
import { connect } from 'wxapp-redux'
import * as action from '../../actions/counter'
import style from '../../styles/counter.css'


function mapStateToProps(state){
	return {}
}

function mapDispatchToProps (dispatch) {
	return {}
}

connect(mapStateToProps,mapDispatchToProps)({
	complete:()=>{
		console.log("跳转页面回充值页面")
	},
	onLoad:function(options){
   		// 页面初始化 options为页面跳转所带来的参数
    	this.setData({
    		money:options.money
    	})
  	},
},style)