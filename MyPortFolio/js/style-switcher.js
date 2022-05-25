// Toggler Style Switcher
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide Style-Switcher on Scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open"); //CSS style-switcher open class
  }
});

// Theme Color
const alternateStyle = document.querySelectorAll(".alternate-style"); //HTML PageTop Link
function setActiveStyle(color) {
  localStorage.setItem("color", color);
  changeColor();
}
function changeColor() {
  alternateStyle.forEach((style) => {
    if (localStorage.getItem("color") === style.getAttribute("title")) {
      //HTML PageTop Link "title"
      style.removeAttribute("disabled");
    } else {
      style.removeAttribute("disable", "true");
    }
  });
}

// Time Light and Dark Mode
const dayNight = document.querySelector(".day-night"); //HTML day-night class
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun"); //HTML day-night icon
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
