document.addEventListener("DOMContentLoaded", function() {
  const menuButton = document.querySelector(".header__menu-button");
  const menu = document.querySelector(".header__menu");

  menuButton.addEventListener("click", function() {
      menu.classList.toggle("open");
  });
});