var xmlhttp = new XMLHttpRequest();
xmlhttp.open(
	"GET", 
	'https://raw.githubusercontent.com/pixellos/SmallScripts/master/TROLS.Json',
	false);
xmlhttp.send();
var trolls = JSON.parse(xmlhttp.responseText);
var regexpSwitches = "i";

trolls.forEach(function(trol)
{
	var trollReg = new RegExp(trol, regexpSwitches);
	//Posty
	$(".col-user > h5")
		.filter(function() 
		{ 
			return $(this).text().match(trollReg);
		}).each(function() 
		{
			$(this).parent().parent().parent().parent().remove();  
		});
	//Komentarz
	$(".media > .media-body > p > a")
		.filter(function() 
		{
			return $(this).text().match(trollReg);
		}).each(function() {
			$(this).parent().parent().parent().remove(); 
		});
	//Mikroblog
	$(".media-body > .media-heading > a")
		.filter(function() 
		{ 
			return $(this).text().match(trollReg);
		}).each( function() 
		{
			$(this).parent().parent().parent().remove();
		});
	//Komentarz do mikrobloga
	$(".comment-body > h6 > a")
		.filter(function() 
		{ 
			return $(this).text().match(trollReg);
		}).each( function() 
		{
			$(this).parent().parent().parent().parent().remove();
		});
});
