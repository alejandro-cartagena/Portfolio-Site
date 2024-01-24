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

burgerMenu.addEventListener('click', () => {
    console.log('Click!!')
    if (isBurgerMenuOpen) {
        isBurgerMenuOpen = !isBurgerMenuOpen
        disableScroll()
    }
    else {
        enableScroll()
    }
})

function disableScroll() {
    const scrollY = window.scrollY;

    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
}

function enableScroll() {
    const scrollY = parseInt(document.body.style.top || '0', 10);
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    
    window.scrollTo(0, scrollY);
}


