// pages/5-14/5-14.js
Page({

  data: {
    resLuopan: {},
    resJiasudu: {},
    resTuoluoyi: {}
  },

  handleClick(e) {
    const {
      a,
      v
    } = e.currentTarget.dataset
    switch (a) {
      case 'luopan':
        if (v === "start")
          wx.startCompass({
            success: () => {
              wx.onCompassChange(r => this.setData({
                resLuopan: r
              }))
            }
          })
        else
          wx.stopCompass({
            success: r => wx.showToast({
              title: '罗盘已经停止',
            })
          })
        break;
      case 'jiasudu':
        if (v === "start")
          wx.startAccelerometer({
            success: () => wx.onAccelerometerChange(r => this.setData({
              resJiasudu: r
            }))
          })
        else
          wx.stopAccelerometer({
            success: res => wx.showToast({
              title: '加速度传感器监听已停止',
            })
          })
        break;
      case 'tuoluoyi':
        if (v === "start")
          wx.startGyroscope({
            success: () => wx.onGyroscopeChange(r => this.setData({
              resTuoluoyi: r
            }))
          })
        else
          wx.stopGyroscope({
            success: r => wx.showToast({
              title: '陀螺仪传感器监听已停止',
            })
          })
        break;
      default:
        wx.showToast({
          title: 'unknown action ' + a,
          icon: "none"
        })
    }
  }
})