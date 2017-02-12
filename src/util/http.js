import fetch from 'isomorphic-fetch'

/**
  * @param {Obj} options 传入的对象
  */
export default function http(options){
  // if(wx){
  //   wx.request(options)
  // }else{
  //   const init = {
  //     method:options.method||'GET',
  //     body:JSON.stringify(options.data||'')
  //   }
  //   fetch(options.url,init)
  //     .then(response => {
  //       if (response.status >= 400) {
  //           throw new Error("Bad response from server");
  //       }
  //       return response.json()
  //     })
  //     .then(options.success||function(response){console.log(response)})
  //     .catch(options.fail||function(response){console.log(response)})
  //   return this
  // }
  try{
    wx.request(options)
  }catch(e){
    const init = {
      method:options.method||'GET',
      body:JSON.stringify(options.data||'')
    }
    fetch(options.url,init)
      .then(response => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json()
      })
      .then(options.success||function(response){console.log(response)})
      .catch(options.fail||function(response){console.log(response)})
    return this
  }
}
