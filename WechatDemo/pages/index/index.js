//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],  
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 500,
    show:false
  },
  //事件处理函数
  goDetail: function() {
    // console.log(this.route);
    wx.navigateTo({
      url: '../detail/detail?goods_id=1'
    })
  },
  goList: function () {
    wx.navigateTo({
      url: '../list/list?position_id=1'
    })
  },
  goIndex: function () {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  goCategory: function () {
    wx.navigateTo({
      url: '../category/category'
    })
  },
  goCart: function () {
    wx.navigateTo({
      url: '../cart/cart'
    })
  },
  goMine: function () {
    wx.navigateTo({
      url: '../mine/mine'
    })
  },
  onLoad: function (options) {
    // 页面初始化 options 为页面跳转所带来的参数
    // get localtion
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        // console.log(res)
      }
    })
  },
  onReady: function() {
    // 页面渲染完成
    var that = this;
    // wx.request({
    //   url: 'http://m.pinxun365.com/cart/get-cart-count.html',
    //   data: {
        
    //   },
    //   method:'POST',
    //   header: { 'Content-Type': 'application/json' },
    //   success: function (res) {
    //     console.log(res)
    //     that.data = res.data.data;
    //     that.setData({
    //       data: that.data,
    //       // color: !that.data.color
    //     });
    //   },
    //   fail: function (res) {
    //     console.log(res.data.errmsg);
    //   }
    // })  
  },
  onShow: function() {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload:function() {
    // 页面关闭
  },
  onReachBottom:function() {
    var that = this;
    that.setData({
      show: !that.data.show
    });
  },
  onShareAppMessage: function () {
    return {
      title: '首页',
      path: ''
    }
  }
})