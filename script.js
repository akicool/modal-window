let modal__close = document.querySelector('.modal__close');
let modal__overlay = document.querySelector('.modal__overlay');
let button = document.querySelector('.button');
let modal = document.querySelector('.modal');

modal__close.onclick = function() {
    modal.classList.remove('active');
};

button.onclick = function() {
    modal.classList.add('active');
};

modal__overlay.onclick = function() {
    modal.classList.remove('active');
};

