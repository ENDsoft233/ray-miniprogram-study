// pages/5-15/5-15.js
Page({

  data: {
    res: {}
  },

  scanCode() {
    wx.scanCode({
      onlyFromCamera: false,
      success: r => this.setData({
        res: r
      })
    })
  },

  inputName(e) {
    this.name = e.detail.value
  },

  inputPhone(e) {
    this.phone = e.detail.value
  },

  call() {
    if (this.phone == '') {
      wx.showToast({
        title: '电话不能为空',
        icon: "error"
      })
      return
    }
    wx.makePhoneCall({
      phoneNumber: this.phone,
    })
  },

  addContact() {
    if (this.phone == '' || this.name == '') {
      wx.showToast({
        title: '姓名或电话不能为空',
        icon: "error"
      })
      return
    }
    wx.addPhoneContact({
      firstName: this.name,
      mobilePhoneNumber: this.phone
    })
  }
})