// import fetch from 'isomorphic-fetch'

/*
* 1. 请求的类型 type get post
* 2. 请求地址 url
* 3. 是异步的还是同步的 async false true
* 4. 请求内容的格式 contentType
* 5. 传输的数据 data json对象
*
* 6.响应成功处理函数 success function
* 7.响应失败的处理函数 error function
*
* 这些都是动态参数 参数对象 options
* */

// window.$ = {};
// $.ajax = function(options){

//   if(!options || typeof options != 'object'){
//     return false;
//   }
//   var type = options.method || 'get';
//   var url = options.url || location.pathname;
//   var async = true;
//   var contentType = "text/html";
//   var data = options.data || {};
//   var dataStr = ''
//   for(var key in data){
//     dataStr += key+'='+data[key]+'&';
//   }
//   dataStr = dataStr && dataStr.slice(0,-1);

//   /*ajax 编程*/
//   var xhr = new XMLHttpRequest();
//   xhr.open(type,(type=='get'?url+'?'+dataStr:url),async);
//   if(type == 'post'){
//     xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
//   }

//   /*请求主体*/
//   需要判断请求类型
//   xhr.send(type=='get'?null:dataStr);

//   /*监听响应状态的改变 响应状态*/
//   xhr.onreadystatechange = function(){
//     if(xhr.readyState == 4 && xhr.status == 200){
//       /*success*/
//       var data = '';
//       var contentType = xhr.getResponseHeader('Content-Type');
//       if(contentType.indexOf('xml') > -1){
//         data = xhr.responseXML;
//       }else if(contentType.indexOf('json') > -1){
//         data = JSON.parse(xhr.responseText);
//       }else{
//         data = xhr.responseText;
//       }
//       options.success && options.success(data);
//     }else if(xhr.readyState == 4){
//       /*fail*/
//       options.fail && options.fail('you request fail !');
//     }

//   }
// }




/**
  * @param {Obj} options 传入的对象
  */
 function http(options){
  // try{
  //   wx.request(options)
  // }catch(e){
    // const init = {
    //   method:options.method||'GET',
    //   body:JSON.stringify(options.data||'')
    // }
    // fetch(options.url,init)
    //   .then(response => {
    //     if (response.status >= 400) {
    //         throw new Error("Bad response from server");
    //     }
    //     return response.json()
    //   })
    //   .then(options.success||function(response){console.log(response)})
    //   .catch(options.fail||function(response){console.log(response)})
    // return this
  // }
  if(typeof wx ==='object'){
    wx.request(options)
  }else{
    // fetch(options)
  }
}
// http.prototype.request = typeof wx==="undefined"?fetch:wx.request//这个是传进来的，什么环境下传入它对应的request方法



export default http
