//  navigator_burger toggler
let navToggler = document.querySelector(".nav-toggler");
let nav = document.querySelector("header nav");
navToggler.addEventListener("click", () => {
  navToggler.classList.toggle("show");
  nav.classList.toggle("show");
});
