// pages/2-10/2-10.js
Page({

  data: {
    resultHidden: true,
    stuName: '',
    chineseScore: '',
    mathScore: '',
    output: {}
  },

  dataInput: function (e) {
    this.setData({
      [e.target.id]: e.detail.value
    })
  },

  query: function () {
    if (this.data.stuName == '' || this.data.chineseScore == '' || this.data.mathScore == '') {
      wx.showToast({
        title: '请完整填写表单！',
        icon: 'error',
        duration: 2000
      })
      return
    }
    this.setData({
      resultHidden: false,
      output: [{
          title: "姓&emsp;&emsp;名",
          display: this.data.stuName
        },
        {
          title: "语文成绩",
          display: this.data.chineseScore
        },
        {
          title: "数学成绩",
          display: this.data.mathScore
        },
        {
          title: "平&ensp;均&ensp;分",
          display: (this.data.chineseScore * 1 + this.data.mathScore * 1) / 2
        }
      ]
    })
  }
})