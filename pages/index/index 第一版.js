// 第一版 垃圾版
Page({
  data: {
    input:'',
    onlist:[],
    on:0,
    offlist:[],
    off:0
  },
  inputHandle:function(e){
    // console.log(e.detail.value);
    this.setData({
      input:e.detail.value
    })
  },
  addtodoHandle:function(e){
    if (!this.data.input || !this.data.input.trim()) return
    var onlist=this.data.onlist
    onlist.push({name: this.data.input, completed: false })
    var on=onlist.length
    this.setData({
      input:'',
      onlist: onlist,
      on:on
    })
  },
  ontapHandler:function(e){
    var index=e.currentTarget.dataset.index
    var onlist=this.data.onlist
    onlist[index].completed=!onlist[index].completed
    var offlist=this.data.offlist
    offlist.push(onlist[index])
    var off=offlist.length
    onlist.splice(index,1)
    // console.log(onlist.splice(index,1));
    var on=onlist.length
    this.setData({
      onlist:onlist,
      on:on,
      offlist:offlist,
      off:off
    })
  },
  offtapHandler:function(e){
    var index=e.currentTarget.dataset.index
    var offlist=this.data.offlist
    offlist[index].completed=!offlist[index].completed
    var onlist=this.data.onlist
    onlist.push(offlist[index])
    var on=onlist.length
    offlist.splice(index,1)
    // console.log(onlist.splice(index,1));
    var off=offlist.length
    this.setData({
      onlist:onlist,
      on:on,
      offlist:offlist,
      off:off
    })
  },
  iconhandler:function(e){
    console.log(e.target);
    if(e.target.id==='on'){
      var onlist=this.data.onlist
      var index=e.currentTarget.dataset.index
      onlist.splice(index,1)
      var on=onlist.length
      this.setData({
        onlist:onlist,
        on:on
      })
    }else{
      var offlist=this.data.offlist
      var index=e.currentTarget.dataset.index
      offlist.splice(index,1)
      var off=offlist.length
      this.setData({
        offlist:offlist,
        off:off
      })
    }
  }
})
