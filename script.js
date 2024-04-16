"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScroll = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");

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
  // Method # 1 (practice purpose)
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

// Building a Tabbed component
const tabs = document.querySelectorAll(".operations__tab");
const container = document.querySelector(".operations__tab-container");
const content = document.querySelectorAll(".operations__content");

container.addEventListener("click", (e) => {
  const clicked = e.target.closest(".operations__tab");

  console.log(clicked);
  if (!clicked) return;
  tabs.forEach((t) => {
    t.classList.remove("operations__tab--active");
  });
  content.forEach((c) => {
    c.classList.remove("operations__content--active");
  });
  clicked.classList.add("operations__tab--active");
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");

  console.log(clicked.dataset.tab);
});
// Passing arguements to event handlers
const handlerfunc = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener("mouseover", function (e) {
  handlerfunc(e, 0.5);
});
nav.addEventListener("mouseout", function (e) {
  handlerfunc(e, 1);
});
// 2nd method
// nav.addEventListener("mouseover", handlerfunc.bind(0.5));
// nav.addEventListener("mouseout", handlerfunc.bind(1));

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
// h1.closest(".header").style.background = "var(--gradient-secondary)";

// going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.previousSibling);
console.log(h1.nextSibling);
