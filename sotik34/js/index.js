"use strict"

$(function(){
    $("#container1").twentytwenty();
  });

  $(function(){
    $(".twentytwenty-container").twentytwenty({
      default_offset_pct: 0.5, // How much of the before image is visible when the page loads
      orientation: 'horizontal', // Orientation of the before and after images ('horizontal' or 'vertical')
     
    });
  });
  $(function(){
    $("#container2").twentytwenty();
  });
  $(function(){
    $("#container3").twentytwenty();
  });

//   const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,

//     allowTouchMove: false,

//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });

// var swiper = new Swiper(".swiper", {
//     slidesPerView: 1,
//     loop: true,
//     allowTouchMove: false,
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     spaceBetween: -100,
//     coverflowEffect: {
//       rotate: 0,
//       stretch: 0,
//       depth: 800,
//       modifier: 1,
//       slideShadows: false
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev"
//     },
//   });

     





var mySwiper = new Swiper ('.swiper', {
    speed: 400,
    spaceBetween: 100,
    initialSlide: 3,
    //truewrapper adoptsheight of active slide
    autoHeight: false,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,
    // delay between transitions in ms
    autoplay: 5000,
    autoplayStopOnLast: false, // loop false also
    // If we need pagination
    pagination: '.swiper-pagination',
    paginationType: "bullets",
    
    navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            },
    
    // And if we need scrollbar
    //scrollbar: '.swiper-scrollbar',
    // "slide", "fade", "cube", "coverflow" or "flip"
    effect: 'slide',
    // Distance between slides in px.
    spaceBetween: 60,
    //
    slidesPerView: 1,
    //
    centeredSlides: true,
    //
    slidesOffsetBefore: 0,
    //
    grabCursor: true,
  });
  




















//   document.addEventListener('DOMContentLoaded', function() {
//     const accordions = document.querySelectorAll('.accord');

//     accordions.forEach(function(accordion) {
//         accordion.addEventListener('click', function() {
//             accordions.forEach(function(otherAccordion) {
//                 if (otherAccordion !== accordion) {
//                     otherAccordion.classList.remove('active');
//                     otherAccordion.nextElementSibling.style.maxHeight = null;
//                 }
//             });

//             const content = accordion.nextElementSibling;
//             if (content.style.maxHeight) {
//                 accordion.classList.remove('active');
//                 content.style.maxHeight = null;
//             } else {
//                 accordions.forEach(function(otherAccordion) {
//                     otherAccordion.classList.remove('active');
//                     otherAccordion.nextElementSibling.style.maxHeight = null;
//                 });

//                 accordion.classList.add('active');
//                 content.style.maxHeight = content.scrollHeight + 'px';
//             }
//         });
//     });
// });

const accordions = document.querySelectorAll('.accordion');
const accordionButtons = document.querySelectorAll(".accordion__tittle")
const accordionDataboxes =  document.querySelectorAll(".accordion__content");

accordions.forEach(n => {
     const currentButton = n.querySelector(".accordion__tittle");
     const currentDatabox = n.querySelector(".accordion__content");

     const toggleActiveElements = () => {
          accordionButtons.forEach(v => {
               if (v !== currentButton) {
                    v.classList.remove("open");
               }
          });

          accordionDataboxes.forEach(v => {
               if (v !== currentDatabox) {
                    v.classList.remove("open");
                    v.style.setProperty("--height", "0px");
               }
          });

          currentButton.classList.toggle("open");
          currentDatabox.classList.toggle("open");

          currentDatabox.classList.contains("open")
               ? currentDatabox.style.setProperty("--height", `${currentDatabox.scrollHeight}px`)
               : currentDatabox.style.setProperty("--height", "0px");
     };

     currentButton.addEventListener("click", toggleActiveElements);
});


