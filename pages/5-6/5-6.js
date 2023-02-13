// pages/5-6/5-6.js
const cvs = wx.createCanvasContext('cvs')
Page({
  drawDot:  (x, y) => {
    cvs.arc(x, y, 5, 0, 2 * Math.PI)
    cvs.setFillStyle('black')
    cvs.fill()
    cvs.draw(true)
  },
  drawSinX: function () {
    for (let x = 0; x < 2 * Math.PI; x += Math.PI / 180)
      this.drawDot(10 + 50 * x, 60 + 50 * (Math.sin(x)))
  },
  onLoad: function (opt) {
    this.drawSinX()
  }
})