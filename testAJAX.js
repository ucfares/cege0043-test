var xhr; //define the gloal variable to process the AJAX request
function callDivChange() {
	xhr= new XMLHttpRequest();
	xhr.open("GET", "test.html",true);
	xhr.onreadystatechange= processDivChange;
	xhr.send()
}
function processDivChange() {
	if (xhr.readystate <4) // while waiting for a response from server
		document.getElementById('div1').innerHTML= "Loading...";
	else if (xhr.readyState === 4) { // 4=response from server has been loaded completely
		if (xhr.status==200 && xhr.status<300)
			//http status between 200 and 299 are all successful
		document.getElementById('div1').innerHTML= xhr.responseText;
}
xhr = new XMLHttpRequest();
var filename = document.getElementById("filename").value;
xhr.open("GET", filename, true);
xhr.onreadystatechange = processDivChange;
xhr.send();