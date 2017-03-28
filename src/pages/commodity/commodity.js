import { compose } from 'redux'
import { connect } from 'wxapp-redux'
import * as action from '../../actions/goodsAction'
import style from '../../styles/counter.css'
import http from './../../util/http'

function mapStateToProps(state) {
	const { payType, imgUrls, price, hasConversion, conversion, company, introduceContent, detailsContent, notice, showTab, collect, phoneNumber  } = state.goods
  return {
  	payType: payType,//integral,gold
	imgUrls: imgUrls,
    price: price, //每个的价钱
    hasConversion: hasConversion,//已兑
    conversion: conversion,//共多少件
    company: company, //公司名
    introduceContent: introduceContent, //商品介绍的内容
    detailsContent: detailsContent, //商家信息的内容
    notice: notice,//兑换须知
    showTab: showTab,//显示的菜单
    collect: collect, //收藏
    phoneNumber: phoneNumber
  }
}

function mapDispatchToProps(dispatch) {
  return {
  	showIntroduce: ()=>dispatch(action.showIntroduce()),
  	showDetails:  ()=>dispatch(action.showDetails()),
  	bindcollect: ()=>dispatch(action.collect(SUC)),
  	startHttp: () => dispatch(action.payStartHttp(reqError)),
  }
}

function SUC(){
	wx.showToast({
	  title: '成功',
	  icon: 'success',
	  duration: 2000
	})
}

function reqError() {
	wx.showModal({
		title: '网络错误',
		content: '请重新刷新页面',
		showCancel: false,
		success: function() {},
		fail: function() {}
	});
}

connect(mapStateToProps, mapDispatchToProps)({
	call:function(){
  		var that = this
	    wx.makePhoneCall({
	      phoneNumber: that.data.phoneNumber 
	    })
  	},
  	onLoad:function(option){
		this.startHttp()
	},
}, style)

