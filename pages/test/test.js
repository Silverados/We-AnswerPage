// pages/test/test.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    realIndex: 0,
    A: 0,
    B: 0,
    C: 0,
    a:0,
    b:0,
    c:0,
    optionA: "A",
    optionB: "B",
    optionC: "C",
    questionDetail: app.globalData.question[0].question,
    answerA: app.globalData.question[0].option.A,
    answerB: app.globalData.question[0].option.B,
    answerC: app.globalData.question[0].option.C,
    list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    listABC : ['A','B','C']
  },

  randSort: function () {
    return Math.random() > 0.5 ? 1 : -1;
  },

  setList: function () {
    var newList = this.data.list.sort(this.randSort);
    this.setData({
      list: newList,
    });
  },

  setABC : function(){
    var abc = this.data.listABC.sort(this.randSort);
    this.setData({
      listABC: abc,
    });
  },

  setOption: function(){

  },



  answerClickA: function () {
    if (this.data.listABC[0] == 'A') {
      this.setData({
        A: this.data.A + 1
      })
    }
    else if (this.data.listABC[0] == 'B') {
      this.setData({
        B: this.data.B + 1
      })
    }
    if (this.data.listABC[0] == 'C') {
      this.setData({
        C: this.data.C + 1
      })
    }
    this.setData({
      index: this.data.index + 1,
      realIndex: this.data.list[this.data.index],

      
    })
   
    this.setData({
      questionDetail: app.globalData.question[this.data.realIndex].question,
     
      answerA: app.globalData.question[this.data.realIndex].option[this.data.listABC[0]],
      answerB: app.globalData.question[this.data.realIndex].option[this.data.listABC[1]],
      answerC: app.globalData.question[this.data.realIndex].option[this.data.listABC[2]],
    })
    if (this.data.index == 20) {
      wx.redirectTo({
        url: '/pages/result/result?A=' + this.data.A + '&B=' + this.data.B + '&C=' + this.data.C,
      })
    }
  },

  answerClickB: function () {
    if(this.data.listABC[1] == 'A'){
      this.setData({
        A:this.data.A + 1
      })
    }
    else if (this.data.listABC[1] == 'B') {
      this.setData({
        B: this.data.B + 1
      })
    }
    if (this.data.listABC[1] == 'C') {
      this.setData({
        C: this.data.C + 1
      })
    }
    this.setData({
      index: this.data.index + 1,
      realIndex: this.data.list[this.data.index]
    })
    this.setData({
      questionDetail: app.globalData.question[this.data.realIndex].question,
      answerA: app.globalData.question[this.data.realIndex].option[this.data.listABC[0]],
      answerB: app.globalData.question[this.data.realIndex].option[this.data.listABC[1]],
      answerC: app.globalData.question[this.data.realIndex].option[this.data.listABC[2]],
    })
    if (this.data.index == 20) {
      wx.redirectTo({
        url: '/pages/result/result?A=' + this.data.A + '&B=' + this.data.B + '&C=' + this.data.C,
      })
    }
  },

  answerClickC: function () {
    if (this.data.listABC[2] == 'A') {
      this.setData({
        A: this.data.A + 1
      })
    }
    else if (this.data.listABC[2] == 'B') {
      this.setData({
        B: this.data.B + 1
      })
    }
    if (this.data.listABC[2] == 'C') {
      this.setData({
        C: this.data.C + 1
      })
    }
    this.setData({
      index: this.data.index + 1,
      realIndex: this.data.list[this.data.index],
      
    })
    this.setData({
      questionDetail: app.globalData.question[this.data.realIndex].question,
      answerA: app.globalData.question[this.data.realIndex].option[this.data.listABC[0]],
      answerB: app.globalData.question[this.data.realIndex].option[this.data.listABC[1]],
      answerC: app.globalData.question[this.data.realIndex].option[this.data.listABC[2]],
    })
    if (this.data.index == 20) {
      wx.redirectTo({
        url: '/pages/result/result?A=' + this.data.A + '&B=' + this.data.B + '&C=' + this.data.C,
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setList();
    this.setABC();
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})