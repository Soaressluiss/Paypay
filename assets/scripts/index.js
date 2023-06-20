
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
const navbarAncoras = document.querySelector('.navbar-links')
const menuResponsiveElements = document.querySelectorAll('.navbar-links li')
const menuResponsive = document.querySelector('.navbar-links')


// ativa o menu mobile
menuBar.addEventListener('click', () => {
    navbarAncoras.classList.toggle('menuResponsive')
    navbarAncoras.classList.remove('navbar-links')
})

// oculta o menu mobile
menuClose.addEventListener('click', () => {
    navbarAncoras.classList.add('navbar-links')
    navbarAncoras.classList.toggle('menuResponsive')
})

// oculta o menu moblie ao clicar em uma ancora 
menuResponsiveElements.forEach((item)=>{
    item.addEventListener('click', ()=>{
        navbarAncoras.classList.remove('menuResponsive')
        navbarAncoras.classList.add('navbar-links')   
    })
        
})

// oculta o menu mobile ao clicar fora dele 
menuResponsive.addEventListener('click', function(e){
    if(e.target === this ){
        navbarAncoras.classList.remove('menuResponsive')
        navbarAncoras.classList.add('navbar-links')
    }
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

// Scroll position

const handleScrollLogger = () =>{
    const scrollRegister = document.querySelector('.scrollLogger');
    
    if(scrollRegister){
        window.addEventListener('scroll', ()=>{
            const pageHeight =  document.body.clientHeight - window.innerHeight;
            const scrollPage =  (window.scrollY /pageHeight) * 100;
            scrollRegister.style.width = `${scrollPage}%`;
        })
    }
}

handleScrollLogger();