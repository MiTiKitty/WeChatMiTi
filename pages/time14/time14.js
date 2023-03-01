// pages/time14/time14.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: {
      show: true,
      num: 1
    },
    img: {
      show: false,
      src: "https://img1.baidu.com/it/u=1531608482,120384498&fm=253&fmt=auto&app=138&f=JPEG?w=708&h=500"
    }
  },

  changeTextShow() {
    const {
      num
    } = this.data.msg
    this.setData({
      'msg.num': num + 1
    })
  },

  changeImgShow() {
    const {
      show
    } = this.data.img
    this.setData({
      'img.show': !show
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