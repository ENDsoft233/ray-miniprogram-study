// pages/4-8/4-8.js
Page({

  onLoad(options) {
    this.audioCtx = wx.createAudioContext('audio')
  },

  audioPlay: function () {
    this.audioCtx.play()
  },

  audioPause: function () {
    this.audioCtx.pause()
  },

  audio61: function () {
    this.audioCtx.seek(61)
  },

  audio0: function () {
    this.audioCtx.seek(0)
  },

})