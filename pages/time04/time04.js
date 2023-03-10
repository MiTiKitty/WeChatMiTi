// pages/time04/time04.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [
      {src: "https://img1.baidu.com/it/u=1605341541,1182642759&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750"},
      {src: "https://img2.baidu.com/it/u=3202947311,1179654885&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"},
      {src: "https://img1.baidu.com/it/u=1308526554,393095433&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800"},
      {src: "https://img2.baidu.com/it/u=1003272215,1878948666&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800"}
    ],
    list: [
      {color: "#34d", name: "A"},
      {color: "#2e1", name: "B"},
      {color: "#0ae", name: "C"},
      {color: "#3f9", name: "D"}
    ],
    msg: "老墨，我是猫，我想吃鱼了",
    stuList: []
  },

  getStuInfo() {
    wx.request({
      url: 'http://localhost:8080/stu/list',
      method: "GET",
      success: (rep) => {
        this.setData({
          stuList: rep.data
        })
      },
      fail: (e) => {
        wx.showToast({
          title: '请求网络失败！',
          icon: "error"
        })
      }
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