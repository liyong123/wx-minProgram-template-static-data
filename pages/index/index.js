//index.js
//获取应用实例，首页
import { pages } from '../../utils/tabbarContent.js'
const app = getApp()

Page({
  data: {
    pagesMenu: [],
    // 轮播数据
    bannerData:[ 
      { linkUrl: '/pages/wenjuan/index?type=1', imgUrl: '../../image/banner_01.png'},
      { linkUrl: '/pages/wenjuan/index?type=2', imgUrl: '../../image/banner_02.png' },
      { linkUrl: '/pages/wenjuan/index?type=3', imgUrl: '../../image/banner_04.png' },
      { linkUrl: '/pages/wenjuan/index?type=4', imgUrl: '../../image/banner_03.png' }
    ],
    daibiaoModuleData:[
      { name:'抗压训练', linkUrl: '/pages/user/index', imgUrl: '../../image/daibiao_module_01.png' },
      { name: '考试放松', linkUrl: '/pages/user/index', imgUrl: '../../image/daibiao_module_02.png' },
      { name: '专注力训练', linkUrl: '/pages/user/index', imgUrl: '../../image/daibiao_module_03.png' },
      { name: '答题技巧', linkUrl: '/pages/user/index', imgUrl: '../../image/daibiao_module_04.png' },
      { name: '高分陪读', linkUrl: '/pages/user/index', imgUrl: '../../image/daibiao_module_05.png' },
      { name: '学长陪伴', linkUrl: '/pages/user/index', imgUrl: '../../image/daibiao_module_06.png' },
      { name: '适应力训练', linkUrl: '/pages/user/index', imgUrl: '../../image/daibiao_module_07.png' },
      { name: '考场保障', linkUrl: '/pages/user/index', imgUrl: '../../image/daibiao_module_08.png' },
      { name: '高中保障', linkUrl: '/pages/user/index', imgUrl: '../../image/daibiao_module_09.png' },
      { name: '综合服务', linkUrl: '/pages/user/index', imgUrl: '../../image/daibiao_module_10.png' }
    ],
    // 专家专栏
    expertDatas:[
      { 
        imgUrl: '../../image/daibiao_module_01.png', 
        linkUrl: '', 
        id: '01',
        title: "越挣扎越下沉,该如何对待我们的焦虑", 
        abstract: "我们对外界的恐惧，能意识得是从我们离开妈妈的怀抱,开始探索这个世界开始的",
        date: "2019-08-25",
        source: "大豫网"
      },
      {
        imgUrl: '../../image/daibiao_module_01.png',
        linkUrl: '',
        id: '01',
        title: "越挣扎越下沉,该如何对待我们的焦虑",
        abstract: "我们对外界的恐惧，能意识得是从我们离开妈妈的怀抱,开始探索这个世界开始的",
        date: "2019-08-25",
        source: "大豫网"
      }, {
        imgUrl: '../../image/daibiao_module_01.png',
        linkUrl: '',
        id: '01',
        title: "越挣扎越下沉,该如何对待我们的焦虑",
        abstract: "我们对外界的恐惧，能意识得是从我们离开妈妈的怀抱,开始探索这个世界开始的",
        date: "2019-08-25",
        source: "大豫网"
      }
    ],
    zhuajiaMessageWidth: (wx.getSystemInfoSync().windowWidth - 120) + "px",
  

  },
  onLoad: function () {
    const userRole = wx.getStorageSync("userRole") || '0';//获取用户角色，决定显示哪个tabbar
    this.setData({
      pagesMenu: pages[userRole * 1]
    })
  },
  onShow: function(){
   
  },

 
 
})
