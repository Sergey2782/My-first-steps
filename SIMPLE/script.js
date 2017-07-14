/*--В таблице с id="courses" каждую четную строку выделить цветом"
-- В таблице с id="courses" выбрать название курса "Javascript PHP" и добавить его в <span> вместо строки "какой-то курс"
*/
$(function(){

$("#courses tr td:odd").css("background", "green");
var txt = $("table#courses tr td:contains('PHP')")//-- выбери колонку в таблице которая включает в себя такой-то текст
	.eq(0).text();
	txt = txt.slice(0, txt.indexOf(" (")); //--- выбрать текст но только до  ("
     var p = $("div.content p.p");
     p.children("span").text(txt); //--- вставить выбранный текст в <span .p>

 });