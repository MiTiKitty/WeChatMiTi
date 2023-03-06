// pages/time15/time15.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0,
    count: 1,
    name: '小明',
    sex: '男',
    age: 20
  },

  handleInputChangeCount(e){
    console.log('input 里面的value：', e.detail.value);
  },

  addByCount(e){
    console.log(e.target.dataset.info);
    const {num, count} = this.data
    this.setData({
      num: count * 1 + num,
      count: count * 1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})