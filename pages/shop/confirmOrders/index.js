// pages/shop/confirmOrders/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    adress: '江苏省南京市江宁区秣周东路22号',
    name: '张三',
    telephone: '17839548695',
    goods_img: "../../../image/header_img.jpg",
    goodsName: "失眠枕头安神助睡眠神器 改善多梦催眠安眠保健枕 助睡眠中药枕",
    goodsAllType: [
      { type: "颜色分类", name: "红色" },
      { type: "尺寸", name: "43" }
    ],
    oneValue: 399,
    goodsNum: 1,
    youHui: "暂无优惠",
    fapiao: "本单不开具发票",
    goods_to_address: "/pages/user/myAddress/index?goods_to_address=1" //跳转到 收货地址管理 页面，带参数

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //todo:当从"收货地址管理"页面 从新选择地址时，带地址参数到此页面，从而带入参数从新访问接口，获取新的匹配的地址
    const params = options.address_code
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})