import { IMAGE_PATH } from "../../config/global-config";
import { loadContentInfo } from "../../services/home/content";
import { isLogin, setThumbImageUrl } from "../../utils/util";

// pages/home/home.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    homeHeaderImageUrl: IMAGE_PATH + '7931c2e3-f21c-451d-82dd-d4170b74be14',
    homeM1: IMAGE_PATH + 'd5b97484-a2a8-4e66-b579-ecd5f2298c9e',
    homeM2: IMAGE_PATH + '53100a87-5f0d-41f5-be2e-86e6a27ac36a',
    homeM3: IMAGE_PATH + 'dc625f57-cf64-417c-a0f7-cc517ddc0732',
    homeG1: IMAGE_PATH + 'f9c64ba9-88c6-4d9b-b64d-421179698bd8',
    homeG2: IMAGE_PATH + '0d39b306-f635-459b-8838-36abe25ee8cd',
    homeG3: IMAGE_PATH + '31cc8123-f583-4823-bdc4-9735933cf5fd',
    homeG4: IMAGE_PATH + '66962d7d-431e-4aa0-a042-95e796b1609c',
    HomeGoAu: IMAGE_PATH + '167aedf5-38c2-4845-a29b-2de64c15a976',
    contentList: [
      // {
      //   "brief": "这个大动作，开辟了另一个1000亿赛道：电动飞机。",
      //   "date_created": "2023-07-21T13:30:02.000Z",
      //   "title": "突发，9000亿巨头大动作：1000亿",
      //   "id": "2b99aa53-162c-450f-a3d3-eb8ab8cad00d",
      //   "cover": {
      //     "id": IMAGE_PATH + "70accc08-1ae9-4b56-a702-a96b5510a4f9",
      //     "type": "image/png",
      //     "title": "Fac Q My Fwqaac T39"
      //   }
      // },
      // {
      //   "brief": "这个大动作，开辟了另一个1000亿赛道：电动飞机。",
      //   "date_created": "2023-07-21T13:30:02.000Z",
      //   "title": "突发",
      //   "id": "2b99aa53-162c-450f-a3d3-eb8ab8cad00d",
      //   "cover": {
      //     "id": IMAGE_PATH + "70accc08-1ae9-4b56-a702-a96b5510a4f9",
      //     "type": "image/png",
      //     "title": "Fac Q My Fwqaac T39"
      //   }
      // },
    ],
    page: 1,
    limit: 100
  },

  pageToLogin() {
    wx.navigateTo({
      url: '../user/login/index'
    })
  },

  onItemClick(event) {
    const itemIndex = event.currentTarget.dataset.index; //获取当前点击的列表项的下标
    const itemData: any = this.data.contentList[itemIndex]; //根据下标获取当前点击的列表项的数据

    console.log('您点击了：', itemData);
  },

  pageToAuthenticate() {
    console.log(isLogin());
    if (isLogin()) {
      wx.navigateTo({
        url: '../authenticate/authenticate'
      })
    } else {
      this.pageToLogin()
    }

  },

  pageToMiniProgram() {
    // AppId ： wx600a88e4d8d87152  
    // Path：pages/project_packages/pages/details/index?id==项目ID

    wx.navigateToMiniProgram({
      appId: 'wx600a88e4d8d87152',
      path: 'pages/project_packages/pages/details/index?id=1',
      extraData: {
        foo: 'bar'
      },
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    let data: any = await loadContentInfo()
    console.log(data);
    this.setData({
      contentList: data.data
    })
    this.data.contentList.forEach((item: any, index) => {
      let imageThumbUrl = setThumbImageUrl(item.cover)
      //console.log(item.cover)
      let str = "contentList[" + index + "].cover";

      // var t4 = "contentList[index].num";
      // this.setData({
      //   [t4]: 44444,
      // });
      this.setData({
        [str]: imageThumbUrl,
      })
    })
    console.log(this.data.contentList);
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