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
    //homeHeaderImageUrl: IMAGE_PATH + 'b0487175-6f82-4e77-90b9-072ef4530dd7',
    bannerImageUrl1: IMAGE_PATH + '3da2709f-7a67-4fc2-8b3d-413e541200c3',
    bannerImageUrl2: IMAGE_PATH + '97ba8b7d-b3c0-478f-9a89-cb9be84f30bb',
    index: 0,
    homeM1: IMAGE_PATH + 'd5b97484-a2a8-4e66-b579-ecd5f2298c9e',
    homeM2: IMAGE_PATH + '53100a87-5f0d-41f5-be2e-86e6a27ac36a',
    homeM3: IMAGE_PATH + 'dc625f57-cf64-417c-a0f7-cc517ddc0732',
    homeG1: IMAGE_PATH + 'f9c64ba9-88c6-4d9b-b64d-421179698bd8',
    homeG2: IMAGE_PATH + '0d39b306-f635-459b-8838-36abe25ee8cd',
    homeG3: IMAGE_PATH + '31cc8123-f583-4823-bdc4-9735933cf5fd',
    homeG4: IMAGE_PATH + '66962d7d-431e-4aa0-a042-95e796b1609c',
    HomeGoAu: IMAGE_PATH + '167aedf5-38c2-4845-a29b-2de64c15a976',
    contentList: [],
    videoUrl: IMAGE_PATH + '7aa2c0ed-bb27-434d-9cbf-fbc5d6787c02',
    hideVideoView: false,
    isVerified: false,
    auStatus: '',
    page: 1,
    limit: 100,
    verificationList: <any>[]
  },

  pageToLogin() {
    wx.navigateTo({
      url: '../user/login/index'
    })
  },


  pageToPublicHelp() {
    wx.navigateTo({
      url: '../publichelp/publichelp'
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

    console.log('您点击了：', itemData);
    //wx.navigateTo({ url: '../contentweb/contentweb?link=' + itemData.url })
    console.log('您点击了：', itemData.id);
    wx.navigateTo({ url: '../article/article?id=' + itemData.id })

    //     wx.postMessage({ data: 'foo' })
    // wx.postMessage({ data: {foo: 'bar'} })
    // wx.getEnv(function(res) { console.log(res.miniprogram) })

  },

  bindChange(e: any) {
    console.log(e.detail.source, e.detail.current, 'onChange');
    // if (e.detail.source === 'touch') {
    //     const current = e.detail.current;
    //     this.setData({
    //         index: current,
    //     });
    // }
    const current = e.detail.current;
    this.setData({
      index: current,
    });

  },

  onSwiperItemClick(event: any) {
    console.log(event);
    console.log(this.data.index);
    if (this.data.index === 0) {
      this.pageToAuthenticate();
    } else {
      this.pageToShopingMiniProgram()
    }
  },

  bindended(event: any) {
    console.log('播放结束');
    console.log(event);
    this.setData({
      hideVideoView: true
    })
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

    // 优待证专属福利：pages/common/blank-page/index?weappSharePath=pages%2Fhome%2Ffeature%2Findex%3Falias%3D87Mb5K2AhO%26kdt_id%3D127714740
    // 创业就业营：pages/common/blank-page/index?weappSharePath=pages%2Fhome%2Ffeature%2Findex%3Falias%3DoOE5uTpffk%26kdt_id%3D127714740
    // 大健康：pages/common/blank-page/index?weappSharePath=pages%2Fhome%2Ffeature%2Findex%3Falias%3D7JPE3pResH%26kdt_id%3D127714740
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

  pageToSpecialMiniProgram() {
    // AppId ： wx600a88e4d8d87152  
    // Path：pages/project_packages/pages/details/index?id==项目ID

    // 优待证专属福利：pages/common/blank-page/index?weappSharePath=pages%2Fhome%2Ffeature%2Findex%3Falias%3D87Mb5K2AhO%26kdt_id%3D127714740
    // 创业就业营：pages/common/blank-page/index?weappSharePath=pages%2Fhome%2Ffeature%2Findex%3Falias%3DoOE5uTpffk%26kdt_id%3D127714740
    // 大健康：pages/common/blank-page/index?weappSharePath=pages%2Fhome%2Ffeature%2Findex%3Falias%3D7JPE3pResH%26kdt_id%3D127714740
    wx.navigateToMiniProgram({
      appId: SHOPPING_APPID,
      path: 'pages/common/blank-page/index?weappSharePath=pages%2Fhome%2Ffeature%2Findex%3Falias%3D87Mb5K2AhO%26kdt_id%3D127714740',
      extraData: {
        foo: 'bar'
      },
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
  },

  pageToBusinessMiniProgram() {
    // AppId ： wx600a88e4d8d87152  
    // Path：pages/project_packages/pages/details/index?id==项目ID

    // 优待证专属福利：pages/common/blank-page/index?weappSharePath=pages%2Fhome%2Ffeature%2Findex%3Falias%3D87Mb5K2AhO%26kdt_id%3D127714740
    // 创业就业营：pages/common/blank-page/index?weappSharePath=pages%2Fhome%2Ffeature%2Findex%3Falias%3DoOE5uTpffk%26kdt_id%3D127714740
    // 大健康：pages/common/blank-page/index?weappSharePath=pages%2Fhome%2Ffeature%2Findex%3Falias%3D7JPE3pResH%26kdt_id%3D127714740
    wx.navigateToMiniProgram({
      appId: SHOPPING_APPID,
      path: 'pages/common/blank-page/index?weappSharePath=pages%2Fhome%2Ffeature%2Findex%3Falias%3DoOE5uTpffk%26kdt_id%3D127714740',
      extraData: {
        foo: 'bar'
      },
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
  },

  pageToHealthMiniProgram() {
    // AppId ： wx600a88e4d8d87152  
    // Path：pages/project_packages/pages/details/index?id==项目ID

    // 优待证专属福利：pages/common/blank-page/index?weappSharePath=pages%2Fhome%2Ffeature%2Findex%3Falias%3D87Mb5K2AhO%26kdt_id%3D127714740
    // 创业就业营：pages/common/blank-page/index?weappSharePath=pages%2Fhome%2Ffeature%2Findex%3Falias%3DoOE5uTpffk%26kdt_id%3D127714740
    // 大健康：pages/common/blank-page/index?weappSharePath=pages%2Fhome%2Ffeature%2Findex%3Falias%3D7JPE3pResH%26kdt_id%3D127714740
    wx.navigateToMiniProgram({
      appId: SHOPPING_APPID,
      path: 'pages/common/blank-page/index?weappSharePath=pages%2Fhome%2Ffeature%2Findex%3Falias%3D7JPE3pResH%26kdt_id%3D127714740',
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
      title: '小程序暂不支持此功能~',
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
      this.setData({
        verificationList: dataVer.data
      })
      if (this.data.verificationList.length > 0) {
        console.log(this.data.verificationList[0].status);
        this.setData({
          auStatus: this.data.verificationList[0].status
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