// Creating the hero tabs functionality
let tabs = document.getElementsByClassName("tab");
tabs = Array.from(tabs);
let contentReset = (parent) => {
  //function to hide all the contents
  let contents = parent.getElementsByClassName("content-sub");
  contents = Array.from(contents);
  contents.forEach(content => {
    content.style.display = 'none';
  });
};
let showContent = (target, content) => {
  //function to show specific targeted content
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  contentReset(content.parentElement); //call the reset function to hide all the contents
  target.classList.add("active");
  content.classList.add("fade-in");
  content.style.display = "block";
};
// show specific content on click
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const content = document.getElementById(e.target.getAttribute("data-to"));
    showContent(e.target, content);
  });
});

// creating the pricing plan filter
const monthly = document.getElementById("monthly");
const annually = document.getElementById("annually");
let toggler = document.getElementById("plan-toggler");
toggler.addEventListener("click", () => {
  if (toggler.classList.contains("toggle")) {
    toggler.classList.remove("toggle");
  } else {
    toggler.classList.add("toggle");
  } //change toggler animation class
  if (toggler.classList.contains("toggle")) {
    monthly.style.display = "none";
    annually.style.display = "block";
    annually.classList.add("fade-in");
    annually.children[0].children[1].style.display = "block";
    annually.children[0].children[0].children[0].children[0].classList.add(
      "active"
    );
  } else {
    annually.style.display = "none";
    monthly.style.display = "block";
    monthly.classList.add("fade-in");
    monthly.children[0].children[1].style.display = "block";
    monthly.children[0].children[0].children[0].children[0].classList.add(
      "active"
    );
  }
});

// creating the mobile navigator toggler
let navToggler = document.querySelector(".nav-toggler");
let nav = document.querySelector("header nav");
navToggler.addEventListener("click", () => {
  navToggler.classList.toggle("show");
  nav.classList.toggle("show");
});
