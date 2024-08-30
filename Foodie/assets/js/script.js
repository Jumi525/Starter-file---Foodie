"use strict";

const navbar = document.querySelector("[data-navbar]");
const header = document.querySelector("[data-header");
const toggleBtn = document.querySelector("[data-toggle]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const searchBtn = document.querySelector("[data-search-btn]");
const searchInput = document.querySelector("[data-search]");

searchBtn.addEventListener("click", function () {
  searchInput.classList.toggle("active");
  this.classList.toggle("active");
});

toggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    toggleBtn.classList.toggle("active");
  });
}

window.addEventListener("scroll", function () {
  if (this.window.scrollY >= 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
