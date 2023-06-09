
// Mostra o botão de ScrollToTop

const scrollBtn = document.querySelector('.fa-circle-arrow-up');

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
}

window.onscroll = function () { scroll() };

// Lógica por trás do botão 

scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


//  Lógica do Menu hamburguer

const menuBar = document.querySelector('.fa-bars-staggered')
const menuClose = document.querySelector('.fa-x')
const NavBar = document.querySelector('.navbar-links')

menuBar.addEventListener('click', () => {
    NavBar.classList.toggle('menuResponsive')
    NavBar.classList.remove('navbar-links')
})

menuClose.addEventListener('click', () => {
    NavBar.classList.add('navbar-links')
    NavBar.classList.toggle('menuResponsive')
})


// Animações 

AOS.init({
    delay: 500,
    duration: 1000,
    easing: 'ease',
    once: true,
    mirror: false
});

// Animação de Pre Loading

const loading = document.querySelector('.preLoading')

window.addEventListener('load', () => {
    setTimeout(() => {
        loading.style.display = 'none'
    }, 2500)
})