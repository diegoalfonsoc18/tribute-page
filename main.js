const iconMenu = document.querySelector(".icon-menu");
const menuMobile = document.querySelector(".menu-desktop");

iconMenu.addEventListener("click", toggleicon);

function toggleicon() {
  menuMobile.classList.toggle("inactive");
}
