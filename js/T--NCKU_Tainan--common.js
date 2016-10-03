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

	$(window).scroll( function(){
		var sidemenuTop = document.getElementById("sidemenu").getBoundingClientRect().top;
		var sidemenu = document.getElementById("sidemenu");
		var Width = sidemenu.offsetWidth;
		var Top = sidemenu.parentElement.getBoundingClientRect().top;
		if(Top<=0) {
			sidemenu.style.position = "fixed";
			sidemenu.style.width = Width;
			sidemenu.style.top = "0";
		} else {
			sidemenu.style.position = "relative";
			sidemenu.style.top = "";
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
