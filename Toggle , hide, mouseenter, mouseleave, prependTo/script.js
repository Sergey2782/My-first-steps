/* --В div class="news" скрыть все эдементы  <span> с классом "hidden"
 - При  нажатии левой кнопки мыши на элемент <p> скрытые элементы <span> должны показываться
 */

$(function(){
   $("div.news span.hidden").hide();
   $("div.news p").on("click", function(){
     $(this).children("span").eq(1).toggle();
   });

/*---  в таблице с  class="courses"  при наведении курсора мыши н аэлемент <tr>  должны: 
          --  меняться цвет фона данной строки таблицы
          --  текст в третьей колонке выделялся полужирным
 
*/
    var tr = $("table.courses tbody tr");

	function changeTableColor (eType, obj){
	   var bg = ""; var fw = "";
	   if(eType === "mouseenter"){
	   	bg = "yellow"; fw = "bold";
	   }
	   obj.css("background", bg)
	   .children().eq(2).css("font-weight", fw);
	}

	tr.on("mouseenter mouseleave", function(e){
		changeTableColor(e.type, $(this));
	});
   

//--- создать элемент <h2> - добавить  нему свойства и значения свойств и  вставить перед <article>

   $("<h2></h2>", {
   	 text: "Добаваили строку",
   	 class: "myClass"
   }).prependTo("article");

});

