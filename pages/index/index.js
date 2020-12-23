// 第三版  功能全版
Page({
  data: {
    input:'',
    list:[],
    on:0,
    off:0
  },
  save:function(){
    wx.setStorageSync('list', this.data.list)
  },
  onLoad:function(){
    var list=wx.getStorageSync('list')
    if(!list) {return}
    this.data.list.push(list)
    this.foreach(list)
    this.setData({
      list:list
    })
  },
  inputHandle:function(e){
    // console.log(e.detail.value);
    this.setData({
      input:e.detail.value
    })
  },
  addtodoHandle:function(e){
    if (!this.data.input || !this.data.input.trim()) return
    var list=this.data.list
    list.push({name: this.data.input, completed: false })
    this.foreach(list)
    this.setData({
      list:list,
      input:''
    })
    this.save()
  },
  tapHandler:function(e){
    var index=e.currentTarget.dataset.index
    var list=this.data.list
    list[index].completed=!list[index].completed
    this.foreach(list)
    this.save()
  },
  iconhandler:function(e){
    var list=this.data.list
    var index=e.currentTarget.dataset.index
    list.splice(index,1)
    this.foreach(list)
    this.save()
  },
  foreach:function(list){
    var on=0,off=0
    list.forEach(function(item){
      if(item.completed===false){
        on++
      }else{
        off++
      }
    })
    this.setData({
      list:list,
      on:on,
      off:off
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'menu') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: 'ToDoList',
      path: "pages/index/index"
    }
  },
  onShareTimeline: function (res) {
    if (res.from === 'menu') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: 'ToDoList',
      path: "pages/index/index"
    }
  }
})
