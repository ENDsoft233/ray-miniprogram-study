// pages/4-5/4-5.js
Page({

  data: {
    indicatorDots: true,
    autoplay: false,
    circular: false,
    vertical: false
  },

  switchChange: function (e) {
    this.setData({
      [e.currentTarget.dataset.control]: e.detail.value
    })
  }
})