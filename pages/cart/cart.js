// pages/cart/cart.js
const app = getApp()
Page({
  data: {
    selectAllStatus:false,
    totalPrice:0,
    payCount:0,
    carMsg:[],
    hid:false
  },
  selectAll: function (e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let carMsg = this.data.carMsg;
    for (let i = 0; i < carMsg.length; i++) {

      carMsg[i].selected = selectAllStatus;
    }
    this.setData({
      carMsg,
      selectAllStatus,
    })
    this.getTotalPrice()
  },
  selectList: function (e) {
    const index = e.currentTarget.dataset.index;
    let carMsg = this.data.carMsg;
    const selected = carMsg[index].selected;
    carMsg[index].selected = !selected;
    const a = [];
    for (let i = 0; i < carMsg.length; i++) {
      if (carMsg[i].selected) {
        a.push(carMsg[index])
      }
    }
    if (carMsg.length <= a.length) {
      this.setData({
        selectAllStatus: true, carMsg
      });
    }else{
      this.setData({
        selectAllStatus: false, carMsg
      });
    }
    this.getTotalPrice()
  },
  getTotalPrice: function (e) {
    let carMsg = this.data.carMsg;
    let total = 0;
    for (let i = 0; i < carMsg.length; i++) {
      if (carMsg[i].selected) {
        total+=carMsg[i].price;
      }
    }
    // total=total.toFixed(1)
    this.setData({
      totalPrice: total
    });
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
    this.setData({
      carMsg:[...app.globalData.tocartMsg]
    })
    console.log(this.data.carMsg)
    if(this.data.carMsg.length>0){
      this.setData({
        hid:true
      })
    }
  },
  toIndex:function(){
    wx.switchTab({
      url: '../index/index'
    })
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