// pages/5-1/5-1.js
const fs = wx.getFileSystemManager();
Page({

  data: {
    imgs: [],
    index: 0
  },

  changeFace() {
    console.log('changeFace()')
    this.setData({
      index: Math.floor(Math.random() * this.data.imgs.length)
    })
  },

  onLoad(options) {
    const imgDir = fs.readdirSync('/images/5-1')
    let files = []
    imgDir.forEach(v => {
      files.push('/images/5-1/' + v)
      this.setData({
        imgs: files
      })
    })
  },

  onShow() {
    wx.onAccelerometerChange(res => {
      if (res.x > 0.5 || res.y > 0.5 || res.z > 0.5) {
        wx.showToast({
          title: '摇一摇..',
        })
        this.changeFace()
      }
    })
  }
})