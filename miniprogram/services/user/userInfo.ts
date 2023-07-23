import { BASE_URL } from "../../config/global-config"


// 加载信息
export function loadUserInfo() {
  //let that = this
  console.log(wx.getStorageSync('user_id'))
  let promise = new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + 'users/me',
      // data: {
      //   fields: '*'
      // },
      method: 'GET',
      dataType: 'json',
      header: {
        'content-type': 'application/json',// 默认值
        authorization: wx.getStorageSync('access_token'),
      },
      success: function (res) {
        let data: any = res.data
        resolve(res.data)
        console.log(data.data.id)
        wx.setStorageSync('user_id', data.data.id)
      },
      fail: function (error) {
        reject(error)
        console.log('操作失败')
      }
    })
  })
  return promise
}
