const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
const vaksinToggle = document.querySelector(".vaksin button");
const vaksinSearch = document.querySelector(".vaksin .vaksin-search");
const closeSearch = document.querySelector(".vaksin-search .close");
vaksinToggle.addEventListener("click", function () {
  vaksinSearch.classList.toggle("show");
});
closeSearch.addEventListener("click", function () {
  vaksinSearch.classList.toggle("show");
});
const vaksinClose = document.querySelector(".main-search .btn");
vaksinClose.addEventListener("click", function () {
  alertBar.classList.toggle("alert-show");
});
const alertBar = document.querySelector(".vaksin-search .alert");
const alertClose = document.querySelector(".vaksin-search .close-alert");
alertClose.addEventListener("click", function () {
  alertBar.classList.toggle("alert-show");
});
