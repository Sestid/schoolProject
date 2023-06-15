var li_list=document.getElementsByClassName('taps')[0].getElementsByTagName('li');
// console.log(li_list);
var serve_list=document.getElementsByClassName('serve');
for(var i=0;i<li_list.length;i++)
{
	li_list[i].index=i;
	li_list[i].onclick=function () {
		for (var m =0; m<li_list.length;m++) {
		  li_list[m].className="";
		  serve_list[m].className="serve hide"
		}
		this.className="selected";
		serve_list[this.index].className="serve"
	}

}

var li_list_1=document.getElementsByClassName('tap')[0].getElementsByTagName('li');
var feed_list=document.getElementsByClassName('feed');
for(var n=0;n<li_list_1.length;n++){
	li_list_1[n].ind=n;
	li_list_1[n].onclick=function(){
		for(var t=0;t<li_list_1.length;t++){
			li_list_1[t].className="";
			feed_list[t].className="feed local";
		}
		this.className="selected";
		feed_list[this.ind].className="feed";
	}
}