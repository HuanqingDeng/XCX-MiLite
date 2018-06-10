//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    slides: [
      { image: '../../image/index-tiele1.jpg' },
      { image: '../../image/index-tiele2.jpg' },
      { image: '../../image/index-tiele3.jpg' },
    ],
    navlist:[
      {image: '../../image/indexIPH.png',title:'手机',url:'./mbPhone/mbPhone'},
      {image: '../../image/indexTV.png',title:'电视',url:'./TV/Tv'},
      {image: '../../image/indexPC.png',title:'电脑',url:'./PC/PC'},
      {image: '../../image/indexLY.png',title:'智能',url:'./zhiNeng/zhiNeng'},
      {image: '../../image/indexNewGoods.png',title:'新品',url:'./newGs/newGs'}
    ],
    goodsList:[]
  },
  onLoad: function (options) {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b1677ed69f2393736205e51/indexgoodList',
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
    // this.setData({
    //   detail:detail
    // })
    wx.navigateTo({
      url: '../buy/buy',
    })
  },
  search:function(e){
    wx.navigateTo({
      url: './search/search',
    })
  }
})

