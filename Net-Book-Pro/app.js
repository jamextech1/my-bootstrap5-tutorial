const nav = document.querySelector(".navbar-collapse");
const btn = document.querySelector(".navbar-toggler");
const btn2 = document.querySelector(".ri-menu-line");
const btn3 = document.querySelector(".ri-close-line");

console.log(nav.classList);

if (nav.classList.contains("show")) {
  // btn2.style.display = "none";
  // btn3.style.display = "block";
  console.log("show");
} else {
  console.log("hide");
}
