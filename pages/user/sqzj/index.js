// pages/user/sqzj/index.js
const App = getApp();
// 工具类
const _http = require('../../../utils/request.js');
const uploadUrl = App.globalData.serverUrl + App.globalData.uploadUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zszm: "",
    zszm_add_show: true,
    zsfm: "",
    grjl: "",
    jqzjz: ""

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
  uploadPic: function(e) {
    var that = this;
    const index = e.currentTarget.dataset.index
    if(index== 1) {
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success(res) {
          debugger
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFilePaths
          _http.requestUpload({
            url: "",
            filePath: tempFilePaths[0],
            name: "file",
            formData: {},
            success: (res) => {
              wx.showToast({
                title: '上传成功',
                icon: 'none',
                duration: 2000
              });
              that.zszm = res.data.url;
              that.zszm_add_show = false;
            }
          })
        }
      })
    }
    //todo: 2,3,4
   
  }
})