// pages/2-13/2-13.js
let timer, timerId;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    count: 10,
    counterHidden: false
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onLoad() {
    let that = this;
    setTimeout(() => that.show(), 2000)
  },

  show: function () {
    this.setData({
      hidden: false
    })
  },

  timer: function () {
    this.setData({
      count: this.data.count > 0 ? this.data.count - 1 : 0
    })
    if (this.data.count == 0) {
      this.setData({
        counterHidden: !this.data.counterHidden
      })
    }
  },

  start: function () {
    let that = this
    timerId = setInterval(() => that.timer(), 1000)
  },

  end: () => clearInterval(timerId)

})