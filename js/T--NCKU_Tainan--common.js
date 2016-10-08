(function() {
    /* igem official template */
    $("#HQ_page").attr("id","");
})();

$(window).on("load", function(){
	/* dropdown menu */
	var url = window.location.href;
	var dropNum = -1, submenu, submenuWidth;
	var submenuAr = {
		0: ["Project", "Description", "Result", "Model", "Part"],
		1: ["Hardware", "Software", "Demo"],
		2: ["Medal", "Safety"],
		3: ["Team", "Attribution", "Acknowledgement", "Collaboration"],
		4: ["Human", "Practice", "Engagement"],
		5: ["Notebook"]
	};
	for(var index in submenuAr)
		for(var i=0; i<submenuAr[index].length; ++i)
			if(url.indexOf(submenuAr[index][i])!==-1)
				dropNum = index;
	if(dropNum!==-1) {
		submenu = document.getElementsByClassName('dropdown-menu')[dropNum];
		submenu.parentElement.classList.add("open");
		submenuWidth = submenu.offsetWidth;
	}
	
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
		/* dropdown */
		if (!submenu) return;

		var Top = submenu.parentElement.getBoundingClientRect().bottom;
		var header = document.getElementsByClassName('navbar-header')[0];
		var Left = header.getBoundingClientRect().right;
		if(Top<=0){
			submenu.style.position = header.style.position = "fixed";
			submenu.style.left = Left;
			submenu.style.top = "8px";
			header.style.top = "-30px";
			submenu.style.width = "100%";
			var aTag = submenu.getElementsByTagName("A");
			for(var i in aTag) aTag[i].style.fontSize="18px";
		} else {
			submenu.style.position = "absolute";
			header.style.position = "relative";
			submenu.style.left = "";
			submenu.style.top = "38px";
			header.style.top = "0";
			submenu.style.width = submenuWidth;
			var aTag = submenu.getElementsByTagName("A");
			for(var i in aTag) aTag[i].style.fontSize="12px";
		}

		/* sidemenu */
		var sidemenuTop = document.getElementById("sidemenu").getBoundingClientRect().top;
		var sidemenu = document.getElementById("sidemenu");
		if(sidemenu) {
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
