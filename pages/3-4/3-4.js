// pages/3-4/3-4.js
const app = getApp()
const util = require('../../utils/3-4')
Page({
  data: {
    msg: [
      'a variable from /pages/3-4/3-4.js',
      'a function from /pages/3-4/3-4.js',
      util.utilMsg,
      util.utilFunc(),
      app.globalMsg,
      app.globalFunc()
    ]
  },
})