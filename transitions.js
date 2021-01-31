// TRANSITIONS FOR THE WEBSITE LINKS

window.onload = () => {
    const pageTrans = document.querySelector('.transition')

    const links = document.querySelectorAll('a')

    setTimeout(() => {
        pageTrans.classList.remove('is-active');
    }, 500)

    links.forEach((a) => {
        a.addEventListener('click', (e) => {
            e.preventDefault()
            const target = e.target.href;
            console.log(target)

            pageTrans.classList.add('is-active')

            setTimeout(() => {
                window.location.href = target
            }, 500)

            display.classList.add('display')
        })
    })
}