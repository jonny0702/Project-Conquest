const button = document.querySelector('.contact-btn')

const contact = document.querySelector('.contact')

const text = document.querySelector('.contact-text .text')

const text1 = document.querySelector('.contact-text .text-1')

button.addEventListener('mouseover', () => {
    contact.classList.add('invert')
    text.classList.add('color-change')
    text1.classList.add('color-change')

})

button.addEventListener('mouseout', () => {
    contact.classList.remove('invert')
    text.classList.remove('color-change')
    text1.classList.remove('color-change')
})

button.addEventListener('click', () => {
    window.scrollY()
})

const eventForms = document.querySelectorAll('.form li')

console.log('eventForms')

// let highlight = eventForms.filter((form)=> form.)


// console.log(eventForms)

// eventForms.forEach((l) => {
//     l.addEventListener('click', () => {
//         l.classList.toggle('animation');
//     })
// })