const nameEl = document.getElementById('name');
const date = document.getElementById('date');
const title = document.getElementById('title');
const header = document.getElementById('header');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bgs_text = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 3000);

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1626934328837-b0d2f1387222?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=332&q=80" alt="" />';

    title.textContent = 'Lorem ipsum dolor sit amet.';
    excerpt.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, voluptate!';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">';
    nameEl.textContent = 'John Doe';
    date.textContent = 'July 08, 2021'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bgs_text.forEach(bg => bg.classList.remove('animated-bg-text'));
}