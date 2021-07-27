const result = document.getElementById('result');
const filter = document.getElementById('filter');

const API_URL = 'https://randomuser.me/api?results=50';
const listItems = [];

getData();

filter.addEventListener('input', (e) => filterData(e.target.value));

async function getData() {
    const res = await fetch(API_URL);
    const {results} = await res.json();

    // Clear results to remove loading.
    result.innerHTML = '';

    results.forEach(user => {
        const li = document.createElement('li');

        listItems.push(li);

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;

        result.appendChild(li);
    })
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if (item.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    })
}