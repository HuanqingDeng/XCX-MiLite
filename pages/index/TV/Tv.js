// pages/index/newGs/newGs.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slides: [
      { image: 'https://i1.mifile.cn/f/i/18/mitv4/smart-screen.jpg' },
      { image: 'https://i1.mifile.cn/f/i/18/mitv4/index_yinzhi1.jpg' },
    ],
    goodsList:[],
    detail:[]
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b12d0e40f30f86cb1418f60/indexTv',
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