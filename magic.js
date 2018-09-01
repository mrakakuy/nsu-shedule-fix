function loadScript(url) {
	var script = document.createElement("script")
	script.type = "text/javascript";
	script.src = url;
	document.head.appendChild(script);
}


function doMagic() {
	// Note: hardcoded lmao
	loadScript("https://cdn.rawgit.com/Dimonchik0036/schedule-fix-provider/master/fit_schedule.js");
	loadScript("https://cdn.rawgit.com/MrAkakuy/nsu-schedule-fix/master/sheduler.js"); // that's completely gay, sorry
}

doMagic();