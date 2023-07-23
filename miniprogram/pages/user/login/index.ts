import { IMAGE_PATH } from "../../../config/global-config"
import { fetchLogin } from "../../../services/login/login"
import { loadUserInfo } from "../../../services/user/userInfo"


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

  async getPhoneNumber(e: any) {
    let detail = e.detail;
    console.log(detail)
    if (detail.errMsg === "getPhoneNumber:ok") {
      console.log('用户同意授权')
      let code = detail.code;
      let parms: any = {
        code: code
      }
      const result = await fetchLogin(parms)
      console.log(result);
      const useInfo = await loadUserInfo()
      console.log(useInfo)
      if (result) {
        wx.showToast({
          title: '登录成功!',
          icon: 'success',
          duration: 500,
          mask: true,
          success: () => {
            setTimeout(() => {
              wx.redirectTo({
                url: '../../home/home'
              });
            }, 1000)
          }
        });
      } else {
        wx.showToast({
          title: '登录失败!',
          icon: 'error',
          duration: 1000,
          mask: true,
        })
      }
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