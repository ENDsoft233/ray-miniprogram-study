// pages/5-8/5-8.js
Page({

  data: {
    animation: undefined
  },

  onReady() {
    this.animation = wx.createAnimation()
  },

  handleClick(e) {
    const action = e.currentTarget.dataset.action
    switch (action) {
      case 'rotate':
        this.animation.rotate(Math.random() * 720 - 360).step()
        break;
      case 'scale':
        this.animation.scale(Math.random() * 2).step()
        break;
      case 'translate':
        this.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
        break;
      case 'skew':
        this.animation.skew(Math.random() * 90, Math.random() * 90).step()
        break;
      case 'rotateAndScale':
        this.animation.rotate(Math.random() * 720 - 360).scale(Math.random() * 2).step()
        break;
      case 'rotateThenScale':
        this.animation.rotate(Math.random() * 720 - 360).step().scale(Math.random() * 2).step()
        break;
      case 'all':
        this.animation.rotate(Math.random() * 720 - 360).scale(Math.random() * 2).translate(Math.random() * 100 - 50, Math.random() * 100 - 50).skew(Math.random() * 90, Math.random() * 90).step()
        break;
      case 'allInQueue':
        this.animation.rotate(Math.random() * 720 - 360).step().scale(Math.random() * 2).step().translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step().skew(Math.random() * 90, Math.random() * 90).step()
        break;
      case 'reset':
        this.animation.rotate(0, 0).scale(1).translate(0, 0).skew(0, 0).step({
          duration: 0
        })
        break;
      default:
        console.log('unknown action.')
    }
    this.setData({
      animation: this.animation.export()
    })
  }
})