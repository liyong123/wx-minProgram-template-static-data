// pages/zjfa/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: [
      { name: "城市", value: '1' },
      { name: "价格", value: '2' },
      { name: "选择预约时间", value: '3' },
      { name: "咨询师性别", value: '4' },
      { name: "咨询方式", value: '5' },
    ],
    scrollX: true,
    selectedValue: '0',
    valueEqual: false,
    expertAll: [
      {
        imgUrl: '../../image/header_img.jpg',
        name: "张三",
        address: "郑州市",
        abstract: "著名心理学家，心理学博士，著名心理学家，心理学博士，著名心理学家，心理学博士，著名心理学家，心理学博士，著名心理学家，心理学博士，著名心理学家，心理学博士，著名心理学家，心理学博士，",
        goodField: [ "孤独", "自尊自信", "信任问题" ],
        value: "600"
      },
      {
        imgUrl: '../../image/header_img.jpg',
        name: "张三",
        address: "郑州市",
        abstract: "著名心理学家，心理学博士，著名心理学家，心理学博士，著名心理学家，心理学博士，著名心理学家，心理学博士，著名心理学家，心理学博士，著名心理学家，心理学博士，著名心理学家，心理学博士，",
        goodField: ["孤独", "自尊自信", "信任问题"],
        value: "600"
      },
      {
        imgUrl: '../../image/header_img.jpg',
        name: "张三",
        address: "郑州市",
        abstract: "著名心理学家，心理学博士，著名心理学家，心理学博士，著名心理学家，心理学博士，著名心理学家，心理学博士，著名心理学家，心理学博士，著名心理学家，心理学博士，著名心理学家，心理学博士，",
        goodField: ["孤独", "自尊自信", "信任问题"],
        value: "600"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  swichNav: function(e) {
    const that = this;
    const oldV = that.data.selectedValue;
    const current = e.currentTarget.dataset.current;
    
    if( oldV == current ) {
      that.setData({
        valueEqual: !that.data.valueEqual
      })
    }
    that.setData({
      selectedValue: current
    })
  }
})