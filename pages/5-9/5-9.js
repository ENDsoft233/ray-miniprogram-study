// pages/5-9/5-9.js
Page({

  data: {
    imgPath: '',
    videoPath: ''
  },

  handleClick(e) {
    const get = e.currentTarget.dataset.get;
    if (get === 'image')
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: r => {
          this.setData({
            imgPath: r.tempFilePaths[0]
          })
        }
      })
    else if (get === 'video')
      wx.chooseVideo({
        sourceType: ['album', 'camera'],
        maxDuration: 60,
        camera: ['front', 'back'],
        success: r => {
          wx.showToast({
            title: r.tempFilePath,
            duration: 2000
          })
          this.setData({
            videoPath: r.tempFilePath
          })
        }
      })
    else
      console.log(this.data)
  }
})