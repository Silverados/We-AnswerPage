// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    A: 2,
    B: 3,
    C: 5,
    Kind:'unknow'
  },

  whichKind: function(){
    if(this.data.A>this.data.B&&this.data.A>this.data.C){
     return "听觉型"
    } else if (this.data.B > this.data.A && this.data.B > this.data.C){
      return "动觉型"
    } else if (this.data.C > this.data.A && this.data.C > this.data.B) {
      return "视觉型"
    } else if (this.data.A == this.data.B && this.data.A > this.data.C) {
      return "听觉动觉均衡型"
    } else if (this.data.A > this.data.B && this.data.A == this.data.C) {
      return "听觉视觉均衡型"
    } else if (this.data.A < this.data.B && this.data.B == this.data.C) {
      return "听觉视觉均衡型"
    } else{
      return "均衡型"
    }
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    this.setData({
      A: options.A - 0,
      B: options.B - 0,
      C: options.C - 0,
      
    })
   
    this.setData({
      Kind: this.whichKind()
    }) 
    console.log(this.whichKind())
     /**
   * Amax:听觉
   * Kmax:动觉
   * Vmax:视觉
   * A=K>V:听觉动觉均衡型……
   */
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