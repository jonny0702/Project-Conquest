const slider = document.querySelector("#slider")
let sliderSection = document.querySelectorAll('.slider-section')
let lastImage = sliderSection[sliderSection.length - 1]

const btnLeft = document.getElementById('btn-left')
const btnRight = document.getElementById('btn-right')

slider.insertAdjacentElement('afterbegin', lastImage)

btnRight.addEventListener('click', next = () => {
    let FirstImage = document.querySelectorAll('.slider-section')[0]
        // console.log(FirstImage)
    slider.style.marginLeft = "-200%"
    slider.style.transition = "all 0.5s"
    setTimeout(() => {
        slider.style.transition = 'none'
        slider.insertAdjacentElement('beforeend', FirstImage)
        slider.style.marginLeft = '-100%'
    }, 500)
})

btnLeft.addEventListener('click', () => {
    let sliderSection = document.querySelectorAll('.slider-section')
    let lastImage = sliderSection[sliderSection.length - 1]
        // console.log(FirstImage)
    slider.style.marginLeft = "0%"
    slider.style.transition = "all 0.5s"
    setTimeout(() => {
        slider.style.transition = 'none'
        slider.insertAdjacentElement('afterbegin', lastImage)
        slider.style.marginLeft = '-100%'
    }, 500)
})

setInterval(() => {
    next()
}, 5000);