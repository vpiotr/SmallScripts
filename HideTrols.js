var xmlhttp = new XMLHttpRequest();
xmlhttp.open(
	"GET", 
	'https://raw.githubusercontent.com/pixellos/SmallScripts/master/TROLS.Json',
	false);
xmlhttp.send();
var trolls = JSON.parse(xmlhttp.responseText);

trolls.forEach(function(trol)
{
$(".col-user > h5 > a").filter(function() { return $(this).text() == trol;}).each(function() { $(this).parent().parent().parent().parent().remove();  })
$(".media > .media-body > p > a").filter(function() { return $(this).text() == trol;}).each(function() { $(this).parent().parent().parent().remove(); })
$(".media-body > .media-heading > a").filter(function() { return $(this).text() ==  trol;}).each( function() {$(this).parent().parent().parent().remove();} )
});
