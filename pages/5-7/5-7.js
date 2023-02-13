// pages/5-7/5-7.js
const cvs = wx.createCanvasContext('cvs')
Page({
  data: {
    pen: 5,
    color: '#000',
    isClear: false
  },

  handleAction: function (e) {
    const action = e.currentTarget.dataset.action
    const val = e.currentTarget.dataset.val
    if (action === 'penSelect') {
      this.setData({
        pen: val,
        isClear: false
      })
    } else if (action === 'colorSelect') {
      this.setData({
        color: val,
        isClear: false
      })
    } else if (action === 'clear') {
      this.setData({
        isClear: true
      })
    } else if (action === 'clearAll') {
      this.setData({
        pen: 5,
        color: '#000',
        isClear: false
      })
      cvs.draw()
    }
  },

  touchFinger: {},

  touchStart: function (e) {
    const {
      x,
      y
    } = e.changedTouches[0]
    this.touchFinger = {
      x,
      y
    }
    if (this.data.isClear) {
      cvs.setStrokeStyle('#FFF')
      cvs.setLineCap('round')
      cvs.setLineJoin('round')
      cvs.setLineWidth(20)
      cvs.beginPath()
    } else {
      cvs.setStrokeStyle(this.data.color)
      cvs.setLineWidth(this.data.pen)
      cvs.setLineCap('round')
      cvs.beginPath()
    }
  },

  touchMove: function (e) {
    const {
      x,
      y
    } = e.changedTouches[0]
    const f = this.touchFinger
    if (this.data.isClear)
      cvs.save()
    cvs.moveTo(f.x, f.y)
    cvs.lineTo(x, y)
    cvs.stroke()
    this.touchFinger = {
      x,
      y
    }
    cvs.draw(true)
  },

  touchEnd: () => {},
})