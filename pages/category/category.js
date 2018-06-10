// pages/category/category.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category:[
      {name:'新品',id:'newPro'},
      {name:'手机',id:'shouji'},
      {name:'电视',id:'dianshi'},
      {name:'电脑',id:'diannao'},
      {name:'家电',id:'jiadian'},
      {name:'路由',id:'luyou'},
      {name:'智能',id:'zhineng'},
      {name:'儿童',id:'chid'},
      {name:'灯具',id:'dengju'},
      {name:'电源',id:'dianyuan'},
      {name:'耳机',id:'erji'},
      {name:'音响',id:'yinxiang'},
      {name:'礼品',id:'lipin'},
      {name:'生活',id:'life'},
      {name:'服务',id:'server'},
      {name:'米粉卡',id:'Mifen'}
      
    ],
    detail:[],
    toView:'shouji',
    curIndex:0
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b12e16b0f30f86cb1418f70/indexNavList',
      success: (res)=>{
        // console.log(res.data)
        this.setData({
          detail:res.data.data
        })
        // console.log(this.data.detail)
      }
    })
  },
  toDetail:function(e){
    var index=e.currentTarget.dataset.index;
    console.log(index) 
    var detail=this.data.detail[index];
    // console.log(detail)
    app.globalData.detail=detail;
    // console.log(app.globalData.detail)
    wx.navigateTo({
      url: '../buy/buy',
    })
  },
  switchCategory (e){
    console.log(e.currentTarget.dataset.id);
    this.setData({
      toView:e.currentTarget.dataset.id,
      
      
      curIndex:e.currentTarget.dataset.index?e.currentTarget.dataset.index: 0
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