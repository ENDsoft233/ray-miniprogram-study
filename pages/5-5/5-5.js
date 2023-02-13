// pages/5-5/5-5.js
const cvs = wx.createCanvasContext('cvs')
Page({
  handleAction: e => {
    const action = e.currentTarget.dataset.action
    if (action === 'scale') {
      cvs.scale(2, 2)
    } else if (action === 'translate') {
      cvs.translate(20, 20)
    } else if (action === 'rotate') {
      cvs.rotate(30 * Math.PI / 180)
    }

    cvs.rect(0, 0, 50, 50)
    cvs.stroke()
    cvs.draw(true)
  }
})