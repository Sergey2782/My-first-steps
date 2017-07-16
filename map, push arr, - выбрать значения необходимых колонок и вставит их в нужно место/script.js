//- выбрать из третьей колонки назвния городов и вставить их вначале страницы после Cities:
//  если назвние города повторяется оно не должно больше одного раза попадать в выборку


$(function(){
	var tr = $("table tbody tr");
	var cities = tr.map(function(i, obj){
		return $(obj).children().eq(2).text();
	});
	function unique(arr){
		var tmp = [];
		for(var i=0; i<arr.length; i++){
			if(tmp.indexOf(arr[i])== -1)
				tmp.push(arr[i]);
		}
		return tmp;
	}

	cities = unique(cities);
	$("span.cities").text(
        $.map(cities, function(obj, i){
        	return cities[i];
        }).join(", ")
	);

});