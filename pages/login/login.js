const App = getApp();

// 工具类
const _http = require('../../utils/request.js');
const loginUrl = App.globalData.serverUrl + App.globalData.loginUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          // wx.getUserInfo({
          //   success: function (res) {
          //     console.log(res.userInfo)
          //   }
          // })
        }
      }
    })
  },

  /**
   * 授权登录
   */
  authorLogin: function (e) {
    let _this = this;
    if (e.detail.errMsg !== 'getUserInfo:ok') {
      return false;
    }
    wx.showLoading({
      title: "正在登录",
      mask: true
    });
    console.log("e:",e.detail.userInfo);
    // 执行微信登录
    wx.login({
      success: function (res) {
         const params = {
           //todo:e中的用户个人信息
         }
        // _http.requestPost({
        //   url: loginUrl,
        //   data: params,
        //   success: res => {
        //    //todo:登录成功，保存token到storage
        //    // const token = res.token;
        //    // wx.setStorageSync("token", token)
        //     wx.showToast({
        //       title: "登录成功",
        //       icon: 'none',
        //       duration: 2000
        //     });
        //     wx.switchTab({
        //       url: "/pages/index/index"
        //     })
        //     wx.hideLoading();
        //   }
        // })
        //临时模拟各种情况：
        wx.hideLoading();
        wx.setStorageSync("token", "ssssssss");
        wx.setStorageSync("userRole", "0");


        wx.navigateTo({
          url:  "/pages/temporary/index",
        })
       
        
      }
    });
  },

  /**
   * 授权成功 跳转回原页面
   */
  navigateBack: function () {
    wx.navigateBack();
    // let currentPage = wx.getStorageSync('currentPage');
    // wx.redirectTo({
    //   url: '/' + currentPage.route + '?' + util.urlEncode(currentPage.options)
    // });
  },

})