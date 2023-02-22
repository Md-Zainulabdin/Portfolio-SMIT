const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector(".nav-lists");

hamburger.addEventListener(
    'click', () => {
        navbar.classList.toggle('active')
    }
)