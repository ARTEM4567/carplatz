let mobileMenuButton = document.querySelector('.mobile-menu-button');
let mobileMenu = document.querySelector('.mobile-menu');
let mobileMenuBool = false;

mobileMenuButton.addEventListener('click', () => {
    mobileMenuButton.classList.toggle('mobile-menu-button-active');
    mobileMenu.classList.toggle('mobile-menu-active');
})