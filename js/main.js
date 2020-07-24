'use strict';

const header = document.querySelector('.header-container');
const logo = document.querySelector('.logo');
const logoPhone = document.querySelector('.logo-phone');
const logoText = document.querySelector('.logo-text');
const logoName = document.querySelector('.logo-name');
const logoDescription = document.querySelector('.logo-description');
const socialLink = document.querySelector('.social-link');

const promoButton = document.querySelector('.promo-button');
const buttonContainer = document.querySelector('.button-container');
const cardForage = document.querySelectorAll('.card-forage');
const modal = document.querySelector('.modal');
//const modalButton = document.querySelector('.modal-button');

const mapLink = document.querySelector('.map-link');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const rightMenu = document.querySelector('.right-menu');
const rightMenuLink = document.querySelectorAll('.right-menu-link');
const modalClose = document.querySelector('.modal-close');
const linkGoods = document.querySelector('.link-goods');

if (screen.width > 780) {
    modalClose.style.display = 'none';
    //modalMapContainer.style.height = '337px'
} else {
    modalClose.style.display = 'block';
}

window.addEventListener('scroll', () => { 
    if (screen.width > 780) {
            if(pageYOffset >= 50){
            header.classList.add('white');
            logo.classList.add('logo-mini');
            logoText.style.display = 'flex';
            logoText.classList.add('flex');
            logoPhone.classList.add('none-width');
            logoPhone.style.display = 'none';
            logoDescription.style.fontSize = '28px';
            logoDescription.style.fontWeight = '300';
            logoDescription.style.lineHeight = '33px';
            logoDescription.style.marginLeft = '0';
            logoDescription.style.marginTop = '0';
        } else {
            header.classList.remove('white');
            logo.classList.remove('logo-mini');
            logoText.style.display = 'block';
            logoText.classList.remove('flex');
            logoPhone.classList.remove('none-width');
            logoPhone.style.display = 'block';
            logoDescription.style.fontSize = '14px';
            logoDescription.style.fontWeight = 'normal';
            logoDescription.style.lineHeight = '16px';
            logoDescription.style.marginLeft = '2px';
            logoDescription.style.marginTop = '-10px'
        }
    }
    
});

promoButton.addEventListener('click', () => {
    console.log('daun');
    modal.style.display = 'flex';
});

//modalButton.addEventListener('click', () => {
//    modal.style.display = 'none';
//});

document.addEventListener('click', event => {
    if (event.target.classList.contains('modal')) {
        modal.style.display = 'none';
    }
});

buttonContainer.addEventListener('click', () => {
    modal.style.display = 'flex'; 
});

for (let i = 0; i<cardForage.length; i++) {
    cardForage[i].addEventListener('click', () => {
        modal.style.display = 'flex'; 
    });
}

mapLink.addEventListener('click', () => {
    modal.style.display = 'none';
});

hamburger.addEventListener('click', () => {
    rightMenu.classList.add('animate__bounceInRight');
    rightMenu.style.display = 'block';
    rightMenu.classList.remove('animate__bounceOutRight');
});

close.addEventListener('click', () => {
    rightMenu.classList.add('animate__bounceOutRight');
    rightMenu.classList.remove('animate__bounceInRight');
    //rightMenu.style.display = 'none';
});

for (let i = 0; i < rightMenuLink.length; i++) {
    rightMenuLink[i].addEventListener('click' , () => {
        rightMenu.style.display = 'none';
    });
}

linkGoods.addEventListener('click', () => {
    
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});