var gr = document.createElement("canvas");
gr.id = "graph";
gr.width = 600;
gr.height = 400;
document.body.appendChild(gr);

function draw(tel){
	var graph = document.getElementById("graph");
	graph.width = graph.width;
	var g = graph.getContext("2d");
    var fx = 125;
    var fy = 160;
	g.lineWidth = 8;
	g.lineCap = "round";
	g.strokeStyle = "#e2ced0";
	g.beginPath();
	g.arc(10+fx,10+fy,10,Math.PI/2,Math.PI*3/2,false);
	g.moveTo(10+fx,fy);
	g.lineTo(100+fx,fy);
	g.moveTo(10+fx,20+fy);
	g.lineTo(90+fx,20+fy);
	g.stroke();

	g.beginPath();
	g.arc(90+fx,30+fy,10,Math.PI/2,Math.PI*3/2,true);
	g.moveTo(fx,40+fy);
	g.lineTo(90+fx,40+fy);
	g.stroke();

	g.beginPath();
	g.moveTo(120+fx,fy);
	g.lineTo(160+fx,fy);
	g.moveTo(180+fx,fy);
	g.lineTo(220+fx,fy);
	g.stroke();

	g.beginPath();
	g.arc(160+fx,10+fy,10,-Math.PI/2,0,false);
	g.moveTo(170+fx,10+fy);
	g.lineTo(170+fx,40+fy);
	g.stroke();

	g.beginPath();
	g.arc(250+fx,30+fy,10,-Math.PI/2,Math.PI,true);
	g.moveTo(240+fx,fy);
	g.lineTo(330+fx,fy);
	g.moveTo(250+fx,20+fy);
	g.lineTo(330+fx,20+fy);
	g.stroke();

	g.beginPath();
	g.arc(330+fx,10+fy,10,Math.PI/2,Math.PI*3/2,true);
	g.moveTo(240+fx,30+fy);
	g.lineTo(240+fx,40+fy);
	g.stroke();

	g.fillStyle = "#e2ced0";
	g.font = "15px sans-serif";
	g.textAlign = "right";
	g.fillText("比亚迪唐DM-i(2021)车主",465,fy-60);
	g.fillText("数学、网络开发爱好者",465,fy-30);
	g.fillText("TEL : (086)"+tel,465,120+fy);
	g.fillText("E-mail : hi@public.email.cn",465,150+fy);	
}

function nt(){
	var x = 38 + 28,
	    y = 234 + 279,
	    z = 166 + 191;

	return ' 1' + x + ' 0' + y + ' 6' + z;
}

function shuoshuo(sha){
	var graph = document.getElementById("graph");
	graph.width = graph.width;
	var g = graph.getContext("2d");
    var fx = 125;
    var fy = 160;
	g.lineWidth = 8;
	g.lineCap = "round";
	g.strokeStyle = "#e2ced0";
	g.beginPath();
	g.arc(10+fx,10+fy,10,Math.PI/2,Math.PI*3/2,false);
	g.moveTo(10+fx,fy);
	g.lineTo(100+fx,fy);
	g.moveTo(10+fx,20+fy);
	g.lineTo(90+fx,20+fy);
	g.stroke();

	g.beginPath();
	g.arc(90+fx,30+fy,10,Math.PI/2,Math.PI*3/2,true);
	g.moveTo(fx,40+fy);
	g.lineTo(90+fx,40+fy);
	g.stroke();

	g.beginPath();
	g.moveTo(120+fx,fy);
	g.lineTo(160+fx,fy);
	g.moveTo(180+fx,fy);
	g.lineTo(220+fx,fy);
	g.stroke();

	g.beginPath();
	g.arc(160+fx,10+fy,10,-Math.PI/2,0,false);
	g.moveTo(170+fx,10+fy);
	g.lineTo(170+fx,40+fy);
	g.stroke();

	g.beginPath();
	g.arc(250+fx,30+fy,10,-Math.PI/2,Math.PI,true);
	g.moveTo(240+fx,fy);
	g.lineTo(330+fx,fy);
	g.moveTo(250+fx,20+fy);
	g.lineTo(330+fx,20+fy);
	g.stroke();

	g.beginPath();
	g.arc(330+fx,10+fy,10,Math.PI/2,Math.PI*3/2,true);
	g.moveTo(240+fx,30+fy);
	g.lineTo(240+fx,40+fy);
	g.stroke();

	g.fillStyle = "#e2ced0";	
	g.font = "15px sans-serif";
	g.textAlign = "left";
	g.fillText("seatop.me",fx,fy-30);
	g.fillText(sha,fx,100+fy);	
}

draw(" 000 0000 0000");

var gc = document.getElementById("graph");
gc.ondblclick = function(){
	draw(nt());
}

var i = 0;
gc.onclick = function(){
	if(i == 0){
		i = 1;
		var j = Math.floor(Math.random()*one.length);
		shuoshuo(one[j]);		
	}else{
		i = 0;
		draw(" 000 0000 0000");		
	}
}