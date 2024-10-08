// hero swiper  
const swiper = new Swiper('.swiper', {

  // autoplay: {
  //   delay: 1000,
  // },
  speed: 5000,
  effect: 'slide',
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



// mobile menu.
const mobileMenuIcon = document.querySelector('header .fa-bars');
const menu = document.querySelector('header .menu');
mobileMenuIcon.addEventListener('click', () => {
  menu.classList.toggle('open');
});