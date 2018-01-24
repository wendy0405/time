// pages/test/test.js
var time_interval;
var content = wx.createCanvasContext('arc');
var color = parseInt("8B4513", 16)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timer:100,
    time_s:false,
    botton_name:'开始'
  },
  onLoad:function(params) {
    content.beginPath();
    content.arc(180, 180, 100, 0, 2 * Math.PI, false);
    content.setFillStyle('#b2b2b2')
    content.fill()
    content.draw(true) 
    content.arc(180, 180, 120, 0, 2 * Math.PI, false);
    content.setStrokeStyle('#b2b2b2')
    content.stroke()
    content.draw(true) 
  },
  contr: function() {
    if (this.data.time_s === false) {
      console.log('开始')
      this.setData({
        botton_name:"暂停",
        time_s: true
      })
      this.start()
    }else{
      console.log('暂停')
      this.setData({
        botton_name: "开始",
        time_s: false
      })
      this.wait()
    }
  },
  start: function () {
    let that = this;
    let i = this.data.timer
    let all_arc = 2 * Math.PI
    let min = all_arc / i
    let end = -Math.PI /2;
    let start = -Math.PI/2
    time_interval = setInterval(() =>{
        that.setData({
          timer:i--
        })
        end += min
        this.create(start,end)
        start += min-0.01
        if(i == -1) {
          clearInterval(time_interval)
        }
    },1000);
    
  },
  wait:function() {
    clearInterval(time_interval);
  },
  stop:function() {

  },
  create:function(start,end) {
    color++
    content.beginPath();
    content.arc(180, 180, 110, start, end);
    content.setStrokeStyle('#' + color.toString(16))
    content.setLineWidth(20)
    content.stroke()
    content.draw(true) 
  }
})
