import { BASE_URL, TOKEN } from "../../config/global-config"


export function fetchVerification(parms: any) {
  console.log(parms)
  return new Promise((resolve) => {
    wx.request({
      url: BASE_URL + 'items/verification',
      header: {
        authorization: TOKEN,
      },
      method: 'POST',
      data: parms,
      success: (res: any) => {
        console.log(res.data)
        resolve(true)
      },
    })
  })

}