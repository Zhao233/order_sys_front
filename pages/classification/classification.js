//login.js
//获取应用实例
var app = getApp();
Page({
  data: {
    url: 'http://localhost:8080/order_Service',
    picUrl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2903730956,4222895621&fm=27&gp=0.jpg',

    classfiyList: [
      { id: 1, name: "热煮", idenity_name: "food_hot"},
      { id: 2, name: "精品凉菜", idenity_name: "food_cool"},
      { id: 3, name: "下酒菜", idenity_name: "food_auxiliary"},
      { id: 4, name: "特色菜", idenity_name: "food_feature"},
      { id: 5, name: "汤", idenity_name: "food_soup"},
      { id: 6, name: "火锅", idenity_name: "food_hotPot"},
      { id: 7, name: "点心", idenity_name: "food_dessert"},
      { id: 8, name: "果汁", idenity_name: "food_juice"},
      { id: 9, name: "山珍海味", idenity_name: "food_treasure"},
    ],

    children : [
      { id: 1, name: 'special', pic_Url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2903730956,4222895621&fm=27&gp=0.jpg', price: 20 },
      { id: 1, name: 'special', pic_Url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2903730956,4222895621&fm=27&gp=0.jpg', price: 20 },
      { id: 1, name: 'special', pic_Url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2903730956,4222895621&fm=27&gp=0.jpg', price: 20 },
      { id: 1, name: 'special', pic_Url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2903730956,4222895621&fm=27&gp=0.jpg', price: 20 },
      { id: 1, name: 'special', pic_Url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2903730956,4222895621&fm=27&gp=0.jpg', price: 20 },
      { id: 1, name: 'special', pic_Url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2903730956,4222895621&fm=27&gp=0.jpg', price: 20 },
    ],

  },

  onLoad: function () {
    var that = this;
    var list_name = 'food_cool';
    var requestUrl = this.data.url;

    wx:wx.request({
      url: requestUrl,
      
      data: {
        command: 'getFoodList',

        name: list_name
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        
      },
      fail: function(res) {
        wx.showToast({
          title: res.code,
        })
      },
      complete: function(res) {

      },
      success : function(res){
        console.log(res.data.list);
      }
    })

  },
  onShow: function () {

  },

  getChildren: function (e) {
    switch(e){
      case 1 : 
    }
  },

  getList : function(e){
    var that = this;
    var list_name = e.currentTarget.id;
    var requestUrl = this.data.url;

    console.log("list_name : " + list_name);
    console.log("url : " + requestUrl);

    wx: wx.request({
      url: requestUrl,
      data: {
        command: 'getFoodList',

        name: list_name
      },
      method: 'GET',
      success: function (res) {
        that.children = res.data;

        that.setData({
          children : res.data.list
        })

        console.log(that.children);
      },
      fail: function (res) { },
      complete: function (res) { },
    })

  }

}
  
  );