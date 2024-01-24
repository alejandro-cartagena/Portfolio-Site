const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')
const header = document.querySelector('header')
const burgerMenu = document.querySelector('.nav-toggle')

let isBurgerMenuOpen = false

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.classList.add("change")
    }
    else {
        header.classList.remove("change")
    }
    
})



