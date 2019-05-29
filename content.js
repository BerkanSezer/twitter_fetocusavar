"use strict";

function createKesLanFetocu(){
	var muteButtons = document.querySelectorAll("li.mute-user-item > button");
	for(var i=0; i< muteButtons.length;i++){
		muteButtons[i].textContent="Kes Lan Fetöcü!";
	}
}
window.onload=function(){
	createKesLanFetocu();
}
window.onscroll=function(){
	createKesLanFetocu();
}

