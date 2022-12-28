// pages/4-6/4-6.js
let tmp = {}

function Person(name, sex, region, date, height, weight) {
  this.name = name
  this.sex = sex
  this.region = region
  this.date = date
  this.height = height
  this.weight = weight
}

Page({

  data: {
    genders: ["男", "女"],
    gender: 0,
    region: '',
    date: '',
    persons: [],
    dict: {
      name: "姓名",
      sex: "性别",
      region: "出生地区",
      date: "出生日期",
      height: "身高",
      weight: "体重"
    }
  },

  handleInput: function (e) {
    tmp[e.currentTarget.dataset.control] = e.detail.value
  },

  handlePick: function (e) {
    tmp[e.currentTarget.dataset.control] = e.detail.value
    this.setData({
      [e.currentTarget.dataset.control]: e.detail.value
    })
  },

  handleSubmit: function (e) {
    let p = new Person(tmp.name, tmp.gender, tmp.region, tmp.date, tmp.height, tmp.weight)
    this.setData({
      persons: [...this.data.persons, p]
    })
    tmp = {}
  }
  
})