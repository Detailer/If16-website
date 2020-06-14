jQuery(document).ready(function(){
	$("#det").click(function(){event.preventDefault();$("html").fadeOut(200,function(){window.location.href="events/index.html"})});
	$("#regi").click(function(){event.preventDefault();$("html").fadeOut(200,function(){window.location.href="/reg/index.html"})});
});
