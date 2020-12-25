$(function() {
	$("#talk").mouseenter( function() {
		$("h1").css("background-color", "yellow");
	});  // 대상에 마우스 올렸을 때
	$("h1").mouseleave( function() {
		$("h1").css("background-color", "pink");
	});  // 대상에 마우스 떼었을 때
	$("h1").click( function() {
		$("h1").css("background-color", "black");
	});  // 대상에 클릭했을 때
	
});