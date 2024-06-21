const formLogin = document.querySelector("#form-login");
const btnLogin = document.querySelector("#btn-regiter");
const closeBtn = document.querySelector("#close-btn");

btnLogin.addEventListener("click",()=>{
  formLogin.classList.toggle('invisible')
})

closeBtn.addEventListener("click",()=>{
  formLogin.classList.toggle('invisible')

})

let swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 8,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 8,
      spaceBetween: 10
    },
  },
  autoplay:true,
  enabled:true,
  minimumVelocity:0.02,
  addSlidesAfter:3,
  addSlidesBefore:3,
});



let swiperCourse = new Swiper(".swiper-course", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop:true,
  autoplay:true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    680: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 4,
      spaceBetween: 10
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

