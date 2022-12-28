// pages/4-4/4-4.js
Page({

  data: {
    r: 52,
    g: 152,
    b: 219,
    a: 1
  },

  colorChanging: function (e) {
    this.setData({
      [e.currentTarget.dataset.color]: e.detail.value
    })
  }
})