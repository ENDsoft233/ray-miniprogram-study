// pages/2-14/2-14.js
Page({
  data: {
    color: ['red', 'blue', 'green'],
    timerId: null
  },
  randomColor: function () {
    let hex = '0123456789ABCDEF'
    let out = []
    for (let i = 0; i < 3; i++) {
      let color = '#'
      for (let j = 0; j < 6; j++)
        color += hex[Math.floor(Math.random() * 16)]
      out.push(color)
    }
    console.log(out)
    this.setData({
      color: out
    })
  },
  onLoad: function () {
    this.randomColor()
    this.startTimer()
  },
  clearTimer: function () {
    clearInterval(this.data.timerId)
    this.setData({
      timerId: null
    })
  },
  startTimer: function () {
    let timerId = setInterval(() => this.randomColor(), 5000)
    this.setData({
      timerId: timerId
    })
  }
})