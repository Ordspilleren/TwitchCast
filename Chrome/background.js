var ipaddress = localStorage["ipaddress"];

chrome.browserAction.onClicked.addListener(function(tab) {
	var socket = io.connect(ipaddress + ':3457');
		
	chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, function(tabs){
		var currentUrl = tabs[0].url;
		
		if(currentUrl.indexOf("twitch.tv") > -1) {
			var finalUrl = currentUrl.substring(currentUrl.lastIndexOf("twitch.tv"));
			socket.send(finalUrl);
		}
	});
});