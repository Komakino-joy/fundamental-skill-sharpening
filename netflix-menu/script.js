const nav = document.querySelectorAll('.nav');
const open_btn = document.querySelector('.open-btn');
const close_btn = document.querySelector('.close-btn');

open_btn.addEventListener('click', () => {
    nav.forEach(element =>  element.classList.add('visible'));
})

close_btn.addEventListener('click', () => {
    nav.forEach(element =>  element.classList.remove('visible'));
})