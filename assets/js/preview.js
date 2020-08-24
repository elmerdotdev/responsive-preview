const canvas = document.querySelector('.canvas__wrapper');
const desktop = document.querySelector('.desktop');
const tablet = document.querySelector('.tablet');
const mobile = document.querySelector('.mobile');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

let menuStatus = false;

let url = new URL(window.location.href);
let getSite = url.searchParams.get('site');

if (getSite != null && getSite != '') {
  if (!getSite.includes('https://') && !getSite.includes('http://')) {
    getSite = 'http://' + getSite;
  }
  document.querySelector('.canvas__wrapper__preview').src = getSite;
}

desktop.addEventListener('click', () => {
  canvas.classList.remove('tablet', 'mobile');
  setActive('desktop');
});
tablet.addEventListener('click', () => {
  canvas.classList.remove('mobile');
  canvas.classList.add('tablet');
  setActive('tablet');
});
mobile.addEventListener('click', () => {
  canvas.classList.remove('tablet');
  canvas.classList.add('mobile');
  setActive('mobile');
});

function setActive(display) {
  if (display == 'desktop') {
    desktop.classList.add('active');
    tablet.classList.remove('active');
    mobile.classList.remove('active');
  } else if (display == 'tablet') {
    desktop.classList.remove('active');
    tablet.classList.add('active');
    mobile.classList.remove('active');
  } else if (display == 'mobile') {
    desktop.classList.remove('active');
    tablet.classList.remove('active');
    mobile.classList.add('active');
  }
}

burger.addEventListener('click', () => {
  if (menuStatus == false) {
    document.querySelector('.overlay').style.display = '';
    burger.classList.add('active');
    setTimeout(() => {
      menu.classList.add('active');
    }, 200);
    menuStatus = true;
  } else if (menuStatus == true) {
    menu.classList.remove('active');
    burger.classList.remove('active');
    setTimeout(() => {
      document.querySelector('.overlay').style.display = 'none';
    }, 500);
    menuStatus = false;
  }
});
