//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse,
    autoplay:true,
    interval:1000,
    duration:2000,
    banners : [],

    recommend : [ 
      { name: "a", url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2903730956,4222895621&fm=27&gp=0.jpg", price:20},
      { name: "a", url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2903730956,4222895621&fm=27&gp=0.jpg", price:20},
      { name: "a", url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2903730956,4222895621&fm=27&gp=0.jpg", price:20 },
      { name: "a", url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2903730956,4222895621&fm=27&gp=0.jpg", price:20},
      { name: "a", url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2903730956,4222895621&fm=27&gp=0.jpg", price: 20 },
      { name: "a", url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2903730956,4222895621&fm=27&gp=0.jpg", price: 20 } ],

    pictures: [
      "https://www.zx-y.cn/resource/picture/1.jpg",
      "https://www.zx-y.cn/resource/picture/1.jpg",],
  movies:[    
    {url:'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg'} ,    
    {url:'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg'} ,    
    {url:'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg'} ,    
    ]  
  },   
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
      var that = this;

      wx.request({
        url: 'https://www.zx-y.cn/Server/order_Service',

        data:{
          command : 'getFoodList',
          
          name : 'food_cool'
        },

        success : function(e){
          console.log(e.data.list);

          if(e.data.code == 404){
            wx.showModal({
              title: '提示',
              content: '请告知管理员添加后台banner轮播图片',
              showCancel : false 
            })
          } else {

            that.setData({
              mooto : 'asdfadsf',
              banners : e.data.list
            });

            console.log(that.data.banners);
          }
        },

        complete : function(e){
          console.log("complete");
        }
      })
  }
})
