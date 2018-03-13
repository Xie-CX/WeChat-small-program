// pages/login/login.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:'',
    imgFile:''
  },
  userNameInput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  passWdInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  uploadImage: function() {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths);
        that.setData({
          imgFile: tempFilePaths
        })
      }
    }) 
  },
  confirm: function() {
    // console.log("用户名：" + this.data.username + " 密码：" + this.data.password);
    if (this.data.username != '' && this.data.password != '') {
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 1000
      }) ;
      // wx.redirectTo({
      //   url: '../logs/logs'
      // })
      setTimeout(
        () => {
          wx.navigateTo({
            url: '../logs/logs'
          })
        },
        1100
      )
    }else{
      wx.showModal({
        title: '提示',
        content: '账号/密码错误！',
        success: function (res) {
          console.log(res);
          if (res.confirm) {
            wx.redirectTo({
              url: 'login'
            })  
          }
        }
      })
    }
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
  
  }
})