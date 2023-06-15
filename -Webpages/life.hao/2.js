var c=document.getElementsByClassName('a1');
c.onclick=function(){
	if(document.getElementsByClassName("a2").style.display ="none"){ //B是另一个div
document.getElementsByClassName("a2").style.display= "block";
}else{
document.getElementsByClassName("a2").style.display= "none";
}
}