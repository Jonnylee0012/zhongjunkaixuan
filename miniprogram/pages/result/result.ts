import { IMAGE_PATH } from "../../config/global-config";
import { fetchVerificationList } from "../../services/user/IdentityAuth";
import { isLogin } from "../../utils/util";

// pages/result/result.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // resultState:1,
    // resultDes:"优待证审核成功",

    // resultState:2,
    // resultDes:"优待证审核失败",

    resultState: 'ing',
    resultDes: "优待证审核中...",
    failedReason: '优待证照片模糊不清',
    resultIcon: IMAGE_PATH + 'a7717f07-9372-4a13-921d-4356e5d3068b',
    // iconReviewfail: IMAGE_PATH + '2a1a974a-0e89-4164-8332-f492b4433bfc',
    // iconReviewSuccess: IMAGE_PATH + 'd90742c2-3734-47ca-865c-a97cffa96dad',
    // iconReviewing: IMAGE_PATH + 'a7717f07-9372-4a13-921d-4356e5d3068b',
    verificationList: <any>[]
  },


  pageToAu() {
    wx.navigateTo({
      url: '../authenticate/authenticate'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    //filter[_and][0][user_created][_contains]: 596776e8-ba8e-4839-b20e-1bb326b1080a
    if (isLogin()) {
      let data: any = await fetchVerificationList()
      console.log(data);

      this.setData({
        verificationList: data.data
      })
      if (this.data.verificationList.length > 0) {
        let status = this.data.verificationList[0].status
        let resultIcon = ''
        if (status === 'ing') {
          resultIcon = IMAGE_PATH + 'a7717f07-9372-4a13-921d-4356e5d3068b'
        } else if (status === 'done') {
          resultIcon = IMAGE_PATH + 'd90742c2-3734-47ca-865c-a97cffa96dad'
        } else {
          resultIcon = IMAGE_PATH + '2a1a974a-0e89-4164-8332-f492b4433bfc'
        }
        this.setData({
          resultState: status,
          failedReason: this.data.verificationList[0].failed_reason,
          resultIcon: resultIcon,
        })
      }


    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})