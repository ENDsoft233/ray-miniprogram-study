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
    let files = []
    for(let i = 1;i<=10;i++) {
      files.push(`/images/5-1/${('0' + i).substr(0,2)}.jpg`)
    }
    this.setData({
      imgs: files
    })
    console.log(files)
  },

  onShow() {
    wx.onAccelerometerChange(res => {
      if (res.x > 0.5 || res.y > 0.5 || res.z > 0.5) {
        wx.showToast({
          title: '摇一摇..',
          duration: 1000
        })
        this.changeFace()
      }
    })
  }
})