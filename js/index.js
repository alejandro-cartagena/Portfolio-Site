const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')
const header = document.querySelector("header")

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

document.addEventListener('click', function(event) {
    // Check if the clicked element is not a portfolio item
    if (!event.target.closest('.portfolio__item')) {
      // Remove focus from all portfolio items
      document.querySelectorAll('.portfolio__item').forEach(function(item) {
        item.blur();
      });
    }
  });
