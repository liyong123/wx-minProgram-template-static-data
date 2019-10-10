// pages/wenjuan/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shiti_id: 0,
    shiti_content: [
      { 
        item_id:0, 
        result: [],
        shiti_type: 0,
        title: "我觉得比平常容易紧张或着急",
        content: [
          { id: 0, name: '没有或偶尔' },
          { id: 1, name: '有时' },
          { id: 2, name: '经常' },
          { id: 3, name: '总是如此' }
        ] 
      },
      {
        item_id: 1,
        shiti_type: 1,
        result: [0,1],
        title: "我觉得比平常容易愤怒",
        content: [
          { id: 0, name: '没有或偶尔' },
          { id: 1, name: '有时' },
          { id: 2, name: '经常' },
          { id: 3, name: '总是如此' }
        ]
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      const type = options.type;
      if(type == 1) {
        wx.setNavigationBarTitle({
          title: '心理调节测试'
        })
      }else if(type == 2) {
        wx.setNavigationBarTitle({
          title: '身体调节测试'
        })
      }else if(type == 3) {
        wx.setNavigationBarTitle({
          title: '学习规划测试'
        })
      }else {
        wx.setNavigationBarTitle({
          title: '家长保障测试'
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
     //todo: 访问试题接口...
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
  //下一题
  nextQuestion: function () {
    var that = this;
    if (that.data.shiti_id < that.data.shiti_content.length - 1) {
      that.setData({
        shiti_id: that.data.shiti_id + 1
      });
    }
  },
  //上一题
  lastQuestion: function () {
    var that = this;
    if (that.data.shiti_id > 0) {
      this.setData({
        shiti_id: that.data.shiti_id - 1
      });
    }
  }
})