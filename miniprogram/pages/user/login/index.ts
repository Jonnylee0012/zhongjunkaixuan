import { IMAGE_PATH } from "../../../config/global-config"


Page({
  data: {
    loginBgUrl: IMAGE_PATH + 'eaef30ce-f149-4506-b57e-6e1bcaa06c1e',
  },
  pageTo() {
    console.log(22)
    wx.navigateTo({
      url: '../../home/home'
    })
  },
  pageToSplash() {
    wx.navigateTo({
      url: '../../splash/splash'
    })
  },
  pageToAuthenticate() {
    console.log(44)
    wx.navigateTo({
      url: '../../authenticate/authenticate'
    })
  },
  pageToResult() {
    console.log(55)
    wx.navigateTo({
      url: '../../result/result'
    })
  },

  getPhoneNumber(e: any) {
    console.log(11)
    let detail = e.detail;
    console.log(detail)
    if (detail.errMsg === "getPhoneNumber:ok") {
      console.log('用户同意授权')
      let code = detail.code;
      console.log(code)
      this.pageToSplash()
      // wx.request({
      //   //登录接口
      //   url:'',
      //   data:{
      //     code
      //   },
      //   success(res:any) {
      //     // wx.navigateTo({
      //     //   url:'../../home/home'
      //     // }) 
      //     console.log(res.data)
      //   }
      // })
    } else {
      console.log('用户拒绝授权')
    }

  }


})