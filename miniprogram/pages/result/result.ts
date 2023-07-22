import { IMAGE_PATH } from "../../config/global-config";

// pages/result/result.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // resultState:1,
    // resultDes:"优待证审核成功",

    // resultState:2,
    // resultDes:"优待证审核失败"

    resultState: 3,
    resultDes: "优待证审核中...",
    iconReviewfail: IMAGE_PATH + '2a1a974a-0e89-4164-8332-f492b4433bfc',
    iconReviewSuccess: IMAGE_PATH + 'd90742c2-3734-47ca-865c-a97cffa96dad',
    iconReviewing: IMAGE_PATH + ' a7717f07-9372-4a13-921d-4356e5d3068b',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

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