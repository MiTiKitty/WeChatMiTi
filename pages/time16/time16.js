// pages/time16/time16.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money: 400,
    heroList: [{
      price: 1000,
      name: '亚索',
      imgSrc: 'https://img1.baidu.com/it/u=3487819281,3791994073&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=887'
    },
    {
      price: 2000,
      name: '安其拉',
      imgSrc: 'https://img1.baidu.com/it/u=2963515191,1513890205&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889'
    },
    {
      price: 3000,
      name: '赵云',
      imgSrc: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F7b761d63-c0a3-423a-98cd-e13284e7296e%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1680762079&t=1b00ebcf56ab030437f8fe60a8f57c69'
    },
    {
      price: 4000,
      name: '鲁班',
      imgSrc: 'https://img0.baidu.com/it/u=2943249199,4206968448&fm=253&fmt=auto&app=138&f=JPEG?w=528&h=500'
    }],
    colorByRgbList:[]
  },

  addMoney(){
    const {money} = this.data
    this.setData({
      money: money * 1 + 500
    })
  },

  getColorList(){
    wx.request({
      url: 'http://localhost:8080/color/rgb/8',
      method: 'GET',
      success: (res)=>{
        console.log(res);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //this.getColorList();
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