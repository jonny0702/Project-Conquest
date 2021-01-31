/**Hamburguer-menu-button*/

const menuButton = document.querySelector(".menu-btn")

const menu = document.querySelector(".nav-menu");

const display = document.querySelector('.nav-switch')

const links = document.querySelectorAll('.nav-menu')

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    display.classList.toggle('display')
})

const nav = document.querySelectorAll('.nav-switch .nav-menu li a')

const navBg = document.getElementById('nav-bg')

nav.forEach((n) => {
    n.addEventListener('mouseover', () => {
        // console.log(n)
        navBg.innerHTML = n.textContent
    })
    n.addEventListener('mouseout', () => {
        navBg.innerHTML = ''
    })
})