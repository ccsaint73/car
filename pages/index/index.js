//获取应用实例
const app = getApp()

Page({
  data: {
    // 组件所需的参数
    nvabarData: {
      showCapsule: 0, //是否显示左上角图标   1表示显示    0表示不显示
      title: '关注车型', //导航栏 中间的标题
    },
    // 此页面 页面内容距最顶部的距离
    barHeight: app.globalData.barHeight * 2 + 20 ,
    winHeight: app.globalData.winHeight,
  }
  
})
