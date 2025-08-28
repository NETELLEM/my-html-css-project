// Toggle hamburgermeny
const navToggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".menu");

if(navToggle){
  navToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
    const expanded = navToggle.getAttribute("aria-expanded") === "true" || false;
    navToggle.setAttribute("aria-expanded", !expanded);
  });
}
