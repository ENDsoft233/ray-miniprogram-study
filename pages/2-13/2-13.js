// pages/2-13/2-13.js
let timer, timerId;
Page({

  data: {
    hidden: true,
    count: 10,
    counterHidden: false
  },

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