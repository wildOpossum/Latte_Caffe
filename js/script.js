'use strict';

const iconMenu = document.querySelector('.icon-menu');
const headerMenu = document.querySelector('.header__menu');

iconMenu.addEventListener('click', (event) => {
    iconMenu.classList.toggle('menu-active');
    headerMenu.classList.toggle('menu-active');
    document.querySelector('body').classList.toggle('lock');
});

const tabContent = document.querySelectorAll('.carta-menu-page__item');
const tabsButton = document.querySelectorAll('.oreder-menu__item');
const tabsParents = document.querySelector('.menu-page__order');

function hideTabs(){
    tabContent.forEach(item => {
        item.style.display = 'none';
    });

    tabsButton.forEach(item => {
        item.classList.remove('active');
    });
}
function showTabs(i){
    tabContent[i].style.display = 'block';
    tabsButton[i].classList.add('active');
}

tabsParents.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('oreder-menu__item')){
        tabsButton.forEach((item, i)=> {
            if(event.target == item){
                hideTabs();
                showTabs(i);
            }
        });
    }
});
hideTabs();
showTabs(0);
