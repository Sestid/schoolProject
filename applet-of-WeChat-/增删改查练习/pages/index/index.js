// pages/index/index.js
Page({
  data: {
    newlist:[],
    num: 1,
    index: null,
    listItem: {},
    editModalVisible: false,
    //渲染列表
    list: [
        {
          name: "张环",
          age: 23
        },
        {
            name: "李四",
            age: 47
        },
        {
            name: "王五",
            age: 12
        }
    ]
   
  },
  //渲染列表
  add: function () {
    this.setData({
      num: this.data.num + 1
    })
  },
  cut: function () {
    this.setData({
      num: this.data.num - 1
    })
  },

  delete: function(e){
      let deleteName = e.target.dataset.name;
      let aaa = this.data.list;
      for(let i=0; i<aaa.length; i++){
          if(aaa[i].name === deleteName) {
              aaa.splice(i, 1);
          }
      }
      this.setData({
          list: aaa
      })
  },
 
    showEditModal: function(e){
        let aa = e.target.dataset.index;
        let list = this.data.list;      
        this.setData({
            index: aa,
          listItem:list[aa],
          editModalVisible: true
      });
    },
    nameChange: function(e){
      let text = e.detail.value;
      let a = this.data.listItem;
      a.name = text;
      this.setData({
        listItem: a
      })
    },
    ageChange: function(e){
        let text = e.detail.value;
      let a = this.data.listItem;
        a.age = text;
        this.setData({
          listItem: a
        })
    },
    submit: function(){
      let b = this.data.list;
      let index = this.data.index;
      let listItem = this.data.listItem;
      b[index] = listItem,
      this.setData({
        list:b,
          editModalVisible: false
      })
    },
    hideEditModal: function(e){
        this.setData({
            editModalVisible: false
        });
    },
    getbtn:function(){
      let that = this;
      wx.request({
        url: 'http://yapi.demo.qunar.com/mock/56127/list',
        method:"GET",
        success(res){
          that.setData({
            newlist:res.data.list
          })
        }
      })
    }
})