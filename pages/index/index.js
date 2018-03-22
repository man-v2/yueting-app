//index.js 
//获取应用实例 page: https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/page.html

var app = getApp()
Page({

  // 页面的初始数据
  data: {
    motto: 'Hello World',
    userInfo: {},
    array:[{title:'我的购物',icon:'success'},{title:'我的钱包',icon:'info'},
          {title:'更多',icon:'info'},{title:'赞过谁',icon:'safe_success'},
           {title:'意见反馈',icon:'info_circle'},{title:'设置',icon:'success_circle'},
    ]
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  // 生命周期函数--监听页面加载
  // 一个页面只会调用一次，可以在 onLoad 中获取打开当前页面所调用的 query 参数
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },

  // onReady: 页面初次渲染完成
  // 一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
  // 对界面的设置如wx.setNavigationBarTitle请在onReady之后设置
  onReady: function () {
    // Do something when page ready.
  },

  // 每次打开页面都会调用一次
  onShow: function () {
    // Do something when page show.
  },

  // 当navigateTo或底部tab切换时调用
  onHide: function () {
    // Do something when page hide.
  },

  // 当redirectTo或navigateBack的时候调用
  onUnload: function () {
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  onPageScroll: function () {
    // Do something when page scroll
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },

})
