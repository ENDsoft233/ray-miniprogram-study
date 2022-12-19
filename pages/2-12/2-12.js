// pages/2-12/2-12.js
function createRand() {
  let rand = []
  let sum = 0
  for (let i = 0; i < 6; i++) {
    let r = (Math.random() * 100).toFixed(2) * 1
    rand.push(r)
    sum += r
  }
  let rtn = {}
  rtn.rand = rand
  rtn.sum = sum
  return (rtn)
}

Page({

  data: {
    rand: [],
    sum: 0
  },

  onLoad(options) {
    this.newRand()
  },

  newRand: function () {
    let newData = createRand()
    this.setData({
      rand: newData.rand,
      sum: newData.sum
    })
  }
})