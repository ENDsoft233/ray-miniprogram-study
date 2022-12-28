// pages/4-3/4-3.js
Page({

  data: {
    myBold: '',
    myItalic: '',
    myUnderline: '',
    mySize: '25px'
  },

  checkboxChange: function (e) {
    let prop = e.detail.value;
    let myBold = '';
    let myItalic = '';
    let myUnderline = '';
    for (let i in prop) {
      if (prop[i] == 'isBold')
        myBold = 'bold'
      else if (prop[i] == 'isItalic')
        myItalic = 'italic'
      else if (prop[i] == 'isUnderline')
        myUnderline = 'underline'
    }
    this.setData({
      myBold: myBold,
      myItalic: myItalic,
      myUnderline: myUnderline
    })
  },

  radioChange: function (e) {
    this.setData({
      mySize: e.detail.value
    })
  }
})