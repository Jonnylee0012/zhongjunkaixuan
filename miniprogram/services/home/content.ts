import { BASE_URL } from "../../config/global-config"


// 加载信息
export function loadContentInfo() {
  //let that = this
  console.log(wx.getStorageSync('access_token'))
  // authorization: wx.getStorageSync('access_token'),
  let promise = new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + 'items/content',
      data: {
        page: '1',
        limit: '100',
      },
      method: 'GET',
      dataType: 'json',
      header: {
        'content-type': 'application/json',// 默认值
      },
      success: function (res) {
        resolve(res.data)
        console.log(res.data)
      },
      fail: function (error) {
        reject(error)
        console.log('操作失败')
      }
    })
  })
  return promise
}
