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
        type: 0,
        result: [],
        shiti_type: 1,
        title: "我觉得比平常容易紧张或着急",
        content: [
          { id: 0, name: '没有或偶尔', checked: false },
          { id: 1, name: '有时', checked: false },
          { id: 2, name: '经常', checked: false  },
          { id: 3, name: '总是如此', checked: false  }
        ] 
      },
      {
        item_id: 1,
        shiti_type: 0,
        type: 0,
        result: [],
        title: "我觉得比平常容易愤怒",
        content: [
          { id: 0, name: '没有或偶尔', checked: false  },
          { id: 1, name: '有时', checked: false  },
          { id: 2, name: '经常', checked: false  },
          { id: 3, name: '总是如此', checked: false  }
        ]
      }
    ],
    line_percent: 0,

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
    var that = this;
    //todo: 访问试题接口...
    that.linePercent()

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


    const contentNumber = this.data.shiti_content[this.data.shiti_id].content;
    



    if (that.data.shiti_id < that.data.shiti_content.length - 1) {
      that.setData({
        shiti_id: that.data.shiti_id + 1
      });
      that.linePercent()
    }
  },
  //上一题
  lastQuestion: function () {
    var that = this;
    if (that.data.shiti_id > 0) {
      this.setData({
        shiti_id: that.data.shiti_id - 1
      });
      that.linePercent()
    }
  },
  //进度条
  linePercent: function() {
    var  that = this;
    that.setData({
      line_percent: ((that.data.shiti_id + 1) / that.data.shiti_content.length) * 100
    })
  },

  //点击表单
  formSubmit: function (e) {
    const params = e.detail.value;
  },
  
  radioChange: function(e) {
    this.setData({
      itemChooseValue:e.detail.value
    });
    
    const contentNumber = this.data.shiti_content[this.data.shiti_id].content;
    const radioV = e.detail.value;
    for (var i = 0; i < contentNumber.length; i ++) {
      if(radioV == contentNumber[i].id){
        contentNumber[i].checked = true;
      }else {
        contentNumber[i].checked = false
      }
    }
    console.log("radioV:", e.detail.value)
  },

  checkboxChange: function(e) {
    this.setData({
      itemChooseValue: e.detail.value
    })

    const contentNumber = this.data.shiti_content[this.data.shiti_id].content;
    const result = this.data.shiti_content[this.data.shiti_id].result; //result：上一题是否选过
    const radioV = e.detail.value;

    if(result.length <= 0 ) {
      if( radioV.length > 0) {
        for (var k = 0; k < radioV.length; k++) {
          for (var i = 0; i < contentNumber.length; i++) {
            if (parseInt(radioV[k]) == contentNumber[i].id) {

              if (!contentNumber[i].checked) {
                contentNumber[i].checked = true;
              } else {
                contentNumber[i].checked = false;
              }

            }
          }
        }
      }else {
        for (var i = 0; i < contentNumber.length; i++) {
          contentNumber[i].checked = false;
        }
        
      }
      
    }

    
    
    console.log("contentNumber:", contentNumber)
    
    console.log("checkboxV:", e.detail.value)
  },


  checkboxClick: function(e){
    
  }

})