// pages/4-1/4-1.js
const huilv = [6.8801, 8.7873, 0.8805, 7.8234, 0.0061, 0.0610]
Page({
  data: {
    labels: ["美元", "英镑", "港币", "欧元", "韩元", "日元"],
    results: [],
    hasRes: false
  },
  calc: function (e) {
    let cny = e.detail.value.cels
    let result = []
    for (let i in huilv)
      result.push((cny / huilv[i]).toFixed(4))
    this.setData({
      results: result,
      hasRes: true
    })
  },
  clear: function() {
    this.setData({
      results: [],
      hasRes: false
    })
  }
})