'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$(".likeBtn").click(clickLike);
}
function clickLike(e){
	e.preventDefault();
	ga('create', 'UA-190106956-1', 'auto');
	ga("send", "event", "like", "click");
}