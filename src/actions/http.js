function Fetch(url) { this.url = url }

Fetch.prototype.success = function(call) {
  var data;
  if(this.url === '/userdata') {
    data = {
      balance: 3
    }
  }

  call(data)
  return this;
}
Fetch.prototype.error = function(call) {
  var data;
  if(this.url === '/userdata') {
    data = {
      balance: 3
    }
  }

  call(data)
  return this;
}

var fetch = (options) => new Fetch(options)


/**
  * @param {String} url 请求地址
  * @param {fn} fnS 成功之后的函数
  * @param {fn} fnF 失败之后的函数
  */
export default function http(options, fnS,fnF){
  if(wx){
    const url = {
      url:options,
      success:fnS,
      fail:fnF
    }
    wx.request(url)
  }else{
    fetch(options)
    .success(fnS)
      .error(fnF)
    return this
  }

}