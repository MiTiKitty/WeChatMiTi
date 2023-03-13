// pages/time19/time19.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pos: '01234567890abcdef',
    itemName: '',
    items: [{
      name: "王者荣耀",
      backColor: "#3e1",
      color: "#c1e"
    }]
  },

  /**
   * 添加元素
   */
  addItem() {
    const {
      items,
      itemName
    } = this.data
    const ne = items.filter((item) => {
      return item.name == itemName
    })
    const item = this.createItem(itemName)
    this.clearItemName()
    if (ne.length != 0 || itemName.length == 0) {
      return
    }
    this.setData({
      items: [...items, item]
    })
  },

  /**
   * 创建一个元素
   * @param {元素名称} name 
   */
  createItem(name) {
    let backColor = "#"
    let color = "#"
    const {
      pos
    } = this.data
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * pos.length)
      backColor += pos[index]
      color += pos[pos.length - index - 1]
    }
    return {
      name: name,
      backColor: backColor,
      color: color
    }
  },

  /**
   * 根据选项参数，删除对应元素
   * @param {选项参数} e 
   */
  removeItem(e) {
    const name = e.target.dataset.name
    const {
      items
    } = this.data
    const newItems = items.filter((item) => {
      return item.name != name
    })
    this.setData({
      items: newItems
    })
  },

  /**
   * 清空itemName
   */
  clearItemName() {
    this.setData({
      itemName: ''
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