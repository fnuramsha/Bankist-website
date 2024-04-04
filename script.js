"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Smooth Scrolling
const btnScroll = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScroll.addEventListener("click", function (e) {
  const getCords = section1.getBoundingClientRect();
  console.log(getCords);
  console.log(e.target.getBoundingClientRect());
  console.log("Current play set (X/Y)", window.pageXOffset, window.pageYOffset);
  // console.log(
  //   "height/width port",
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
  // window.scrollTo(
  //   getCords.left + window.pageXOffset,
  //   getCords.top + window.pageYOffset
  // );
  section1.scrollIntoView({ behavior: "smooth" });
});
// capturing and bubbling phase

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomNum = () =>
  `rgb(${randInt(0, 255)},${randInt(0, 255)},${randInt(0, 255)})`;

console.log(randomNum(0, 255));

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomNum();
  console.log("LINK", e.target, e.currentTarget);
  // e.stopPropagation();
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomNum();
  console.log("CONTAINER", e.target, e.currentTarget);
});
document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomNum();
  console.log("NAV", e.target, e.currentTarget);
});

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);
document.querySelector("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

// creating
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  'we use cookies for different purpose <button class="btn"> Got it </button>';
// header.append(message);
header.prepend(message);

// header.append(message);
header.append(message.cloneNode(true));
// header.after(message);
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  message.remove();
});
//styles
message.style.backgroundColor = "red";
message.style.width = "120%";
console.log(message.style.height);
console.log(message.style.color);
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).height);
// attributes
document.documentElement.style.setProperty("--color-primary", "orangered");
console.log(logo.src);
console.log(logo.getAttribute("src"));
console.log(logo.alt);
logo.alt = "new logo";
console.log(logo.designer);
console.log(logo.getAttribute("designer"));
logo.setAttribute("new", "one");
const linkCheck = document.querySelector(".nav__link");
console.log(linkCheck.href);
console.log(linkCheck.getAttribute("href"));
console.log(logo.dataset.versionNumber);
