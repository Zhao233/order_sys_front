//login.js
//获取应用实例
var app = getApp();
Page({
  data: {
    id: 0,
    classfiyNav: [
      {
        "text": "1"
      },
      {
        "text": "2"
      },
      {
        "text": "3"
      },
      {
        "text": "4"
      },
      {
        "text": "5"
      },
      {
        "text": "6"
      },
      {
        "text": "7"
      },
      {
        "text": "8"
      },
      {
        "text": "7"
      },
      {
        "text": "7"
      },
      {
        "text": "7"
      },
      {
        "text": "7"
      },
      {
        "text": "7"
      },
      {
        "text": "7"
      },
      {
        "text": "7"
      },
    ],
    classfiyList: [
      {
        "text": "进入1频道 >",
        // 示例格式
        "list": [
          {
            "img": "xxxxxx",
            "text": "xxxxxx"
          }
        ]
      }
    ],




    names: [
      { id: 1, name: "奇妙的热煮" },
      { id: 2, name: "精品凉菜" },
      { id: 3, name: "下酒菜" },
      { id: 4, name: "特色菜" },
      { id: 5, name: "汤" },
      { id: 6, name: "火锅" },
      { id: 7, name: "点心" },
      { id: 8, name: "果汁" },
      { id: 9, name: "山珍海味" },
    ],

    children : [

    ]
  },

  onLoad: function () {
    var that = this
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

    wx:wx.request({
      url: 'https://www.zx-y.cn/Server/order_Service',
      data: {
        command: 'getFoodList',

        name : e.name
      },
      method: 'GET',
      success: function(res) {
        that.children = res.data;
        
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
});