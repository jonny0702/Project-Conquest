// Photos work
const work = document.querySelector('.work')
const photos = work.querySelectorAll('div')


photos.forEach((p) => {
    p.addEventListener("mouseover", () => {
        p.classList.add("change");
        //console.log(p)
    })
    p.addEventListener("mouseout", () => {
        p.classList.remove("change");
        //console.log(p)
    })
})


//Sticky nav 

const menuNav = document.querySelector('.nav-main')
const section1 = document.querySelector('.section1')
const section2 = document.querySelector('.section2')
const section3 = document.querySelector('.section3')

window.addEventListener('scroll', () => {
    menuNav.classList.toggle('sticky', window.scrollY > 0)
    menuNav.firstElementChild.classList.toggle('highlight', window.scrollY > 0 & window.scrollY < 632)
    section1.classList.toggle('highlight', window.scrollY >= 632 & window.scrollY < 3100)
    section2.classList.toggle('highlight', window.scrollY >= 3100 & window.scrollY < 3461)
    section3.classList.toggle('highlight', window.scrollY > 3461)
        //console.log('me scrolleaste!!!')
})


// Nav Links & highlights
const bgchange = document.querySelector('body')

window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    bgchange.classList.toggle('bg-change', scrollY > 3100)
})