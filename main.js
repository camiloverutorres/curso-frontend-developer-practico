
console.log('hola');

/*Fusión del menú en desktop*/

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

function toggleDesktopMenu() {

    if (!shopMenu.classList.toggle('inactive')) {

        shopMenu.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');

}

menuEmail.addEventListener('click',toggleDesktopMenu)

/*Fusión del menú en mobile*/

const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');



function toggleMobilemenu() {

    if (!shopMenu.classList.toggle('inactive')) {

        shopMenu.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

burgerMenu.addEventListener('click',toggleMobilemenu);

/*carrito de compras*/

const shopIcon = document.querySelector('.navbar-shopping-cart');
const shopMenu = document.querySelector('.product-detail');

function toggleShopMenu() {

    if (!mobileMenu.classList.toggle('inactive')) {

        mobileMenu.classList.add('inactive');
    }

     shopMenu.classList.toggle('inactive');
}


shopIcon.addEventListener('click',toggleShopMenu);

/* cuando le click al shopicon y el mobilemenu está abierto o ¡inactive else add inactive /*
cuando le clink al burgeicon y el si shopmenu está abierto o ¡inactive else add inactive

*/

