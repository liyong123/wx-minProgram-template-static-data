//index.js
//获取应用实例，家长首页
import { pages } from '../../utils/tabbarContent.js'
const app = getApp()

Page({
  data: {
    pagesMenu: [],
    servicePerson: "88",
    serviceScore: "100",
    userOrderMes: [
      { imgUrl: "../../image/user_order_message01.png", name: '全部订单'},
      { imgUrl: "../../image/user_order_message02.png", name: '待支付' },
      { imgUrl: "../../image/user_order_message03.png", name: '待发货' },
      { imgUrl: "../../image/user_order_message04.png", name: '待收货' },
    ],
    userStateDatas: [
      { linkUrl: '/pages/user/myState/index',imgUrl: "../../image/user_state01.png", name: '我的状态'},
      { linkUrl: '/pages/user/myMessage/index',imgUrl: "../../image/user_state02.png", name: '我的消息' },
      { linkUrl: '/pages/user/myAddress/index',imgUrl: "../../image/user_state03.png", name: '收货地址管理' },
      { linkUrl: '/pages/user/myState/index',imgUrl: "../../image/user_state04.png", name: '销售明细' },
    ]
  },
  onLoad: function () {
    const userRole = wx.getStorageSync("userRole") || '0';//获取用户角色，决定显示哪个tabbar
    this.setData({
      pagesMenu: pages[userRole * 1]
    })
  },
  onShow: function () {

  },



})
