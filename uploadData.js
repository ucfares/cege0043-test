function startDataUpload() {
	var name =document.getElementById("name").value;
	var surname =document.getElementById("surname").value;
	var moduleName =document.getElementById("moduleName").value;
	var postString ="name="+name +"&surname="+surname+"&moduleName="+moduleName; 
	alert (postString); 
}