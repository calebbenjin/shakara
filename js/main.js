const openBtn = document.querySelector(".nav-btn");
const closedBtn = document.querySelector(".nav-close");
const sideNav = document.querySelector("nav");
const leftToggle = document.querySelector(".toggle-section .left-toggle");
const rightToggle = document.querySelector(".toggle-section .right-toggle");
const leftToggleContainer = document.querySelector(
  ".toggle-body .left-container"
);
const rightToggleContainer = document.querySelector(
  ".toggle-body .right-container"
);

window.addEventListener("load", function () {
  document.querySelector('body').style.background = 'red'
  setTimeout(function () {
    document.querySelector('body').style.background = 'white'
  }, 2000);
});

openBtn.addEventListener("click", function () {
  sideNav.classList.add("open-sidebar");
});
closedBtn.addEventListener("click", function () {
  sideNav.classList.remove("open-sidebar");
});

leftToggle.addEventListener("click", function () {
  leftToggleContainer.classList.remove("active-body");
  leftToggle.classList.add("active");

  rightToggle.classList.remove("active");
  rightToggleContainer.classList.add("active-body");
});

rightToggle.addEventListener("click", function () {
  rightToggleContainer.classList.remove("active-body");
  rightToggle.classList.add("active");

  leftToggleContainer.classList.add("active-body");
  leftToggle.classList.remove("active");
});



