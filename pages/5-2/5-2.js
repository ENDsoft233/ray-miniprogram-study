// pages/5-2/5-2.js
Page({
  data: {
    input: undefined,
    res: undefined,
    inpued: false,
    calced: false
  },

  dataInput(e) {
    this.setData({
      input: e.detail.value,
      inputed: e.detail.value !== '',
      calced: false
    })
  },

  calc() {
    let res = 1,
      initial = this.data.input;
    for (let cur = 1; cur <= initial; cur++)
      res *= cur
    this.setData({
      res: res,
      calced: true
    })
    console.log(res)
  },

  onShow() {
    this.isShow = true;
    wx.onAccelerometerChange(res => {
      if(!this.isShow) return;
      if(res.x>0.5||res.y>0.5||res.z>0.5){
        wx.showToast({
          title: '摇一摇..',
          duration: 1000
        })
        this.calc()
      }
    })
  },
})