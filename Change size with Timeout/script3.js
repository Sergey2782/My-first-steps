// function addClass with 1sec delay - using setTimeout;


$(document).ready(function(){
	$(".btn").click(function(){
		addClassByClick()
	})
})
var d = $(".test");
var divs = $("div", d);
var index = -1;

function addClassByClick(){
	
  index = index + 1;

	if($(divs[index]).hasClass("test_one")) {

   		   $(divs[index]).addClass("test_two");

   	}

		setTimeout(addClassByClick, 1000);


	}

// -- The function enlarges the image to the specified time delay  - and reducing Image back

	$(".btn_do_large").click(function(){
			resizeImage()
		}) 
	

function resizeImage(){

var i = document.images[0]; // можно обратиться по имнени файла
var normalWidth = 640;

	if(i.width < normalWidth){

		i.width *= 1.1;
		i.height *=1.1;

		setTimeout(resizeImage, 300);
	}
}

$(".btn_do_small").click(function(){
			reduceImage()
		}) 

function reduceImage(){

var i = document.images[0];
var normalWidth = 200;

	if(i.width > normalWidth){

		i.width *= 0.9;
		i.height *=0.9;

		setTimeout(reduceImage, 300);
	}
}

// ------- same manipulations using  " setInterval "

//var nInterval;
$(".btn_second").click(function(){
	var nInterval = setInterval(addClassByClickSecond, 1000);
	})

var n = 0;
var divs_second = $(".test_second");
var index_second = -1;

function addClassByClickSecond(){
	
  index_second = index_second + 1;

	if($(divs_second[index_second]).hasClass("test_second")) {

   		   $(divs_second[index_second]).addClass("test_second_bg");

   	}
    n = n + 1;
		if (n == divs_second.length)
	      	clearInterval(nInterval);	

}
