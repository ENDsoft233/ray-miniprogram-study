// pages/5-3/5-3.js
const cvs = wx.createCanvasContext('cvs')
Page({
  handleClick: arg => {
    const action = arg.currentTarget.dataset.action;
    console.log(`handling btn ${action} clicked.`)
    if (action === 'drawDot') {
      cvs.arc(200, 200, 10, 0, 2 * Math.PI)
      cvs.setFillStyle('black')
      cvs.fill()
    } else if (action === 'drawCircle') {
      cvs.setFillStyle('black')
      cvs.arc(200, 200, 10, 0, 2 * Math.PI)
      cvs.fill()
      cvs.setStrokeStyle('red')
      cvs.moveTo(300, 200)
      cvs.arc(200, 200, 100, 0, 2 * Math.PI)
      cvs.stroke()
    } else if (action === 'drawDash') {
      cvs.setStrokeStyle('red')
      cvs.setLineDash([20, 10])
      cvs.setLineWidth(10)
      cvs.moveTo(50, 100)
      cvs.lineTo(250, 100)
      cvs.lineTo(150, 300)
      cvs.lineTo(50, 100)
      cvs.stroke()
      cvs.setLineDash([0, 0])
      cvs.setLineWidth(1)
    } else if (action === 'capAndJoin') {
      cvs.setStrokeStyle('red')
      cvs.setLineWidth(20)
      cvs.setLineCap('round') // 端点
      cvs.setLineJoin('bevel') // 连接点
      cvs.moveTo(50, 50)
      cvs.lineTo(250, 50)
      cvs.lineTo(50, 250)
      cvs.lineTo(250, 250)
      cvs.stroke()
      cvs.setLineWidth(1)
      cvs.setLineCap('butt')
      cvs.setLineJoin('mitter')
    } else if (action === 'drawText') {
      cvs.setFillStyle('red')
      cvs.setFontSize(40)
      cvs.setTextBaseline('bottom')
      cvs.fillText('114514', 80, 80)
      cvs.setFillStyle('yellow')
      cvs.setTextBaseline('top')
      cvs.fillText('1919810', 80, 80)
      cvs.setFillStyle('black')
      cvs.rotate(30 * Math.PI / 180)
      cvs.fillText('上海大学', 150, 80)
    } else if (action === 'circularGrad') {
      let grd = cvs.createCircularGradient(175, 175, 125)
      grd.addColorStop(0, 'purple')
      grd.addColorStop(1, 'white')
      cvs.setFillStyle(grd)
      cvs.fillRect(50, 50, 250, 250)
    } else if (action === 'shadowRect') {
      cvs.setFillStyle('orange')
      cvs.setShadow(20, 20, 50, 'yellow')
      cvs.fillRect(50, 50, 250, 250)
    } else if (action === 'translucent') {
      cvs.setFillStyle('red')
      cvs.setGlobalAlpha(0.2)
      cvs.fillRect(50, 50, 250, 250)
      cvs.setGlobalAlpha(1)
    }
    cvs.draw()
  }
})