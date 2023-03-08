// pages/time19/time19.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pos: '01234567890abcdef',
    itemName: '',
    items:[{
      name: "王者荣耀",
      backColor: "#3e1",
      color: "#c1e"
    }]
  },

  addItem(e){
    const {items, itemName} = this.data;
    const ne = items.filter((item) => {
      return item.name == itemName;
    });
    if (ne.length != 0) {
      return;
    }
    const item = this.createItem(itemName);
    this.setData({
      items: [...items, item]
    })
  },

  createItem(name){
    let backColor = "#"
    let color = "#"
    const {pos} = this.data
    for (let index = 0; index < 6; index++) {
      const i =Math.floor(Math.random() * pos.length)
      const a = pos[i]
      const b = pos[pos.length - i - 1]
      backColor += a
      color += b
    }
    return {
      name: name,
      backColor: backColor,
      color: color
    }
  },

  removeItem(e){

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