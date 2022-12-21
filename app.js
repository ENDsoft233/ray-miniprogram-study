// app.js
App({
  /* 3-2 */
  onLaunch: function(){
    console.log("app.js--onLaunch--小程序初始化")
  },
  onShow: function(){
    console.log("app.js--onShow--小程序显示")
  },
  onHide: function(){
    console.log('app.js--onHide--小程序隐藏')
  },

  /* 3-4 */
  globalMsg: 'a variable comes from app.js',
  globalFunc: () => 'a function comes from app.js'
})
