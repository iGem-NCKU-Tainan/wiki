function changeContainerBig(){var e=document.getElementsByClassName("head");e.length&&(e[0].offsetTop,document.getElementById("container-big").style.top=Top-20+"px")}function checkContainer(){var e=document.getElementsByClassName("content")[0];if(e){var t=e.getElementsByClassName("col-md-9")[0],n=e.getElementsByClassName("col-md-3")[0];void 0!==t&&void 0!==n&&updateColsHeight(t,n)}document.documentElement.style.height=document.body.offsetHeight+"px"}function addImgEventlistener(){var e=document.querySelectorAll(".content img");e=Array.prototype.slice.call(e),e.forEach(function(e){e.addEventListener("click",onClickImg)}),document.body.addEventListener("click",function(){activeImg&&activeImg.classList.remove("clicked")})}function onClickImg(){var e=this;e.classList.contains("clicked")||setTimeout(function(){e.classList.add("clicked"),activeImg=e},100)}function updateColsHeight(e,t){var n=e.offsetHeight,i=t.offsetHeight;i>n?e.style.height=i+"px":n>i&&(t.style.height=n+"px")}function onScroll(){submenu&&updateSubMenu(),sidemenu&&(updateSideMenu(),checkSideMenu()),getDirection($(this)),checkContainer()}function getDirection(e){var t=e.scrollTop();scrollDir=t>lastScroll,lastScroll=t}function getCurrentMenu(){var e=window.location.href;e=e.split("/"),e=""===e[e.length-1]?e[e.length-2]:e[e.length-1];var t,n={0:["Project","Description","Result","Model","Part","Measurement","Proof"],1:["Hardware","Software","Demo"],2:["Medal","Safety"],3:["Team","Attribution","Acknowledgement","Collaboration"],4:["Human","Integrated","Engagement"],5:["Construction","Functional","Design","Protocols","notebookModel"]};for(var i in n)for(var o=0;o<n[i].length;++o)-1!==e.toLowerCase().indexOf(n[i][o].toLowerCase())&&-1===e.indexOf("Team:NCKU")&&(t={dropNum:i,subNum:o});return t}function updateSubMenu(){var e=document.getElementsByTagName("nav")[0];if(window.scrollY>=10){var t=document.getElementsByClassName("open")[0];t&&t.classList.remove("open"),submenu.parentElement.classList.add("open"),e.classList.add("fixed")}else e.classList.remove("fixed")}function updateSideMenu(){var e=sidemenu.offsetWidth,t=sidemenu.parentElement.getBoundingClientRect().top,n=sidemenu.getBoundingClientRect().left;0>=t?(sidemenu.style.position="fixed",sidemenu.style.width=e+"px",sidemenu.style.top="71px",sidemenu.style.left=n+"px"):(sidemenu.style.position="relative",sidemenu.style.top="",sidemenu.style.left="")}function toEvent(e){var t=$("#"+e).offset().top-66;return $("html, body").animate({scrollTop:t+"px"},1e3,updateSubMenu),!1}function checkSideMenu(){var e,t=document.getElementsByClassName("exp").length;e=document.getElementsByClassName(t?"head2":"title-line");for(var n=document.getElementById("sidemenu").getElementsByTagName("li"),i=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,o=e.length-1;o>=0;--o){var s=e[o].getBoundingClientRect().top-i;if(0>=s&&!hasClass(n[o],"active")&&scrollDir){n[o].classList.add("active");break}if(s>0&&hasClass(n[o],"active")&&!scrollDir){n[o].classList.remove("active");break}}}function hasClass(e,t){return-1!==(" "+e.className+" ").indexOf(" "+t+" ")}var activeImg,submenu,submenuWidth,sidemenu,lastScroll=0,scrollDir=!0;document.onscroll=onScroll,$(window).on("load",function(){addImgEventlistener(),sidemenu=document.getElementById("sidemenu");var e=getCurrentMenu();if(e){submenu=document.getElementsByClassName("dropdown-menu")[e.dropNum],submenu.parentElement.classList.add("open"),submenuWidth=submenu.offsetWidth;var t=submenu.children;t.length>e.subNum&&t[e.subNum].classList.add("current-menu")}checkContainer(),changeContainerBig();var n=document.getElementById("HQ_page");n&&(n.id="")}),window.addEventListener("resize",changeContainerBig);