import { getSingleContentInfo } from "../../services/home/content";


const app = getApp();
// pages/result/result.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formatArticle: '',
    title: "“八一”节！东港百余名退役军人集体干了这事！",
    source: "来源：澎湃新闻"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options: any) {

    var id = options.id;
    console.log(id);
    const contentInfo: any = await getSingleContentInfo(id)

    let result = app.towxml(contentInfo.content, 'markdown', {
      base: 'https://kaixuansuiyue.app.canglandata.com',             // 相对资源的base路径
      theme: 'light',                   // 主题，默认`light`
      // events:{                    // 为元素绑定的事件方法
      //     tap:(e)=>{
      //     }
      // }
    });

    // 更新解析数据
    this.setData({
      formatArticle: result,
      title: contentInfo.title,
      source: '来源：' + contentInfo.source,
      isLoading: false
    });
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