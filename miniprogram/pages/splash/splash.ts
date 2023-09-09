import { IMAGE_PATH } from "../../config/global-config";

// pages/splash/splash.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    splashImageUrl: [
      IMAGE_PATH + '97ba8b7d-b3c0-478f-9a89-cb9be84f30bb',
      // IMAGE_PATH + 'addaea63-a2c5-4a65-acbe-be67d6e6fd13',
    ],
    dyAry: <any>[]
  },


  // pageTo(e: any) {
  //   console.log(e);
  //   const token = wx.getStorageSync('access_token')
  //   console.log(token)
  //   wx.navigateTo({
  //     url: '../home/home'
  //   })
  // },

  onReachBottom() {
    console.log('底部了');
  },

  onTransition(e: any) {
    console.log(e);
    // if (this.lastData) {
    let dy: any = e.detail.dy;
    //如果到底部还继续往下拉，这弹出提示框
    if (dy == 0 && this.data.dyAry[this.data.dyAry.length - 1] > 0) {
      // this.dyAry = [];
      // wx.toast('swpier都看完啦')
      console.log('底部了');
      wx.redirectTo({
        url: '../home/home'
      });
    }
    this.data.dyAry.push(dy)
    // }
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
  // onReachBottom() {
  //   console.log('底部了');

  //   wx.redirectTo({
  //     url: '../home/home'
  //   });
  // },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})