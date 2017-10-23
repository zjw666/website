
  //x = 16 sin^3 t, y = (13 cos t - 5 cos 2t - 2 cos 3t - cos 4t) 
function draw(){
	if ('undefined' != typeof intervalId){
		clearInterval(intervalId);
	}
	var drawing = document.getElementById("drawing1");
	var pic = document.getElementById('flower');
	drawing.width = drawing.clientWidth;
	drawing.height = drawing.clientHeight;
	if (drawing.getContext){
		var content = drawing.getContext("2d");
		content.beginPath();
		var radian = 0;
		var radian_add = Math.PI/40;
		function heart(){
			radian+=radian_add;
			X = drawing.clientWidth/2+getX1(radian);
			Y = drawing.clientHeight/2+getY1(radian)-50;
			content.drawImage(pic,X,Y,25,25);
			content.drawImage(pic,drawing.clientWidth+(-1)*X,Y,25,25);
			if (radian > (Math.PI)){
				clearInterval(intervalId);
			}
		}
	intervalId = setInterval(heart,100);
	}
}

function getX(t) {                             //由弧度得到 X 坐标  
	return 100 * Math.sin(4*t)*Math.cos(t);  
}  

  
function getY(t) {                              //由弧度得到 Y 坐标  
	return 100 * Math.sin(4*t)*Math.sin(t);  

}

function getX1(t){
	return 15*(16*Math.pow(Math.sin(t),3))
}

function getY1(t){
	return -15*(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))
}
  
$('button').click(function(){
	if ('undefined' != typeof intervalId1){
		clearInterval(intervalId1);
	}
	intervalId1 = setInterval(back,6000);
	$('#drawing1').removeAttr('hidden');
	window.location.href="#drawing1";
	draw();
	$('#word').css('visibility','visible');
	$('#word').css('opacity','0');
	setTimeout(function(){
		$('#word').fadeTo(1000,1);
	},3500);
});

function back(){
	$('.bubble').each(function(){
		rise(this);
	});

}

function rise(bubble){
		setTimeout(function(){
		$(bubble).animate({bottom:'1000px'},(Math.floor(Math.random()*3000)+3000),function(){$(this).css('bottom','-100px');$(this).css('top','');});
		},Math.floor(Math.random()*4000));
}