//点击打开/关闭信封
//1
$("#catalogue1").click(function(){
	$(".firstLetter").css("z-index","1")
	$(".firstLetter").css("opacity","1")
})

$(".firstLetter .closeFirstLetter").click(function(){
	$(".firstLetter").css("z-index","-1")
	$(".firstLetter").css("opacity","0")
})
//2
$(".catalogue2").click(function(){
	$(".secondLetter").css("z-index","1")
	$(".secondLetter").css("opacity","1")
})

$(".secondLetter .closeFirstLetter").click(function(){
	$(".secondLetter").css("z-index","-1")
	$(".secondLetter").css("opacity","0")
})
//3
$(".catalogue3 a").click(function(){
	$(".thirdLetter").css("z-index","1")
	$(".thirdLetter").css("opacity","1")
})
$(".thirdLetter .closeFirstLetter").click(function(){
	$(".thirdLetter").css("z-index","-1")
	$(".thirdLetter").css("opacity","0")
})

//4
$(".catalogue4 a").click(function(){
	$(".fourthLetter").css("z-index","1")
	$(".fourthLetter").css("opacity","1")
	
})
$(".fourthLetter .closeFirstLetter").click(function(){
	$(".fourthLetter").css("z-index","-1")
	$(".fourthLetter").css("opacity","0")
})

//5
$(".catalogue5 a").click(function(){
	$(".fifthLetter").css("z-index","1")
	$(".fifthLetter").css("opacity","1")
})

$(".fifthLetter .closeFirstLetter").click(function(){
	$(".fifthLetter").css("z-index","-1")
	$(".fifthLetter").css("opacity","0")
})
window.onload=function(){
	var body = $("#body")
	$(body).fadeToggle(0)
	$(body).fadeToggle(1500)
	
}

$(".catalogueBigBox a").mouseenter(function(){
	var font = $(this).css("font-size")
	font = parseInt(font)+3;
	$(this).css("font-size",font+"px")
})
$(".catalogueBigBox a").mouseleave(function(){
	var font = $(this).css("font-size")
	font = parseInt(font)-3;
	$(this).css("font-size",font+"px")
})
