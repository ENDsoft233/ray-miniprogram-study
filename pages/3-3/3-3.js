// pages/3-3/3-3.js
Page({

  data: {
    a: 10,
    b: 20,
    c: 30,
    stu: {
      id: "22120000",
      name: "张三",
      birth: "1999-12-31"
    },
    array: [2018, 2019, 2020]
  },

  modify: function() {
    this.setData({
      a: 114514,
      b: 1919810,
      c: 0,
      stu: {
        id: "22129999",
        name: "李四",
        birth: "2000-01-01"
      },
      array: [2038, 2039, 2040]
    })
  }

})