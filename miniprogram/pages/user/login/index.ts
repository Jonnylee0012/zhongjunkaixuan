

Page({
  data:{

  },
  pageTo(){
    console.log(22)
    wx.navigateTo({
            url:'../../home/home'
          }) 
  },
  getPhoneNumber (e:any) {
    console.log(11)
    let detail  = e.detail;
    console.log(detail)
    // if(detail.errMsg === "getPhoneNumber:ok") {
    //   console.log('用户同意授权')
    //   let code  = detail.code;
    //   console.log(code)
    //   wx.request({
    //     //登录接口
    //     url:'',
    //     data:{
    //       code
    //     },
    //     success(res:any) {
    //       // wx.navigateTo({
    //       //   url:'../../home/home'
    //       // }) 
    //       console.log(res.data)
    //     }
    //   })
    // }else {
    //   console.log('用户拒绝授权')
    // }

  }


})