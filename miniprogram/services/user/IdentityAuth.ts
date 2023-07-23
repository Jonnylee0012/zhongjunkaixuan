import { BASE_URL } from "../../config/global-config"


export function fetchVerification(parms: any) {
  console.log(parms)
  return new Promise((resolve) => {
    wx.request({
      url: BASE_URL + 'items/verification',
      header: {
        authorization: wx.getStorageSync('access_token'),
      },
      method: 'POST',
      data: parms,
      success: (res: any) => {
        if (res.statusCode === 200) {
          console.log(res.data)
          resolve(true)
        } else {
          resolve(false)
        }

      },
    })
  })

}


export function fetchVerificationList() {
  let userId = wx.getStorageSync('user_id')
  let params = {
    'sort[]': '-date_created',
    'filter[_and][0][user_created][_contains]': userId
  }
  console.log(params)
  return new Promise((resolve) => {
    wx.request({
      url: BASE_URL + 'items/verification',
      header: {
        authorization: wx.getStorageSync('access_token'),
      },
      method: 'GET',
      data: params,
      success: (res: any) => {
        if (res.statusCode === 200) {
          console.log(res.data)
          resolve(res.data)
        } else {
          resolve(false)
        }

      },
    })
  })

}