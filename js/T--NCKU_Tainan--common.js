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
  var header = document.getElementsByClassName('navbar-header')[0];
  var Left = header.getBoundingClientRect().right;

  var Top = submenu.parentElement.getBoundingClientRect().bottom;
  var aTag = submenu.getElementsByTagName('A');


  if(Top <= 0){
    /* Fixed submenu */
    updateStyle(submenu, {
      position: 'fixed',
      top: '8px',
      left: Left,
      width: '100%'
    });
    updateStyle(header, {
      position: 'fixed',
      top: '-30px'
    });
    updateTagsFontSize(aTag, '18px');

  } else {
    /* Unfixed submenu */
    updateStyle(submenu, {
        position: 'absolute',
        top: '38px',
        left: '',
        width: submenuWidth
    });
    updateStyle(header, {
      position: 'relative',
      top: '0'
    });
    updateTagsFontSize(aTag, '12px');
  }
}

function updateSideMenu() {
  /* sidemenu */
  var sidemenuTop = sidemenu.getBoundingClientRect().top;
  var sidepercent = sidemenu.style.width;
  var Width = sidemenu.offsetWidth;
  var Top = sidemenu.parentElement.getBoundingClientRect().top;
  var Left = sidemenu.parentElement.getBoundingClientRect().left
  ;
  if(sidepercent[0] === '8' || sidepercent === '') {
    Left += Width*.2;
  }
  else if (sidepercent[0] === '9') {
    Left += Width*.1;
  }
  else if(sidepercent[0] === '1') {
    Left += 15;
  }

  if(Top <= 0) {
    sidemenu.style.position = 'fixed';
    sidemenu.style.width = Width;
    sidemenu.style.top = '0';
    sidemenu.style.left = Left;
  } else {
    sidemenu.style.position = 'relative';
    sidemenu.style.top = '';
    sidemenu.style.left = '';
  }
}

function toEvent(section){
  $('html, body').animate({ scrollTop: $('#'+section).offset().top }, 1000);
}
