const travel = document.querySelector('.travel');
const travelItems = travel.querySelectorAll('.travel__item');
const travelTitles = travel.querySelectorAll('.travel__item-title');
const travelTextWrappers = travel.querySelectorAll('.travel__item-text-wrapper');

let heightWrapper = 0;

travelTextWrappers.forEach(elem => {
    if (heightWrapper < elem.scrollHeight) {
        heightWrapper = elem.scrollHeight
    }
});

travelTitles.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        for (let i = 0; i < travelItems.length; i++) {
            if (index === i) {
                travelTextWrappers[i].style.height =
                    travelItems[i].classList.contains('travel__item_active') ?
                    '' :
                    `${heightWrapper}px`;
                
                travelItems[i].classList.toggle('travel__item_active');
            } else {
                travelTextWrappers[i].style.height = '';

                travelItems[i].classList.remove('travel__item_active');
            }
        }
    });
});
