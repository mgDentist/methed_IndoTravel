const header = document.querySelector('.header');
const headerBtn = header.querySelector('.header__menu-button');
const headerMenu = header.querySelector('.header__menu');
const headerItems = header.querySelectorAll('.header__item');

headerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    headerMenu.classList.toggle('header__menu_active');
});

document.addEventListener('click', e => {
    const isHeaderItem = Array.from(headerItems).some(
        elem => elem.contains(e.target));
    if ((!headerMenu.contains(e.target) && headerMenu.classList.contains('header__menu_active')) || isHeaderItem) {
        headerMenu.classList.remove('header__menu_active');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && 
        headerMenu.classList.contains('header__menu_active')) {
        headerMenu.classList.remove('header__menu_active');
        }
});
