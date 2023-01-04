// pages/4-9/4-9.js
const getRandomColor = () => {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length === 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
const staticJNTM = () => {
  let rtn = []
  for (let i = 0; i < 10; i++) {
    rtn.push({
      text: '鸡你太美',
      color: getRandomColor(),
      time: Math.floor(Math.random() * 5)
    })
  }
  return rtn
}
Page({

  data: {
    inputValue: '',
    danmuList: staticJNTM()
  },

  onLoad(options) {
    this.videoCtx = wx.createVideoContext('video')
  },

  inputBlur: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },

  sendDanmu: function () {
    this.videoCtx.sendDanmu({
      text: this.data.inputValue,
      color: getRandomColor()
    })
    this.setData({
      inputValue: ''
    })
  },

  sendSpecialDanmu: function () {
    this.videoCtx.sendDanmu({
      text: '鸡你太美',
      color: getRandomColor()
    })
  }

})