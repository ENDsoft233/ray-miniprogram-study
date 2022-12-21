// pages/3-5/3-5.js
Page({

  data: {
    color: 'pink',
    length: 5
  },

  dataInput: function (e) {
    console.log(e)
    this.setData({
      [e.target.id]: e.detail.value
    })
  }

})