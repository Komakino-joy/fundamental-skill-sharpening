const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Toggle Between Light and Dark Mode
function toggleMode(bg1, bg2, text, icon1, icon2, mode) {
    nav.style.backgroundColor = `${bg1}`;
    textBox.style.backgroundColor = `${bg2}`;
    toggleIcon.children[0].textContent = `${text}`;
    toggleIcon.children[1].classList.replace(`${icon1}`, `${icon2}`);
    image1.src = `./img/undraw_proud_coder_${mode}.svg`;
    image2.src = `./img/undraw_feeling_proud_${mode}.svg`;
    image3.src = `./img/undraw_conceptual_idea_${mode}.svg`;
};

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleMode('rgb(0 0 0 / 50%)', 'rgb( 255 255 255 / 50%)', 'Dark Mode', 'fa-sun', 'fa-moon', 'dark' );
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleMode('rgb( 255 255 255 / 50%)', 'rgb(0 0 0 / 50%)', 'Light Mode', 'fa-moon', 'fa-sun', 'light' );
    }
};

// Event listener
toggleSwitch.addEventListener('change', switchTheme);

//  Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleMode('rgb(0 0 0 / 50%)', 'rgb( 255 255 255 / 50%)', 'Dark Mode', 'fa-sun', 'fa-moon', 'dark' );
    }
}