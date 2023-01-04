// pages/4-10/4-10.js
let checkEmail = email => {
  let str = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
  return str.test(email)
}
let showFail = (that, text) => {
  wx.showToast({
    title: text,
    icon: 'error',
    duration: 2000
  })
  that.setData({
    errorTexts: [`${new Date().toLocaleTimeString('zh-cn')} ${text}`, ...that.data.errorTexts],
    email: '',
    pwd: '',
    pwd2: ''
  })
}
Page({

  data: {
    email: '',
    pwd: '',
    pwd2: '',
    errorTexts: [],
    emailError: true
  },

  handleInputBlur: function (e) {
    this.setData({
      [e.currentTarget.dataset.ctrl]: e.detail.value
    })
    if (e.currentTarget.dataset.ctrl === 'email')
      this.setData({
        emailError: checkEmail(e.detail.value)
      })
  },

  handleLogin: function () {
    if (this.data.email.length === 0 || this.data.pwd.length === 0 || this.data.pwd2.length === 0) {
      showFail(this, '请完整填写表单')
      return
    }
    if (!checkEmail(this.data.email)) {
      showFail(this, '邮箱格式有误')
      return
    }
    if (this.data.pwd !== this.data.pwd2) {
      showFail(this, '两次输入的密码不一致')
      return
    }
    wx.navigateTo({
      url: './detail',
    })
  }
})