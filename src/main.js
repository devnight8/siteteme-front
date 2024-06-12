const formLogin = document.querySelector("#form-login");
const btnLogin = document.querySelector("#btn-regiter");
const closeBtn = document.querySelector("#close-btn");

btnLogin.addEventListener("click",()=>{
  formLogin.classList.toggle('invisible')
})

closeBtn.addEventListener("click",()=>{
  formLogin.classList.toggle('invisible')

})
