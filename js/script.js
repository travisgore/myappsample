
function reqListener(){
	
	$(function(){
	var glossary = JSON.parse(this.responseText);
		console.log(glossary);
	  $("#tags").autocomplete({
		source:glossary
	});
	});
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "dictionary.txt");
oReq.send();
