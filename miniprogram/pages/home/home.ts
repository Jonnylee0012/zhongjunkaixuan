import { IMAGE_PATH, SHOPPING_APPID } from "../../config/global-config";
import { loadContentInfo } from "../../services/home/content";
import { fetchVerificationList } from "../../services/user/IdentityAuth";
import { loadUserInfo } from "../../services/user/userInfo";
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
    contentList: [],
    isVerified: false,
    auStatus: '',
    page: 1,
    limit: 100
  },

  pageToLogin() {
    wx.navigateTo({
      url: '../user/login/index'
    })
  },


  pageToAu() {
    wx.navigateTo({
      url: '../authenticate/authenticate'
    })
  },

  pageToAuResult() {
    wx.navigateTo({
      url: '../result/result'
    })
  },

  onItemClick(event) {
    const itemIndex = event.currentTarget.dataset.index; //获取当前点击的列表项的下标
    const itemData: any = this.data.contentList[itemIndex]; //根据下标获取当前点击的列表项的数据

    console.log('您点击了：', itemData.url);
    wx.navigateTo({ url: '../contentweb/contentweb?link=' + itemData.url })
    //     wx.postMessage({ data: 'foo' })
    // wx.postMessage({ data: {foo: 'bar'} })
    // wx.getEnv(function(res) { console.log(res.miniprogram) })

  },

  pageToAuthenticate() {
    if (isLogin()) {
      if (this.data.isVerified) {
        this.pageToAuResult()
      } else {
        if (this.data.auStatus === 'ing' || this.data.auStatus === 'done') {
          this.pageToAuResult()
        } else {
          this.pageToAu()
        }
      }
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

  pageToNuKnowPage() {
    wx.showToast({
      title: '小程序暂不支持!',
      icon: 'success',
      duration: 500,
      mask: true,
    });

  },

  pageToShopingMiniProgram() {
    wx.navigateToMiniProgram({
      appId: SHOPPING_APPID,
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
    if (isLogin()) {
      //filter[_and][0][user_created][_contains]: 596776e8-ba8e-4839-b20e-1bb326b1080a
      const useInfo: any = await loadUserInfo()
      console.log(useInfo.data)
      // console.log(useInfo.data.is_verified)
      this.setData({
        isVerified: useInfo.data.is_verified
      })
      let userId = wx.getStorageSync('user_id')
      console.log(userId);
      let dataVer: any = await fetchVerificationList()
      console.log(dataVer);
      console.log(dataVer.data[0].status);
      if (dataVer.data[0].status) {
        this.setData({
          auStatus: dataVer.data[0].status
        })
      }
    }
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