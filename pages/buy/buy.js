const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodds:[],
    toCartMsg:[],
    person:{
      "personImg":"https://i8.mifile.cn/b2c-mimall-media/130b5d1edf2b08c7d652c305a3b51ba8.jpg?w=1212&h=716",
      "nickname":"小花逛商城",
      "content":"AR太好玩了，分享到朋友圈很多人问怎么弄的，可惜评价没法传视频，米兔应该给我广告费。 卡片有120多张，一年级的朋友玩了一个多小时了。。很多知识点，英语发音貌似老外录的，很标准。 小米出品，必须精品！"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let id=options.currentTarget.dataset.id;
  
   this.setData({
     goodds:app.globalData.detail
   })
  //  console.log(this.data.goodds)
  },
  tocart:function(){
    this.setData({
      toCartMsg:this.data.goodds
    })
    app.globalData.tocartMsg.push(this.data.toCartMsg);
    wx.showToast({
      title: '已加入购物车',
      icon: 'success',
      duration: 2000
    })
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