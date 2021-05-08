/*
=============
Navigation
=============
 */
const navOpen = document.querySelector(".nav_hamburger");
const navClose = document.querySelector(".close_toggle");
const menu = document.querySelector(".nav_menu");
const scrollLink = document.querySelectorAll(".scroll-link");
const navContainer = document.querySelector(".nav_menu");

navOpen.addEventListener("click", () => {
  menu.classList.add("open");
  document.body.classList.add("active");
  navContainer.style.left = "0";
  navContainer.style.width = "30rem";
});

navClose.addEventListener("click", () => {
  menu.classList.remove("open");
  document.body.classList.remove("active");
  navContainer.style.left = "-30rem";
  navContainer.style.width = "0";
});



/*
=============
Sticky Navbar
=============
*/

window.onscroll = function() {myFunction()};

var header = document.getElementById("navigation");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



/*
=============
Glide Js Carousel
=============
 */

const slider1 = document.getElementById("glide_1");



/*
------------------
------------------
Project Slider
------------------
------------------
*/

if (slider1) {
  new Glide(slider1, {
    type: "carousel",
    startAt: 0,
    autoplay: 3000,
    hoverpause: true,
    perView: 1,
    animationDuration: 800,
    animationTimingFunc: "linear",
  }).mount();
}


