// pages/4-10/detail.js
Page({

  data: {
    name: '',
    stuid: '',
    picked: 0,
    sections: ['（第一场）周五上午 8:00-10:00', '（第二场）周六上午 10:00-12:00', '（第三场）周日下午 16:00-18:00', ]
  },

  handleInputBlur: function (e) {
    this.setData({
      [e.currentTarget.dataset.ctrl]: e.detail.value
    })
  },

  handlePick: function (e) {
    this.setData({
      picked: e.detail.value
    })
  },

  handleRelogin: function (e) {
    wx.navigateBack()
  },

  handleAccept: function (e) {
    wx.showModal({
      title: '确认考试时段',
      content: `${this.data.name}（${this.data.stuid}）同学你好，请检查您选择的考试时段，确认无误请点击确认后提交。\n${this.data.sections[this.data.picked]}`,
      complete: (res) => {
        if (res.cancel) {
          console.log('用户取消确认。')
        }

        if (res.confirm) {
          wx.showToast({
            title: '正在提交信息..',
            icon: 'loading'
          })
          setTimeout(() => {
            wx.hideToast()
            wx.showToast({
              title: '已提交',
              icon: 'success',
              duration: 1000
            })
            setTimeout(() => {
              wx.navigateBack({
                delta: 2
              })
            }, 1000)
          }, 2000)
        }
      }
    })
  }

})