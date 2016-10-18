$(function() {
	var title = document.getElementsByClassName('title-content');
	for(var i=0; i<title.length; ++i) {
		title[i].addEventListener("click", function(){
			var title = document.getElementsByClassName('title-content');
			for(var i=0; i<title.length; ++i) {
				if(this===title[i]) {
					var elm = document.getElementsByClassName('text-content')[i];
					if(elm.className.indexOf('active')===-1) elm.classList.add('active');
					else elm.classList.remove('active');
				}
			}
		});
	}
});
