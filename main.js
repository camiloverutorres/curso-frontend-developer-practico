
console.log('hola');


/*Fusión del menú en desktop*/

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

function toggleDesktopMenu() {

    desktopMenu.classList.toggle('inactive');

}

menuEmail.addEventListener('click',toggleDesktopMenu)

/*Fusión del menú en mobile*/

const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

function toggleMobilemenu() {

    mobileMenu.classList.toggle('inactive');

}

burgerMenu.addEventListener('click',toggleMobilemenu);



