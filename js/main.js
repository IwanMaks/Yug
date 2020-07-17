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
const cardForage = document.querySelector('.card-forage');
const modal = document.querySelector('.modal');

window.addEventListener('scroll', () => { 
    console.log(pageYOffset);
    if(pageYOffset >= 50 && screen.width > 768){
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
});

