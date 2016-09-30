(function() {
	/* igem official template */
	$("#HQ_page").attr("id","");
})();

$(window).on("load", function(){
	var container = document.getElementsByClassName("content")[0];
	if (container === undefined) return;

	/* content's height */
	var col1 = container.getElementsByClassName("col-md-9");
	var col2 = container.getElementsByClassName("col-md-3");

	if (col1 !== undefined && col2 !== undefined) {
	  updateColsHeight(col1, col2);
  }

	/* add content page's comment */
	var content = container.getElementsByClassName("title-line");
	var comment = container.getElementsByClassName("block");
	for(var i=0; i<content.length; ++i) {
		var item1 = content.item(i);
		var item2 = comment.item(i);
		var Top = item1.offsetTop;
		item2.style.position = "absolute";
		item2.style.top = Top+"px";
		item2.style.width = "90%";
	}
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
