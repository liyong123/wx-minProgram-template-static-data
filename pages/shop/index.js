// pages/shop/index.js
import { pages } from '../../utils/tabbarContent.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pagesMenu: [],
    tabqieCurrentTab: 0,
    tabData:[ //tab切
      { title: "心理健康" },
      { title: "身体保健" },
      { title: "生涯规划" },
      { title: "升学咨询" },
    ],
    goodsData: [ //商品数据
      { imgUrl: "../../image/header_img.jpg", goodsLink: '/pages/shop/goodsDetail/index?id=123', abstract: '失眠枕头安神助睡眠神器 改善多梦催眠安眠保健枕 助睡眠中药枕', value: '688' },
      { imgUrl: "../../image/header_img.jpg", goodsLink: '/pages/shop/goodsDetail/index?id=124', abstract: '失眠枕头安神助睡眠神器 改善多梦催眠安眠保健枕', value: '688' },
      { imgUrl: "../../image/header_img.jpg", goodsLink: '/pages/shop/goodsDetail/index?id=123', abstract: '失眠枕头安神助睡眠神器 改善多梦催眠安眠保健枕 助睡眠中药枕', value: '688' },
      { imgUrl: "../../image/header_img.jpg", goodsLink: '/pages/shop/goodsDetail/index?id=123', abstract: '失眠枕头安神助睡眠神器 改善多梦催眠安眠保健枕', value: '688' },
      { imgUrl: "../../image/header_img.jpg", goodsLink: '/pages/shop/goodsDetail/index?id=123', abstract: '失眠枕头安神助睡眠神器 改善多梦催眠安眠保健枕 助睡眠中药枕', value: '688' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    const userRole = wx.getStorageSync("userRole") || '0';//获取用户角色，决定显示哪个tabbar
    this.setData({
      pagesMenu: pages[userRole * 1]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      //todo：分页处理，触底page +1，访问接口，得到的数据contact到旧数据上。
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //获取tabqie子组件的 currentTab值
  onMyEvent: function(e) {
    this.setData ({
      tabqieCurrentTab: e.detail
    })
    console.log(this.data.tabqieCurrentTab)
    var cTab = this.data.tabqieCurrentTab;
    //todo: 访问接口，cTab 为参数;
  }
})