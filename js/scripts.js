function redirect()
{
	var part = window.location.href.split('=')[1];
	var link = decodeURIComponent(decodeURIComponent(part));

	window.location.href = "http://" + link;
}

setTimeout(redirect, 1000);