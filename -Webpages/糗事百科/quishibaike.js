var list =[
	{
		"username":"张环牛逼",
		"age": 48 ,
		"title" : "小女孩儿说：大姐姐，你家有蜡烛吗？她想：第一天就借蜡烛，那以后还不没完没了？于是就说：没有!小女孩儿说：就知道你刚搬过来，肯定没有，所以妈妈让我给你送一只蜡烛。她心里很惭愧。小女孩儿走后，她点燃了那只带迷药的蜡烛，第二天就被卖到了山区给人当了媳妇儿。隔天她高兴地感叹：啊！终于脱单了!那么问题来了：她是学什么专业的？"
	},
    {
		"username":"盖伦",
		"age": 25,
		"title":"却无人上前“拉架”。最后“武功”稍逊一筹的公牛转身想逃，却一头撞翻了一辆电动三轮车，并且卡在了里面。车里的乘客受了轻伤"
	},	
	{
		"username":"亚索",
		"age": 02,
		"title":"印度两“神牛”当街互顶 撞翻了车都没人拉架】印度街头，两头公牛当街开始“顶牛”，谁也不肯让谁。这条街上人还不少，却无人上前“拉架”。最后“武功”稍逊一筹的公牛转身想逃，却一头撞翻了一辆电动三轮车，并且卡在了里面。车里的乘客受了轻伤"
	},	
]
var str ="";
var left = document.getElementById("left");
for (var i = 0; i<list.length; i++){
	str+='<div class="item"><div class="info"><img class="logo" src="./shichunyu.png"><span class="name">'+list[i].username+'</span><span class="sex">'+list[i].age+'</span><div class="info-content">'+list[i].title+'</div><div class="num"><span>2337好笑</span> . <span>344评论</span></div></div></div>'
}
left.innerHTML = str;
var li_list = document.getElementByTagName("li");
	for (var i = 0; i<li_list.length; i++ ){
		li_list[i].onclick = function() {
			for {
					li_list[t].className ="";
			}
			this.className = "selected"
 }
}
