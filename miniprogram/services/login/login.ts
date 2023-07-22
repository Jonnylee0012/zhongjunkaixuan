import { BASE_URL } from "../../config/global-config"


export function fetchLogin(parms: any) {
  console.log(parms)
  return new Promise((resolve) => {
    wx.request({
      url: BASE_URL + 'mobile/login',
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      data: {
        code: parms.code
      },
      success: (res: any) => {
        if (res.statusCode === 200) {
          var tokenInfo: any = res.data.data;
          console.log(tokenInfo.access_token)
          wx.setStorageSync('access_token', tokenInfo.access_token)
          wx.setStorageSync('refresh_token', tokenInfo.refresh_token)
          //return res.data
          resolve(true)
        } else {
          resolve(false)
        }

      }
    })
  })
}

export function fetchRefreshAccessToken() {
  wx.request({
    url: BASE_URL + 'auth/refresh',
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    data: {
      refresh_token: wx.getStorageSync('refresh_token')
    },
    success: (res: any) => {
      console.log(res.data)
      var obj = JSON.parse(res.data)
      wx.setStorage({
        key: "access_token",
        data: obj.access_token
      })
    }
  })
}