// pages/4-2/4-2.js
Page({

  data: {
    side: [],
    area: null
  },

  formSubmit: function (e) {
    console.log(e)
    let a = parseInt(e.detail.value.side0)
    let b = parseInt(e.detail.value.side1)
    let c = parseInt(e.detail.value.side2)
    let notTriangle = () => (a + b <= c || a + c <= b || b + c <= a)
    if (notTriangle()) {
      wx.showToast({
        title: '不构成三角形',
        icon: 'error',
        duration: 2000
      })
      this.formClear()
      return
    }
    let s = (a + b + c) / 2
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
    this.setData({
      area: area
    })
  },

  formClear: function () {
    this.setData({
      side: [],
      area: '无法构成三角形。'
    })
  }

})