var themeButton = document.getElementById("themeButton");
var sun = document.querySelector(".sun");
var moon = document.querySelector(".moon");
window.addEventListener("load", function () {
  if (themeButton) {
    var dark =
      (localStorage.getItem("theme") === "dark") ||
      (localStorage.getItem("theme") === null && window.matchMedia("(prefers-color-scheme: dark)").matches);
      if (dark) {
        sun.classList.add("hidden");
      } else {
        moon.classList.add("hidden");
      }
    var elements = document.querySelectorAll(".menu, .tab, .card, body, .sticky, .list");
    Array.from(elements).forEach(element => {
      element.classList.toggle("inverted", dark);
    });
    document.body.style.visibility = 'visible';
    themeButton.addEventListener("click", function () {
      moon.classList.toggle("hidden");
      sun.classList.toggle("hidden");
      var currentTheme = localStorage.getItem("theme");
      var newTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      Array.from(elements).forEach(card => {
        card.classList.toggle("inverted");
      });
    });
  }
});
