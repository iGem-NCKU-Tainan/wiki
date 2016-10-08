(function() {
    /* igem official template */
    $("#HQ_page").attr("id","");
})();

$(window).on("load", function(){
    var container = document.getElementsByClassName("content")[0];
    if (container === undefined) return;

    /* content's height */
    var col1 = container.getElementsByClassName("col-md-9")[0];
    var col2 = container.getElementsByClassName("col-md-3")[0];

    if (col1 !== undefined && col2 !== undefined) {
      updateColsHeight(col1, col2);
  }

	/* fix side-menu after scroll */
	var bodyTop = document.body.getBoundingClientRect().top;
	var tmp = document.getElementById("sidemenu");
	var sidepercent = tmp.style.width;

	$(window).scroll( function(){
		var sidemenuTop = document.getElementById("sidemenu").getBoundingClientRect().top;
		var sidemenu = document.getElementById("sidemenu");
		var Width = sidemenu.offsetWidth;
		var Top = sidemenu.parentElement.getBoundingClientRect().top;
		var Left = sidemenu.parentElement.getBoundingClientRect().left;
		if(sidepercent[0]=='8' || sidepercent=='') Left+=Width*.2;
		else if(sidepercent[0]=='9') Left+=Width*.1;
		else if(sidepercent[0]=='1') Left+=15;
		if(Top<=0) {
			sidemenu.style.position = "fixed";
			sidemenu.style.width = Width;
			sidemenu.style.top = "0";
			sidemenu.style.left = Left;
		} else {
			sidemenu.style.position = "relative";
			sidemenu.style.top = "";
			sidemenu.style.left = "";
		}
	});
});


function updateColsHeight(col1, col2) {
    var h1 = col1.offsetHeight, h2 = col2.offsetHeight;
    if (h2 > h1) {
      col1.style.height = h2;
  }
    else {
      col2.style.height = h1;
  }
}

function toEvent(section){
	$('html, body').animate({ scrollTop: $("#"+section).offset().top }, 1000);
}
