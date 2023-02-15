// pages/5-10/5-10.js
Page({

  data: {
    latitude: 39.93111,
    longitude: 116.199167,
    markers: [{
        id: 1,
        latitude: 39.92528,
        longitude: 116.20111,
        iconPath: '../../images/location.png',
        label: {
          content: "我的位置",
          color: "#0000FF",
          bgColor: "#FFFF00",
          fontSize: 20
        }
      },
      {
        id: 2,
        latitude: 39.92528,
        longitude: 116.20111,
        iconPath: "../../images/location.png"
      }
    ]
  },

  chooseLocation: function () {
    wx.chooseLocation({
      success: r => {
        console.log(r)
      }
    })
  },

  openLocation() {
    wx.getLocation({
      type: 'gcj02',
      success: r => {
        wx.openLocation({
          latitude: r.latitude,
          longitude: r.longitude,
          scale: 28
        })
      }
    })
  }
})