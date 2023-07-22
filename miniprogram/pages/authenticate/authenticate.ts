import { BASE_URL, IMAGE_PATH, PRIVATE_FOLDER_KEY, TOKEN } from "../../config/global-config";
import { fetchVerification } from "../../services/user/IdentityAuth";

// pages/authenticate/authenticate.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chooseType: '',
    cardFront: '',
    cardBack: '',
    cardName: '',
    cardNumber: '',
    frontTempFilePath: IMAGE_PATH + '7e6b563f-e357-4f18-947c-f2803ffca98f',
    backTempFilePath: IMAGE_PATH + 'e5fff847-ce67-4459-aff2-c5ca1000137e'
  },


  onChooseImage(event: any) {
    const _this = this;
    // console.log(event);
    _this.data.chooseType = event.currentTarget.id;
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      async success(res) {
        //console.log(res.tempFiles[0].tempFilePath)
        if (res.tempFiles.length > 0) {
          await _this.setData({
            [_this.data.chooseType]: res.tempFiles[0].tempFilePath
          })
          _this.onUploadImage()
        }
      }
    });
  },


  async onSumbitVerification(formData: any) {
    var _this = this;
    await _this.setData({
      cardName: formData.detail.value.name,
      cardNumber: formData.detail.value.number
    })

    console.log(_this.data);

    if (_this.data.cardFront.length === 0 || _this.data.cardBack.length === 0 || _this.data.cardName.length === 0 || _this.data.cardNumber.length === 0) {
      wx.showToast({
        title: '请完善认证信息',
        duration: 1000,
        mask: true,
      })
      return
    }
    let parms: any = {
      card_front: _this.data.cardFront,
      card_back: _this.data.cardBack,
      card_name: _this.data.cardName,
      card_number: _this.data.cardNumber,
    }
    const data = await fetchVerification(parms)
    // const jsonData = JSON.parse(data)
    // console.log(jsonData.error[0].message);    
    if (data) {
      wx.showToast({
        title: '提交审核成功!',
        icon: 'success',
        duration: 1000,
        mask: true,
        success: () => {
          setTimeout(() => {
            wx.redirectTo({
              url: '../result/result'
            });
          }, 1000)
        }
      });
      //wx.navigateBack({})
      // wx.redirectTo({
      //   url: '../result/result'
      // });

    } else {
      wx.showToast({
        title: '提交信息失败，请重试!',
        duration: 1000,
        mask: true,
      })
    }
  },

  onUploadImage() {
    var _this = this;
    var mFilePath = '';
    var cardImageKey = ''
    console.log(_this.data)
    if (_this.data.chooseType === 'frontTempFilePath') {
      cardImageKey = 'cardFront';
      mFilePath = _this.data.frontTempFilePath;
    } else {
      cardImageKey = 'cardBack';
      mFilePath = _this.data.backTempFilePath;
    }
    wx.uploadFile({
      url: BASE_URL + 'files',
      header: {
        authorization: wx.getStorageSync('token'),
      },
      filePath: mFilePath,
      name: 'file',
      formData: {
        'folder': PRIVATE_FOLDER_KEY,
      },
      success: function (res) {
        if (res.statusCode === 200) {
          var data: any = res.data;
          console.log(data);
          const jsonData = JSON.parse(data)
          //console.log(jsonData.data.uploaded_by)
          console.log([cardImageKey]);
          _this.setData({
            [cardImageKey]: jsonData.data.id,
          })
        }
      },
      fail: function (error) {
        console.log(error);
      }
    });
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