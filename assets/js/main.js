// ==== Menu Toggle ==== //
function toggleMenu(){
    const menutoggle = document.querySelector('.menu__toggle');
    const nav = document.querySelector('.nav__menu');
    menutoggle.classList.toggle('active');
    nav.classList.toggle('active');
}




// ===== Change Color of navitation bar when triggered ==== //
window.addEventListener('scroll', function(){
    const header =document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);

});