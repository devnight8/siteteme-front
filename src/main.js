const formLogin = document.querySelector("#form-login");
const btnLogin = document.querySelector("#btn-regiter");
const closeBtn = document.querySelector("#close-btn");

btnLogin.addEventListener("click",()=>{
  formLogin.classList.toggle('invisible')
})

closeBtn.addEventListener("click",()=>{
  formLogin.classList.toggle('invisible')

})

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 8,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay:true,
  enabled:true,
  minimumVelocity:0.02,
  addSlidesAfter:3,
  addSlidesBefore:3,
});
