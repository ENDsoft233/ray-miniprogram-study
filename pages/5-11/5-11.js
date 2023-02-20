// pages/5-11/5-11.js
let tempFiles, tempFilePath;
Page({

  data: {
    imgPath: "",
    hidden: true,
    msg: ''
  },

  handleClick(e) {
    const that = this;
    let i, file;
    switch (e.currentTarget.dataset.action) {
      case 'open':
        wx.chooseMedia({
          success(r) {
            tempFiles = r.tempFiles
            that.setData({
              imgPath: tempFiles[0].tempFilePath,
              hidden: false,
              msg: '文件打开成功。'
            })
          }
        })
        break;
      case 'save':
        wx.saveFile({
          tempFilePath: tempFiles[0].tempFilePath,
          success(r) {
            console.log(`saved media ${r.savedFilePath}`)
            that.setData({
              hidden: false,
              msg: '文件保存成功。'
            })
          }
        })
        break;
      case 'info':
        wx.getSavedFileList({
          success(r) {
            console.log(r)
            if (r.fileList.length === 0) {
              that.setData({
                hidden: false,
                msg: '没有文件信息。'
              })
            } else {
              for (i in r.fileList) {
                file = r.fileList[i]
                console.log(`第 ${parseInt(i)+1} 个文件路径 ${file.filePath}`)
                let ii = i;
                wx.getSavedFileInfo({
                  filePath: file.filePath,
                  success(res) {
                    console.log(`第 ${parseInt(ii)+1} 个文件大小 ${res.size}`)
                    that.setData({
                      hidden: false,
                      msg: `文件数量 ${parseInt(i)+1}\n最后文件大小 ${res.size}\n最后文件创建时间 ${res.createTime}`
                    })
                  }
                })
              }
            }
          }
        })
        break;
      case 'del':
        wx.getSavedFileList({
          success(r) {
            for (i in r.fileList) {
              file = r.fileList[i]
              wx.removeSavedFile({
                filePath: file.filePath,
              })
              console.log(`第 ${parseInt(i)+1} 个文件被删除。`)
            }
            that.setData({
              hidden: false,
              msg: '文件全部被删除。'
            })
          }
        })
        break;
      default:
        console.log('unknown action')
    }
  }
})