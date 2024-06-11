const formLogin = document.querySelector("#form-login");
const btnLogin = document.querySelector("#btn-regiter");
const closeBtn = document.querySelector("#close-btn");
btnLogin.addEventListener("click", () => {
  formLogin.classList.add("flex");

  formLogin.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  formLogin.classList.remove("flex");
  formLogin.classList.add("hidden");
});


// const listMenu = document.querySelector('.list-menu')
// const Submenu = document.querySelector('.sub-menu')
//
// listMenu.addEventListener('click',(e)=>{
//   e.preventDefault();
//   Submenu.classList.toggle('hidden');
//   // Submenu.classList.toggle('block');
// })
//
