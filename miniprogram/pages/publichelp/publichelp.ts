import { BASE_URL, IMAGE_PATH } from "../../config/global-config"


// pages/result/result.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerImageUrl: IMAGE_PATH + '494f49b3-f9e4-4fa3-a522-f58256d492c6',
    dataList: [
      {
        "id": 294841031667482624,
        "name": "飞莺计划，“益”起助力中小公益组织“腾飞”",
        "description": "旨在持续赋能中小公益组织，帮助中小公益组织“腾飞”。",
        "category": "其他",
        "thumb": "https://horizonpublicstorage.bangbangwang.cn/horizon/img/202302/02/2064XoLLutesEC4XaMkwWeUGsrfABlX91NGAqn86.jpg"
      },
      {
        "id": 313974837863251968,
        "name": "救援有道-为爱加速",
        "description": "本项目发起计划在全国偏远地区为乡镇医院筹集18辆救护车，提高当地农村地区急救急诊抢救的成功率。",
        "category": "医疗卫生",
        "thumb": "https://horizonpublicstorage.bangbangwang.cn/horizon/img/202303/27/qWTOa9D1aXJ6YwnXQG82LvoZs9Dg7lfVJxhFn5yS.jpg"
      },
      {
        "id": 318022146875981824,
        "name": "思源“安全岛”-应急培训计划",
        "description": "在全国范围内人口密度高的社区、学校、乡村开展防震、防火、防水、医疗急救等多元化的应急安全知识培训",
        "category": "赈灾救援",
        "thumb": "https://horizonpublicstorage.bangbangwang.cn/horizon/img/202304/07/UT7vqZjrFHLk21dkx8os86q172MdjHdrBmdRhXyJ.png"
      },
      {
        "id": 347793028926144512,
        "name": "助丰宁村民抗旱打井",
        "description": "支持河北丰宁县天桥镇上方营村、五道沟门村抗旱打井，便于机井灌溉农田，力争将旱情损失降到最低。",
        "category": "乡村振兴",
        "thumb": "https://horizonpublicstorage.bangbangwang.cn/horizon/img/202306/29/MeRo9moGGvNfcctZWehlYFaAqw5RJD3iTRvexEl4.jpg"
      },
      {
        "id": 352765732053843968,
        "name": "筑梦微光 守护事实孤儿",
        "description": "和我们一起，为事实孤儿群体带去生活资助，筑造梦的远方，打亮希望的微光。",
        "category": "教育助学",
        "thumb": "https://horizonpublicstorage.bangbangwang.cn/horizon/img/202307/19/8Qd0a8iuQ7C8tosLFB2PKmrSBhLFXiXhYzxml6AL.jpg"
      }
    ]
  },

  pageToMiniProgram(id: string) {
    // AppId ： wx600a88e4d8d87152  
    // Path：pages/project_packages/pages/details/index?id==项目ID
    wx.navigateToMiniProgram({
      appId: 'wx600a88e4d8d87152',
      path: 'pages/project_packages/pages/details/index?id=' + id,
      extraData: {
        foo: 'bar'
      },
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
  },

  onItemClick(event: any) {
    console.log(event);
    const itemIndex = event.currentTarget.dataset.index;
    const itemData: any = this.data.dataList[itemIndex];
    this.pageToMiniProgram(itemData.id)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {

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