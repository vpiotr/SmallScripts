var xmlhttp = new XMLHttpRequest();
xmlhttp.open(
	"GET", 
	'https://raw.githubusercontent.com/pixellos/SmallScripts/master/TROLS.Json',
	true);
xmlhttp.send();
var trolls = xmlhttp.responseText;

trolls.forEach(function(trol)
{
$(".col-user > h5 > a").filter(function() { return $(this).text() == trol;}).each(function() { $(this).parent().parent().parent().parent().remove();  })
$(".media > .media-body > p > a").filter(function() { return $(this).text() == trol;}).each(function() { $(this).parent().parent().parent().remove(); })
});