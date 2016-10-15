var activeImg,
  submenu,
  submenuWidth,
  sidemenu,
  lastScroll = 0,
  scrollDir = true;

document.onscroll = onScroll;

$(window).on('load', function(){
  addImgEventlistener();
  sidemenu = document.getElementById('sidemenu');

  /* dropdown menu */
  var currentMenu = getCurrentMenu();
  if(currentMenu) {
    submenu = document.getElementsByClassName('dropdown-menu')[currentMenu.dropNum];
    submenu.parentElement.classList.add('open');
    submenuWidth = submenu.offsetWidth;
    var children = submenu.children;
    if (children.length >= currentMenu.subNum) {
      children[currentMenu.subNum].classList.add('current-menu');
    }
  }

  /* container */
  checkContainer();

  var HQ = document.getElementById('HQ_page');
  if (HQ) HQ.id = '';
});

function checkContainer(){
  var container = document.getElementsByClassName('content')[0];
  if (container) {
    /* content's height */
    var col1 = container.getElementsByClassName('col-md-9')[0];
    var col2 = container.getElementsByClassName('col-md-3')[0];
    if (col1 !== undefined && col2 !== undefined) {
      updateColsHeight(col1, col2);
    }
  }
  document.documentElement.style.height = document.body.offsetHeight + "px";
}

function addImgEventlistener() {
  var imgs = document.querySelectorAll('.content img');
  imgs = Array.prototype.slice.call(imgs);

  imgs.forEach(function(img) {
    img.addEventListener('click', onClickImg);
  });

  document.body.addEventListener('click', function() {
    if (activeImg) activeImg.classList.remove('clicked');
  });
}

function onClickImg() {
  var self = this;
  if (self.classList.contains('clicked'))
      return;

  setTimeout(function() {
    self.classList.add('clicked');
    activeImg = self;
  }, 100);
}

function updateColsHeight(col1, col2) {
  var h1 = col1.offsetHeight, h2 = col2.offsetHeight;
  if (h2 > h1) {
    col1.style.height = h2 + "px";
  }
  else if (h1 > h2) {
    col2.style.height = h1 + "px";
  }
}

function onScroll() {
  if (submenu) updateSubMenu();
  if (sidemenu) {
		updateSideMenu();
  	checkSideMenu();
	}
  getDirection($(this));
  checkContainer();
}

function getDirection(emt) {
  var thisScroll = emt.scrollTop();
  scrollDir = thisScroll > lastScroll;
  lastScroll = thisScroll;
}

function getCurrentMenu() {
  var url = window.location.href;
  url = url.split("/");
  url = url[url.length-1] === "" ? url[url.length-2] : url[url.length-1];
  var currentMenu;

  var submenuAr = {
    0: ['Project', 'Description', 'Result', 'Model', 'Part', 'Measurement', 'Proof'],
    1: ['Hardware', 'Software', 'Demo'],
    2: ['Medal', 'Safety'],
    3: ['Team', 'Attribution', 'Acknowledgement', 'Collaboration'],
    4: ['Human', 'Integrated', 'Engagement'],
    5: ['Construction', 'Functional', 'Design', 'Protocols']
  };

  for(var index in submenuAr) {
    for(var i = 0; i < submenuAr[index].length; ++i) {
      if(url.toLowerCase().indexOf(submenuAr[index][i].toLowerCase()) !== -1 &&
         url.indexOf("Team:NCKU")===-1 ) {
        currentMenu = {
          dropNum: index,
          subNum: i
        };
      }
    }
  }
  return currentMenu;
}

function updateSubMenu() {
  var nav = document.getElementsByTagName('nav')[0];
  if(window.scrollY >= 10){
    var opened = document.getElementsByClassName('open')[0];
    if (opened) opened.classList.remove('open');
    submenu.parentElement.classList.add('open');
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
  }
}

function updateSideMenu() {
  var width = sidemenu.offsetWidth;
  var top = sidemenu.parentElement.getBoundingClientRect().top;
  var left = sidemenu.getBoundingClientRect().left;

  if(top <= 0) {
    sidemenu.style.position = 'fixed';
    sidemenu.style.width = width + "px";
    sidemenu.style.top = '71px';
    sidemenu.style.left = left + "px";
  } else {
    sidemenu.style.position = 'relative';
    sidemenu.style.top = '';
    sidemenu.style.left = '';
  }
}

function toEvent(section){
  var toTop = $('#'+section).offset().top - 66;
  $('html, body').animate({ scrollTop: toTop+"px" }, 1000, updateSubMenu);
  return false;
}

function checkSideMenu(){
  var emt = document.getElementsByClassName('title-line');
  var li = document.getElementById('sidemenu').getElementsByTagName('li');
  var height = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
  for(var i=emt.length-1; i>=0; --i) {
    var Top = emt[i].getBoundingClientRect().top - height;
    if(Top <= 0 && !hasClass(li[i],"active") && scrollDir) {
      li[i].classList.add("active");
      break;
    } else if(Top > 0 && hasClass(li[i],"active") && !scrollDir) {
      li[i].classList.remove("active");
      break;
    }
  }
}

function hasClass(emt, cls){
  return (' ' + emt.className + ' ').indexOf(' ' + cls + ' ') !== -1;
}

