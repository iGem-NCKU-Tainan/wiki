function addImgEventlistener(){var e=document.querySelectorAll(".content img");e.forEach(function(e){e.addEventListener("click",onClickImg)}),document.body.addEventListener("click",function(){activeImg&&activeImg.classList.remove("clicked")})}function onClickImg(){var e=this;e.classList.contains("clicked")||setTimeout(function(){e.classList.add("clicked"),activeImg=e},100)}function updateColsHeight(e,t){var n=e.offsetHeight,o=t.offsetHeight;o>n?e.style.height=o:t.style.height=n}function onScroll(){submenu&&updateSubMenu(),sidemenu&&updateSideMenu()}function getDropNum(){var e=window.location.href,t=-1,n={0:["Project","Description","Result","Model","Part"],1:["Hardware","Software","Demo"],2:["Medal","Safety"],3:["Team","Attribution","Acknowledgement","Collaboration"],4:["Human","Practice","Engagement"],5:["Notebook"]};for(var o in n)for(var i=0;i<n[o].length;++i)-1!==e.toLowerCase().indexOf(n[o][i].toLowerCase())&&(t=o);return t}function updateSubMenu(){var e=document.getElementsByTagName("nav")[0];window.scrollY>=10?(document.getElementsByClassName("open")[0].className="",submenu.parentElement.classList.add("open"),e.classList.add("fixed")):e.classList.remove("fixed")}function updateSideMenu(){var e=sidemenu.offsetWidth,t=sidemenu.parentElement.getBoundingClientRect().top;0>=t?(sidemenu.style.position="fixed",sidemenu.style.width=e,sidemenu.style.top="55px"):(sidemenu.style.position="relative",sidemenu.style.top="")}function toEvent(e){return $("html, body").animate({scrollTop:$("#"+e).offset().top},1e3,updateSubMenu),!1}var activeImg,submenu,submenuWidth,sidemenu;document.onscroll=onScroll,$(window).on("load",function(){addImgEventlistener(),sidemenu=document.getElementById("sidemenu");var e=getDropNum();-1!==e&&(submenu=document.getElementsByClassName("dropdown-menu")[e],submenu.parentElement.classList.add("open"),submenuWidth=submenu.offsetWidth);var t=document.getElementsByClassName("content")[0];if(t){var n=t.getElementsByClassName("col-md-9")[0],o=t.getElementsByClassName("col-md-3")[0];void 0!==n&&void 0!==o&&updateColsHeight(n,o)}var i=document.getElementById("HQ_page");i&&(i.id="")});