// pages/2-8/2-8.js
Page({
  data: {
    calcResult: "正在等待输入.."
  },

  calc: function (e) {
    let input = e.detail.value
    this.setData({
      calcResult: e.detail.value === "" ? "正在等待输入.." : input * 9 / 5 + 32
    })
  }
})