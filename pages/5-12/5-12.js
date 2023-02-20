// pages/5-12/5-12.js
function Stu(id, name, Chinese, Math, English) {
  this.id = id
  this.name = name
  this.Chinese = Chinese
  this.Math = Math
  this.English = English
}
const loadStus = () => {
  const randomScore = () => Math.floor(Math.random() * 40) + 60
  const datas = [
    new Stu(22121001, '高启强', randomScore(), randomScore(), randomScore()),
    new Stu(22121002, '安欣', randomScore(), randomScore(), randomScore()),
    new Stu(22121003, '唐小龙', randomScore(), randomScore(), randomScore()),
    new Stu(22121004, '唐小虎', randomScore(), randomScore(), randomScore()),
    new Stu(22121005, '高启盛', randomScore(), randomScore(), randomScore()),
    new Stu(22121006, '高启兰', randomScore(), randomScore(), randomScore()),
    new Stu(22121007, '张彪', randomScore(), randomScore(), randomScore()),
  ]
  return datas.filter((v, i) => i % 2 === Math.floor(Math.random() * 2))
}

Page({

  data: {
    hidden: true,
    msg: '',
  },

  handleClick(e) {
    const that = this;
    switch (e.currentTarget.dataset.action) {
      case 'set':
        wx.setStorage({
          key: '高一',
          data: loadStus(),
          success: () => that.setData({
            hidden: false,
            msg: '异步存储数据成功！'
          })
        })
        break;
      case 'setSync':
        wx.setStorageSync('高二', loadStus())
        that.setData({
          hidden: false,
          msg: '同步存储数据成功！'
        })
        break;
      case 'get':
        wx.getStorage({
          key: '高一',
          success: r => {
            let output = []
            for (let i in r.data) {
              output.push(`[ 学生 ${parseInt(i)+1} ]\n学号 ${r.data[i].id}\n姓名 ${r.data[i].name}\n语文成绩 ${r.data[i].Chinese}\n数学成绩 ${r.data[i].Math}\n英语成绩 ${r.data[i].English}`)
            }
            that.setData({
              hidden: false,
              msg: `异步获取缓存数据成功\n${output.join('\n')}`
            })
          },
          fail: () => {
            that.setData({
              hidden: false,
              msg: '异步获取缓存数据失败！'
            })
          }
        })
        break;
      case 'getSync':
        try {
          const v = wx.getStorageSync('高二')
          let output = []
          for (let i in v) {
            output.push(`[ 学生 ${parseInt(i)+1} ]\n学号 ${v[i].id}\n姓名 ${v[i].name}\n语文成绩 ${v[i].Chinese}\n数学成绩 ${v[i].Math}\n英语成绩 ${v[i].English}`)
          }
          that.setData({
            hidden: false,
            msg: `同步获取缓存数据成功\n${output.join('\n')}`
          })
        } catch (e) {
          that.setData({
            hidden: false,
            msg: `同步获取缓存数据失败！\n${e}`
          })
        }
        break;
      case 'info':
        wx.getStorageInfo({
          success(r) {
            that.setData({
              hidden: false,
              msg: `异步获取缓存信息成功\n空间占用 ${r.currentSize}/${r.limitSize}KB (${Math.ceil((r.currentSize/r.limitSize)*10000)/100}%)`
            })
          },
          fail() {
            that.setData({
              hidden: false,
              msg: '异步获取缓存信息失败！'
            })
          }
        })
        break;
      case 'infoSync':
        try {
          const r = wx.getStorageInfoSync()
          that.setData({
            hidden: false,
            msg: `同步获取缓存信息成功\n空间占用 ${r.currentSize}/${r.limitSize}KB (${Math.ceil((r.currentSize/r.limitSize)*10000)/100}%)`
          })
        } catch (e) {
          that.setData({
            hidden: false,
            msg: `同步获取缓存信息失败！\n${e}`
          })
        }
        break;
      case 'remove':
        wx.removeStorage({
          key: '高一',
          success(r) {
            that.setData({
              hidden: false,
              msg: '异步删除缓存数据成功！'
            })
          },
          fail() {
            that.setData({
              hidden: false,
              msg: '异步删除缓存数据失败..'
            })
          }
        })
        break;
      case 'removeSync':
        try {
          wx.removeStorageSync('高二')
          that.setData({
            hidden: false,
            msg: '同步删除缓存数据成功！'
          })
        } catch (e) {
          that.setData({
            hidden: false,
            msg: `同步删除缓存数据失败！\n${e}`
          })
        }
        break;
      default:
        console.log(`unknown action '${e.currentTarget.dataset.action}'`)
    }
  }
})