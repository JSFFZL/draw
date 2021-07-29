var names = [
	"王总",
	"张老师",
	"郜周贵",
	"张靖",
	"王德力",
	"李杰",
	"金瑞",
	"张雪",
	"李丽华",
	"于晓婕",
	"刘凤阁",
	"于梁",
	"陈越"
];
var namess = [];
bg();
function bg(){
	document.getElementById("strs").innerHTML='';
	for(var i=0;i<51;i++){
		var rdmnum = Math.floor(Math.random()*names.length);
		var str = '';
		str+='<div>';
		var rdmnum1 = Math.floor(Math.random()*10)+1;
		for(var h=rdmnum1;h>0;h--){
			str+='<font style="opacity: '+h/10+';">'+names[rdmnum]+'</font>';
		}
		str+='</div>';
		document.getElementById("strs").innerHTML+=str;
	}
}
var start1 = null;
var num1 = 0;
function starts(){
	if(num1==0){
		start1=setInterval(bg,100);
		document.getElementById("cz").innerText="停止";
		document.getElementById("strs").style.transform="translateZ(0px) translateY(0px)";
		document.getElementById("result").style.opacity="0";
		num1=1;
	}else{
		clearInterval(start1);
		document.getElementById("cz").innerText="开始";
		document.getElementById("strs").style.transform="translateZ(450px) translateY(350px)";
		document.getElementById("result").style.opacity="1";
		var rdmname = document.getElementById("strs").childNodes[25].firstChild.innerText;
		document.getElementById("result").innerText='恭喜 ' + rdmname + ' 中奖!';
		namess.unshift(rdmname+' 中奖');
		// rank();
		num1=0;
	}
}
function rank(){
	document.getElementById("rank").innerHTML='<p>历史记录</p>';
	for(var i=0;i<namess.length;i++){
		if(i==10){
			break;
		}
		document.getElementById("rank").innerHTML+='<p>'+namess[i]+'</p>';
	}
}
function update(){
	document.getElementById("update").style.top="18vh";
}
function updatelist(){
	document.getElementById("updatelist").innerHTML='';
	for(var i=0;i<names.length;i++){
		document.getElementById("updatelist").innerHTML+='<option>'+names[i]+'</option>'
	}
}
// updatelist();
function update3(){
	document.getElementById("update").style.top="-35vh";
	document.getElementById("tx").value='';
}
function update1(){
	var str = document.getElementById("tx").value;
	for(var i=0;i<names.length;i++){
		if(names[i]==str){
			namess.unshift(names[i]+' 删除');
			names.splice(i,1);
			updatelist();
			document.getElementById("tx").value='';
			rank();
			break;
		}
	}
}
function update2(){
	var str = document.getElementById("tx").value;
	namess.unshift(str+' 添加');
	names.push(str);
	updatelist();
	rank();
	document.getElementById("tx").value='';
}
var x,y,start2;
function rankdown(){
	start2 = setInterval(rankmove);
}
function rankup(){
	clearInterval(start2);
}
function rankmove(){
	document.getElementById("rank").style.left=x-20+'px';
	document.getElementById("rank").style.top=y-10+'px';
}
function moves(xy){
	x=xy.clientX;
	y=xy.clientY;
}