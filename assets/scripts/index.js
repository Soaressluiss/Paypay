
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