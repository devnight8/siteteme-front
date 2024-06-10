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


