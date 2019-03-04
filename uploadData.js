function startDataUpload() {
	var name =document.getElementById("name").value;
	var surname =document.getElementById("surname").value;
	var moduleName =document.getElementById("moduleName").value;
	var postString ="name="+name +"&surname="+surname+"&moduleName="+moduleName; 
	alert (postString);
	processData(postString);  
}
var client: // the global variable that holds the request
function processData(postString) {
	//request the client variable
	client = new XMLHttpRequest();
	//bounce the data back from the server
	client.open('POST','http://developer.cege.ucl.ac.uk:30282/reflectData',true);
	//data type
	client.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	//call 'function ready' function
	client.onreadystatechange = dataUpload;
	//send the post String
	client.send(postString);
}
//c create the code to wait for the response and process it once it has responded
function dataUpload()
	//if the client has state 4, the data is ready
	if (client.readyState == 4){
		//change the DIV to show the response
		document.getElementById("dataUploadResult").innerHTML = client.responseText;
	}
