"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScroll = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

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

btnScroll.addEventListener("click", function (e) {
  // const getCords = section1.getBoundingClientRect();
  // console.log(getCords);
  // console.log(e.target.getBoundingClientRect());
  // console.log("Current play set (X/Y)", window.pageXOffset, window.pageYOffset);
  // Old method
  //   "height/width port",
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
  // window.scrollTo(
  //   getCords.left + window.pageXOffset,
  //   getCords.top + window.pageYOffset
  // );
  section1.scrollIntoView({ behavior: "smooth" });
  console.log("it is working");
});

// Page navigation method # 1

// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const pathForAll = this.getAttribute("href");
//     console.log(`href is here: ${pathForAll}`);
//     document.querySelector(pathForAll).scrollIntoView({ behavior: "smooth" });
//   });
// });

// Page navigation method # 2 using Event delegation.
// Add event listener to common parent element
// Determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const pathForAll = e.target.getAttribute("href");
    console.log(`href is here: ${pathForAll}`);
    document.querySelector(pathForAll).scrollIntoView({ behavior: "smooth" });
  }
});

// DOM traversing
const h1 = document.querySelector("h1");
// going downwards : child
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";
// going upwards : parent
console.log(h1.parentNode);
console.log(h1.parentElement);
h1.closest(".header").style.background = "var(--gradient-secondary)";
// going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.previousSibling);
console.log(h1.nextSibling);
// capturing and bubbling phase

// const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// const randomNum = () =>
//   `rgb(${randInt(0, 255)},${randInt(0, 255)},${randInt(0, 255)})`;

// console.log(randomNum(0, 255));

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomNum();
//   console.log("LINK", e.target, e.currentTarget);
//   // e.stopPropagation();
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomNum();
//   console.log("CONTAINER", e.target, e.currentTarget);
// });
// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomNum();
//   console.log("NAV", e.target, e.currentTarget);
// });

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// const header = document.querySelector(".header");
// const allSections = document.querySelectorAll(".section");
// console.log(allSections);
// document.querySelector("section--1");
// const allButtons = document.getElementsByTagName("button");
// console.log(allButtons);

// creating
// const message = document.createElement("div");
// message.classList.add("cookie-message");
// message.innerHTML =
//   'we use cookies for different purpose <button class="btn"> Got it </button>';
// // header.append(message);
// header.prepend(message);

// // header.append(message);
// header.append(message.cloneNode(true));
// // header.after(message);
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   message.remove();
// });
// //styles
// message.style.backgroundColor = "red";
// message.style.width = "120%";
// console.log(message.style.height);
// console.log(message.style.color);
// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message).height);
// // attributes
// document.documentElement.style.setProperty("--color-primary", "orangered");
// console.log(logo.src);
// console.log(logo.getAttribute("src"));
// console.log(logo.alt);
// logo.alt = "new logo";
// console.log(logo.designer);
// console.log(logo.getAttribute("designer"));
// logo.setAttribute("new", "one");
// const linkCheck = document.querySelector(".nav__link");
// console.log(linkCheck.href);
// console.log(linkCheck.getAttribute("href"));
// console.log(logo.dataset.versionNumber);
