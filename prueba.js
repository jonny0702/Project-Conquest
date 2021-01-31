const menuButton = document.querySelector(".menu-btn")

const menu = document.querySelector(".nav-menu");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
})