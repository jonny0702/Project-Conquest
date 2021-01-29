const button = document.getElementById('btn-inside')
const btn = document.getElementById('btn-outside')

button.addEventListener('click', (a) => {
    button.classList.toggle('expand')
    btn.classList.toggle('inside')
        //console.log('hola')
})

const nav = document.querySelectorAll('.nav-main li a')

const navBg = document.getElementById('nav-bg')

nav.forEach((n) => {
    n.addEventListener('mouseover', () => {
        console.log(n)
        navBg.innerHTML = n.textContent
    })
    n.addEventListener('mouseout', () => {
        navBg.innerHTML = ''
    })
})

const slide = document.querySelector('.container')

nav.forEach((n) => {
    n.addEventListener('click', () => {
        slide.classList.add('.loadingpage')
    })
})