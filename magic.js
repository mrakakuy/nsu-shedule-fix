function loadScript(url, async, defer) {
	var script = document.createElement("script")
	script.type = "text/javascript";
	script.src = url;
	script.async = async;
	script.defer = defer;
	document.body.appendChild(script);
}


function doMagic() {
	chrome.storage.sync.get("nsu-shed-specs", function(result) {
	    if (!chrome.runtime.error && result["nsu-shed-specs"] != undefined) {
	    	document.cookie = "nsu-shed-specs=" + result["nsu-shed-specs"];

	    	// Note: hardcoded lmao
			loadScript("https://cdn.jsdelivr.net/gh/MrAkakuy/nsu-shedule-fix@master/fit_schedule.js", true, false);
			loadScript("https://cdn.jsdelivr.net/gh/MrAkakuy/nsu-shedule-fix@master/sheduler.js", false, true); // that's completely gay, sorry
	    } else {
	    	console.error(chrome.runtime.error);
	    }
	});
}

doMagic();