// pages/shop/goodsDetail/index.js


// 记录产品规格的数组
const goodsSpecArr = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播数据
    bannerData: [
      { linkUrl: '/pages/user/index', imgUrl: '../../image/shop_goods_bg.png' },
      { linkUrl: '/pages/user/index', imgUrl: '../../image/shop_goods_bg.png' },
      { linkUrl: '/pages/user/index', imgUrl: '../../image/shop_goods_bg.png' }
    ],
    // bannerFatherH: 200,
    // useBannerFatherH: true
    goodsValue1: 399,
    originValue: 599,
    chooseGoodsType: [
      { type: "颜色分类" },
      { type: "尺码" }
    ],
    goodsAbstract: "足底按摩球肌肉放松经膜球健身脚底瑜伽颈膜经络球",
    tabData: [ //tab切
      { title: "商品" },
      { title: "详情" },
      { title: "评价" },
    ],
    tabqieCurrentTab: 0,
    iconImageShow: {
      show: true,
      url: "../../image/shop_detail_qie.png"
    },
    //图文详情 图片
    twxqDatas: [
      { imgUrl: "../../../image/shop_goods_bg.png" },
      { imgUrl: "../../../image/shop_goods_bg.png" },
      { imgUrl: "../../../image/shop_goods_bg.png" },
    ],
    // 所有评价数据
    allPjDatas: [
      { headerImg: "../../../image/shop_goods_bg.png", name: "西门吹雪", date: "2019-08-30 12:30", pjFontContent: "东西很好用，也很实惠，东西很好用，也很实惠东西很好用，也很实惠东西很好用，也很实惠东西很好用，也很实惠" },
      { headerImg: "../../../image/shop_goods_bg.png", name: "西门吹雪", date: "2019-08-30 12:30", pjFontContent: "东西很好用，也很实惠" },
      { headerImg: "../../../image/shop_goods_bg.png", name: "西门吹雪", date: "2019-08-30 12:30", pjFontContent: "东西很好用，也很实惠" },       { headerImg: "../../../image/shop_goods_bg.png", name: "西门吹雪", date: "2019-08-30 12:30", pjFontContent: "东西很好用，也很实惠" }
    ],
    showBottomPopup: false,
    pop_up_goods_img: "../../../image/shop_goods_bg.png",
    stock: '9999',
    // 产品的规格
    goodsMultiSpec: {}, 
    scrollTop: 0,
    goods_num: 1, // 商品数量
    // 分享按钮组件
    share: {
      show: false,
      cancelWithMask: true,
      cancelText: '关闭',
      actions: [{
        name: '发送给朋友',
        openType: 'share'
      }],
    },
    floorstatus: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     let _this = this;
    // 获取商品信息
    _this.getGoodsDetail();
  },
  /**
   * 获取商品信息
   */
  getGoodsDetail() {
    //todo: 访问接口，获取产品信息
    //模拟 商品详情数据
    let _this = this,
    gs_spec = {
      spec_attr: [
        {
          group_id: "01",
          group_name: "尺码",
          spec_items: [
            { item_id: "011", spec_value: "42" },
            { item_id: "012", spec_value: "43" },
          ]
        },
        {
          group_id: "02",
          group_name: "颜色",
          spec_items: [
            { item_id: "021", spec_value: "白色" },
            { item_id: "022", spec_value: "黑色" }
          ]
        }
      ],
      spec_list: [
        {
          spec_sku_id: "011_021",
          form: {
            goods_price: "123",
            line_price: "123",
            stock_num: "6666",
            image_id: "1",
            image_path: "../../../image/header_img.jpg"
          }
        },
        {
          spec_sku_id: "011_022",
          form: {
            goods_price: "125",
            line_price: "125",
            stock_num: "7777",
            image_id: "2",
            image_path: "../../../image/shop_goods_bg.png"
          }
        },
        {
          spec_sku_id: "012_021",
          form: {
            goods_price: "126",
            line_price: "126",
            stock_num: "8888",
            image_id: "3",
            image_path: "../../../image/header_img.jpg"
          }
        },
        {
          spec_sku_id: "012_022",
          form: {
            goods_price: "127",
            line_price: "127",
            stock_num: "9999",
            image_id: "4",
            image_path: "../../../image/shop_goods_bg.png"
          }
        }
      ]
    };
    _this._initManySpecData(gs_spec)
    
    
  },
  /**
  * 初始化商品多规格
  */
  _initManySpecData(data) {
    for (let i in data.spec_attr) {
      for (let j in data.spec_attr[i].spec_items) {
        if (j < 1) {
          data.spec_attr[i].spec_items[0].checked = true;
          goodsSpecArr[i] = data.spec_attr[i].spec_items[0].item_id;
        }
      }
    }
    this.setData({
      goodsMultiSpec: data
    })
  },
  /**
   * 点击切换不同规格
   */
  onSwitchSpec(e) {
    let _this = this,
    attrIdx = e.currentTarget.dataset.attrIdx,
    itemIdx = e.currentTarget.dataset.itemIdx,
    goodsMultiSpec = _this.data.goodsMultiSpec;
    for (let i in goodsMultiSpec.spec_attr) {
      for (let j in goodsMultiSpec.spec_attr[i].spec_items) {
        if (attrIdx == i) {
          goodsMultiSpec.spec_attr[i].spec_items[j].checked = false;
          if (itemIdx == j) {
            goodsMultiSpec.spec_attr[i].spec_items[itemIdx].checked = true;
            goodsSpecArr[i] = goodsMultiSpec.spec_attr[i].spec_items[itemIdx].item_id;
          }
        }
      }
    }
    console.log(goodsSpecArr)
    _this.setData({
      goodsMultiSpec
    });
    // 更新商品规格信息
    _this._updateSpecGoods();
  },

  /**
   * 更新商品规格信息
   */
  _updateSpecGoods() {
    let _this = this,
      specSkuId = goodsSpecArr.join('_');
    // 查找skuItem
    let spec_list = _this.data.goodsMultiSpec.spec_list,
      skuItem = spec_list.find((val) => {
        return val.spec_sku_id == specSkuId;
      });
    // 记录goods_sku_id
    // 更新商品价格、图片、库存
    if (typeof skuItem === 'object') {
      _this.setData({
        goods_sku_id: skuItem.spec_sku_id,
        goodsValue1: skuItem.form.goods_price,
        stock: skuItem.form.stock_num,
        pop_up_goods_img: skuItem.form.image_id > 0 ? skuItem.form.image_path : _this.data.pop_up_goods_img
      });
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
     //todo：展示更多评价
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    let _this = this;
    // 构建页面参数
    let params = '1001'
    return {
      title: "商品的名称",
      path: "/pages/goods/index?" + params
    };
  },
  //获取tabqie子组件的 currentTab值
  onMyEvent: function (e) {
    this.setData({
      tabqieCurrentTab: e.detail
    })
    console.log(this.data.tabqieCurrentTab)
    var cTab = this.data.tabqieCurrentTab;
    //todo: 访问接口，cTab 为参数。
  },
  //popup点击事件
  popToggle: function() {
     this.setData({
       showBottomPopup: !this.data.showBottomPopup
     })
  },


  /**
   * 增加商品数量
   */
  onIncGoodsNumber() {
    let _this = this;
    _this.setData({
      goods_num: ++this.data.goods_num
    })
  },

  /**
   * 减少商品数量
   */
  onDecGoodsNumber() {
    let _this = this;
    if (_this.data.goods_num > 1) {
      _this.setData({
        goods_num: --_this.data.goods_num
      });
    }
  },

  /**
   * 自定义输入商品数量
   */
  onInputGoodsNum(e) {
    let _this = this,
      iptValue = e.detail.value;
    _this.setData({
      goods_num: /(^[1-9]\d*$)/.test(iptValue) ? iptValue : 1
    });
  },
  /**
   * 显示分享选项
   */
  onClickShare(e) {
    let _this = this;
    _this.setData({
      'share.show': true
    });
  },
  /**
  * 关闭分享选项
  */
  onCloseShare() {
    let _this = this;
    _this.setData({
      'share.show': false
    });
  },
  /**
    * 显示/隐藏 返回顶部按钮
    */
  scroll(e) {
    let _this = this;
    _this.setData({
      floorstatus: e.detail.scrollTop > 200
    })
  },
  /**
  * 返回顶部
  */
  onScrollTop(t) {
    let _this = this;
    _this.setData({
      scrollTop: 0
    });
  },
  /**
     * 加入购物车and立即购买
     */
  onConfirmSubmit(e) {
    let _this = this,
      submitType = e.currentTarget.dataset.type;
    if (submitType === 'buyNow') {
      // 立即购买
      wx.navigateTo({
        url: '/pages/shop/confirmOrders/index?' + "",
        success() {
          // 关闭弹窗
          _this.popToggle();
        }
      });
    } else if (submitType === 'addCart') {
      
    }
  },
})