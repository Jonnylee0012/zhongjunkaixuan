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