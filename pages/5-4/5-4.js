// pages/5-4/5-4.js
const cvs = wx.createCanvasContext('cvs')
Page({
  handleFormSubmit: v => {
    const e = v.detail.value;
    cvs.arc(e.x, e.y, e.r, 0, 2 * Math.PI)
    cvs.stroke()
    cvs.draw(true)
    console.log(e.x, e.y, e.r, 0, 2 * Math.PI)
  },
  handleFormReset: () => cvs.draw()
})