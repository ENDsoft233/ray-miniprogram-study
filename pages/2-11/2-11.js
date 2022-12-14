// pages/2-11/2-11.js
Page({
  data: {
    start: 0,
    end: 0,
    sum: 0
  },

  dataInput: function (e) {
    console.log(e)
    this.setData({
      [e.target.id]: parseInt(e.detail.value)
    })
  },

  calc: function () {
    let tmp = 0;
    for (let i = this.data.start; i <= this.data.end; i++)
      tmp += i;
    this.setData({
      sum: tmp
    })
  }
})