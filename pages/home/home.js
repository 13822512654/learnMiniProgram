// pages/home/home.js
// 必须调用page()并且用对象传入自变量
Page({
data:{
  name:'lix',
  age:3,
  students:[
    {id:1,name:'amy',age:17},
    {id:2,name:'lily',age:27},
    {id:3,name:'sam',age:7},
    {id:4,name:'karni',age:22},
  ],
  counter:0
},
handleBtnClick(){
  // 数据发生变化，但是界面没办法监听发生变化，界面不刷新，错误做法
  // this.data.counter++
  // console.log( this.data.counter)

  this.setData({
    counter:this.data.counter+1
  })
}

})

// 编程范式
//1、命令式编程：js原生操作DOM
//2、声明式编程：Vue/React/Angular