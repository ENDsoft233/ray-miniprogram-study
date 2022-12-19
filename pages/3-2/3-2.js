// pages/3-2/3-2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("3-2.js--onLoad",options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log("3-2.js--onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log("3-2.js--onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("3-2.js--onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log("3-2.js--onUnload")
  },

  navigate: function(){
    wx.navigateTo({
      url: '/pages/3-2-1/3-2-1',
    })
  }
})