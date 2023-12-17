const Sign_in_btn = document.querySelector("#sign-in-btn");
const Sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

Sign_up_btn.addEventListener('click', () => {
 container.classList.add("sign-up-mode");
});

Sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
   });
