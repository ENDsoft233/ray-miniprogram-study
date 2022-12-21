// pages/3-6/3-6.js
Page({

  data: {
    score: -1
  },

  dataInput: function (e) {
    this.setData({
      score: e.detail.value
    })
  }

})