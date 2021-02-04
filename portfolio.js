// Photos work
const work = document.querySelector('.work')
const photos = work.querySelectorAll('div')


photos.forEach((p) => {
    p.addEventListener("mouseover", (a) => {
        p.classList.add("change");
        console.log(p)
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
    section1.classList.toggle('highlight', window.scrollY > 0)
        // console.log('me scrolleaste!!!')
})