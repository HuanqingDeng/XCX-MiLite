// pages/index/newGs/newGs.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slides: [
      { image: 'https://i8.mifile.cn/b2c-mimall-media/7489e0e81048e3817f1197179d4f0463.jpg?bg=FFFFFF' },
      { image: 'https://i8.mifile.cn/b2c-mimall-media/21b4f61d7dff57fa5f7047e3da0dde0e.jpg?bg=FFFFFF' },
    ],
    goodsList:[],
    detail:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b13504fe2546c72e6c64ea5/indexZhineng',
      success: (res)=>{
        this.setData({
          goodsList:res.data.data
        })
        // console.log(this.data.detail)
      }
    })
  },
  toDetail:function(e){
    var index=e.currentTarget.dataset.index;
    // console.log(index) 
    var detail=this.data.goodsList[index];
    // console.log(detail)
    app.globalData.detail=detail;
    console.log(app.globalData.detail)
    this.setData({
      detail:detail
    })
    wx.navigateTo({
      url: '../../buy/buy',
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