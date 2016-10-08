var activeImg,
  submenu,
  submenuWidth,
  sidemenu;

document.onscroll = onScroll;

$(window).on('load', function(){
  $('#HQ_page').attr('id', '');

  sidemenu = document.getElementById('sidemenu');
  addImgEventlistener();

  /* dropdown menu */
  var dropNum = getDropNum();
  if(dropNum !== -1) {
    submenu = document.getElementsByClassName('dropdown-menu')[dropNum];
    submenu.parentElement.classList.add('open');
    submenuWidth = submenu.offsetWidth;
  }

  /* container */
  var container = document.getElementsByClassName('content')[0];
  if (container) {
    /* content's height */
    var col1 = container.getElementsByClassName('col-md-9')[0];
    var col2 = container.getElementsByClassName('col-md-3')[0];
    if (col1 !== undefined && col2 !== undefined) {
        updateColsHeight(col1, col2);
    }
  }
});

function addImgEventlistener() {
  var imgs = document.querySelectorAll('.content img');
  if (imgs) {
    imgs.forEach(function(img) {
      img.addEventListener('click', onClickImg);
    });
  }

  document.body.addEventListener('click', function() {
    if (activeImg) activeImg.classList.remove('clicked');
  });
}

function updateStyle(el, styles) {
  for (var key in styles) {
    el.style[key] = styles[key];
  }
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
      col1.style.height = h2;
  }
    else {
      col2.style.height = h1;
  }
}

function onScroll() {
  if (submenu) updateSubMenu();
  if (sidemenu) updateSideMenu();
}

function updateTagsFontSize(aTag, size) {
  if (!aTag) return;
  [].slice.call(aTag).forEach(function(tag) {
    tag.style.fontSize = size;
  });
}

function getDropNum() {
  var url = window.location.href;
  var dropNum = -1;
  var submenuAr = {
    0: ['Project', 'Description', 'Result', 'Model', 'Part'],
    1: ['Hardware', 'Software', 'Demo'],
    2: ['Medal', 'Safety'],
    3: ['Team', 'Attribution', 'Acknowledgement', 'Collaboration'],
    4: ['Human', 'Practice', 'Engagement'],
    5: ['Notebook']
  };

  for(var index in submenuAr) {
    for(var i = 0; i < submenuAr[index].length; ++i) {
      if(url.toLowerCase().indexOf(submenuAr[index][i].toLowerCase()) !== -1) {
        dropNum = index;
      }
    }
  }
  return dropNum;
}

function updateSubMenu() {
  var nav = document.getElementsByTagName('nav')[0];
  if(window.scrollY >= 10){
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
  }
}

function updateSideMenu() {
  /* sidemenu */
  var sidemenuTop = sidemenu.getBoundingClientRect().top;
  var sidepercent = sidemenu.style.width;
  var width = sidemenu.offsetWidth;
  var top = sidemenu.parentElement.getBoundingClientRect().top;
  var left = sidemenu.parentElement.getBoundingClientRect().left
  ;
  if(sidepercent[0] === '8' || sidepercent === '') {
    left += width*.2;
  }
  else if (sidepercent[0] === '9') {
    left += width*.1;
  }
  else if(sidepercent[0] === '1') {
    left += 15;
  }

  if(top <= 0) {
    sidemenu.style.position = 'fixed';
    sidemenu.style.width = width;
    sidemenu.style.top = '55px';
  } else {
    sidemenu.style.position = 'relative';
    sidemenu.style.top = '';
  }
}

function toEvent(section){
  $('html, body').animate({ scrollTop: $('#'+section).offset().top }, 1000);
}
