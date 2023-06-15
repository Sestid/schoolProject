//index.js
//获取应用实例


Page({
  data: {
    find1:"贝壳找房APP",
    find2:"找房大平台",
    tab:0, //点击出现对应界面
    
  },
  //点击出现对应界面
  toggleTag:function(e){
    let aa = e.target.dataset.index;
    this.setData({
      tab:Number(aa)   
    })
    },
    //点击出现对应界面
  
  


})
