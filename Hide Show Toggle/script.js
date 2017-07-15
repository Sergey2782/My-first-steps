// --- по клику применяется метод hide и метод show - меняя   display:none    or    display: block

$(function(){
   function toggle(obj){
   	  obj
   	    .siblings("button")
   	      .removeAttr("disabled") // для того чтобы вернуться в kонтекст нужного объекта используем ---  end
        .end()
        .attr("disabled","disabled");
   }

   $(".hide").on("click", function(){
      $(".box").hide();
      toggle($(this));
     // $(".hide").attr("disabled", "disabled");     -------очевидна явная повторяемость кода - поэтому вставим его в  функцию toggle
      //$(".hide").siblings("button").removeAttr("disabled");
   }) 


   $(".show").on("click", function(){
      $(".box").show();
       toggle($(this));
     // $(".show").attr("disabled", "disabled");  -------очевидна явная повторяемость кода - поэтому вставим его в  функцию toggle
     // $(".show").siblings("button").removeAttr("disabled");
   }) 




//  ---по клику происходит переключение - теперь одна кнопка  - меняется текст внутри кнопки
 
	 $(".toggle").on("click", function(){
	   if($(".box_one").is(":visible")){
	   	$(".box_one").hide();
	   	$(this).text("Show");
	   	}else{
	   		$(".box_one").show();
	   		$(this).text("Hide");
	   }
	 
	 });

//---   изменение класса - по клику используя  -TOGGLE

	 $(".toggle_two").on("click", function(){
		$(".box_two").toggle();
	});


})
