const openBtn = document.querySelector('.nav-btn');
const closedBtn = document.querySelector('.nav-close');
const sideNav = document.querySelector('nav');

openBtn.addEventListener('click', function() {
  sideNav.classList.add('open-sidebar')
})
closedBtn.addEventListener('click', function() {
  sideNav.classList.remove('open-sidebar')
})
