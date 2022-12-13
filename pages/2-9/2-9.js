// pages/2-9/2-9.js
Page({
  data: {
    calcResult: "正在等待输入.."
  },

  calc: function (e) {
    let input = e.detail.value
    let result = undefined;
    if (input < 0) {
      result = Math.abs(input)
    } else if (input < 10) {
      result = Math.exp(input) * Math.sin(input)
    } else if (input < 20) {
      result = Math.pow(input,3)
    } else {
      result = (3+2*input)*Math.log(input)
    }
    this.setData({
      calcResult: e.detail.value === "" ? "正在等待输入.." : result
    })
  }
})