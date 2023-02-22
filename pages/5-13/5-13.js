// pages/5-13/5-13.js
Page({

  data: {
    status: '获取中',
    res: {}
  },

  onLoad(options) {
    wx.getNetworkType({
      success: r => {
        this.setData({
          status: r.networkType
        })
      }
    })
    wx.onNetworkStatusChange((r) => {
      if (r.isConnected)
        this.setData({
          status: r.networkType
        })
      else
        this.setData({
          status: '未联网!'
        })
    })
  },

  handleClick() {
    wx.getConnectedWifi({
      success: r => {
        this.setData({
          res: res.wifi
        })
      },
      fail: r => wx.showToast({
        title: r.errMsg,
        icon: "none"
      })
    })
  }
})