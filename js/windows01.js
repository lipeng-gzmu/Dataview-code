function rand(m,n){return m+parseInt((n-m)*Math.random());}
var says=['结束半殖民地社会','废除不平等条约','人民民主','民族团结','冲破帝国主义东方战线','马列主义胜利','人民民主','结束半封建社会'];
var saysLength=says.length;
var oC=document.getElementById('windows01');
var mxwidth=oC.offsetWidth;
var mxheight=oC.offsetHeight;


var oB=new BallBox('windows01');
oB.ballRun();
for(var i=0;i<8;i++){
	var b=rand(40,60);
	var x=rand(b,mxwidth-b);
	var y=rand(b,mxheight-b);
	var ball=new Ball({
		'b':b,
		'x':x,
		'y':y,
		'sx':rand(1,4),
		'sy':rand(1,4),
		'c':'img/paopao'+rand(1,6)+'.png)',
		'opa':rand(60,100)/100,
		'callBack':function(n){
			this.setOpa(rand(60,100)/100);
			if(n%3==0){this.setC('url(img/paopao'+rand(1,6)+'.png)')};//撞三次改变下图片
			if(n%50==0){
				this.setB(rand(40+parseInt((n>1000?1000:n)/50),60+parseInt((n>1000?1000:n)/50)));
			}//撞50次改大小
			this.setHTML(says[rand(0,saysLength)]);
		}
	});
	oB.addBall(ball);
}