chrome.webNavigation.onCompleted.addListener(function(details) {
	chrome.tabs.executeScript(details.tabId, {
		file: "magic.js"
	});
}, {url: [{urlMatches : 'https://table.nsu.ru/group/*'}]});