function redirect()
{ 
	var zm = window.location.href.split('=')[1];
	window.location.href = zm;
}

setTimeout(redirect, 1000);