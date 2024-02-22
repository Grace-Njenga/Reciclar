// JavaScript to toggle the menu on click of the toggle button
const primaryNav = document.querySelector(".nav");
const navToogle = document.querySelector(".menu");
navToogle.addEventListener("click", () => {
   const visibility = primaryNav.getAttribute("data-visible");

   if (visibility === "false") {
      primaryNav.setAttribute("data-visible", true);
      navToogle.setAttribute("aria-expanded", true);
   } else if (visibility === "true") {
      primaryNav.setAttribute("data-visible", false);
      navToogle.setAttribute("aria-expanded", false);
   }
});

// initialize aos
AOS.init();

// swiper js
const swiper = new Swiper(".swiper", {
   // Optional parameters
   direction: isLargeScreen ? "vertical" : "horizontal",
   slidesPerView: 1,
   spaceBetween: 30,
   effect: "slide",
   mousewheel: isLargeScreen,
   loop: false,
   // If we need pagination
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});
