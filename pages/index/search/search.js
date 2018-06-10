// pages/index/search/search.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:'',
    goodsList:[],
    newList:[],
    hidden:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b1ca08841e3435437657cdc/search',
      success: (res)=>{
        this.setData({
          goodsList:res.data.data
        })  
      }
    })
  },
  input:function(e){
      var inputValue=e.detail.value;
      // console.log(inputValue)
      this.setData({
        inputValue
      })
  },
  search:function(e){
    var c=this.data.inputValue;
    //  console.log(c);
    var goods=this.data.goodsList;
    //  console.log(goods);
    // var inputValue1=this.data.inputValue;
    var re=new RegExp(c);
    var temp = [];
    if(c==''){
      return false
    }else{
      for(let i=0;i<goods.length;i++){
        // console.log(re.test(goods[i].title))
        if(re.test(goods[i].title)){
          temp.push(goods[i]);
        }
      }
    }
    // console.log(temp);
    this.setData({
      newList:temp,
      hidden:true
    })
    // console.log(this.data.newList)
  },
  toDetail:function(e){
    var index=e.currentTarget.dataset.index;
    // console.log(index) 
    var detail=this.data.newList[index];
    // console.log(detail)
    app.globalData.detail=detail;
    // console.log(app.globalData.detail)
    wx.navigateTo({
      url: '../../buy/buy',
    })
  },
  toPhone:function(){
    wx.navigateTo({
      url: './../mbPhone/mbPhone',
    })
  },
  toTV:function(){
    wx.navigateTo({
      url: './../TV/Tv',
    })
  },
  toPC:function(){
    wx.navigateTo({
      url: './../PC/PC',
    })
  },
  toZn:function(){
    wx.navigateTo({
      url: './../zhiNeng/zhiNeng',
    })
  },
  toNew:function(){
    wx.navigateTo({
      url: './../newGs/newGs',
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