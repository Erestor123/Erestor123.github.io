function redirect()
{ 
	var zm = decodeURI(window.location.href).split('=')[1];
	
	window.location.href = "http://" + zm;
}

setTimeout(redirect, 1000);