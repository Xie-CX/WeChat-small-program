// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cat_id:1
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
  changeClass: function(e) {
    var that = this;
    that.setData({
      cat_id: e.target.dataset.cat_id
    }) 
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
    return {
      title: '分类',
      path: ''
    }
  }
})