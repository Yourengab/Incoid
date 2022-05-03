function validateForm() {
  var x = document.forms["barForm"]["fname"].value;
  if (x == "") {
    alert("Tolong isi pertanyaan terlebih dahulu");
    return false;
  } else {
    alert("Pertanyaan berhasil dikirim!");
  }
}
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
const imgQuestion = document.querySelector(".question .imgQuestion");
const questionBar = document.querySelector(".question .question-bar");
imgQuestion.addEventListener("click", function () {
  questionBar.classList.add("show-bar");
});
const barClose = document.querySelector(".question-bar i");
barClose.addEventListener("click", function () {
  questionBar.classList.remove("show-bar");
});
