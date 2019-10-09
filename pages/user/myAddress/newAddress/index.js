// pages/user/myAddress/newAddress/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    editBool:false,
    region: ['北京市', '北京市', '东城区'],
    regionCode: ["110000", "110100", "110101"],
    switchChecked: false,
    goods_to_address: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const editBool = options.edit;
    const addressCode = options.address_code;//地址编号，确认编辑哪个地址,
    const goods_to_address = options.goods_to_address;
    if(editBool) {
      wx.setNavigationBarTitle({
        title: '编辑收货地址'
      })
      this.setData({
          editBool: true
      })
    }else {
      wx.setNavigationBarTitle({
        title: '新增收货地址'
      })
      this.setData({
        editBool: false
      })
    }
    
    if (goods_to_address) {
      this.setData({
        goods_to_address: true
      })
    }else {
      this.setData({
        goods_to_address: false
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
  //获取省市区
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail)
    this.setData({
      region: e.detail.value,
      regionCode: e.detail.code
    })
  },
  //提交表单
  formSubmit: function (e) {
    const params = e.detail.value;
    // todo：判断值是否为空

    const goods_to_address = this.goods_to_address;
    if (goods_to_address) {
       //跳转到 提交商品页面
    }else{
       //跳转到 "我的"页面
    }
  }
})