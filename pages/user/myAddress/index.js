// pages/user/myAddress/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 地址，默认第一个地址就是默认地址
    addressDatas: [  
      { name: '李四', telephone: '13914713688', address: "江苏省南京市江宁区秣周东路", address_code: "01"},
      { name: '张三分', telephone: '13914713688', address: "江苏省南京市江宁区秣周东路江苏省南京市江宁区秣周东路江苏省南京市江宁区秣周东路", address_code: "02"},
      { name: '宋江', telephone: '13914713688', address: "江苏省南京市江宁区秣周", address_code: "03" }
    ],
    goods_to_address: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const params = options.goods_to_address;//从商品页跳转过来
     if(params) {
       this.setData({
         goods_to_address: true
       })
     }
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
  //删除地址
  deleteAddress: function(e) {
    const v = e.currentTarget.dataset.deletecode
  }

})