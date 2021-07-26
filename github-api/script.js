const API_URL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUser(username) {

    try {
        const { data } = await axios.get(API_URL + username);
        createUserCard(data);
        getRepos(username);
    } catch (error) {
        if (error.response.status === 404){
            createErrorCard('No profile with this username was found.');
        }
    }
}

async function getRepos(username) {
    try {
        const { data } = await axios.get(API_URL + username + '/repos?sort=created');
        addReposToCard(data);
        
    } catch (error) {
            createErrorCard('Problem fetching repos.');
    }
}

function createUserCard(user) {

    const { avatar_url, name, bio, followers, following, public_repos } = user;

    const cardHTML = `
    <div class="card">
        <div>
            <img src="${avatar_url}" alt="${name}" class="avatar">
        </div>
        <div class="user-info">
            <div>
                <h2>${name}</h2>
                <p>${bio}</p>
            </div>

            <ul>
                <li>${followers}<strong> Followers &nbsp; </strong></li>
                <li>${following}<strong> Following &nbsp;</strong></li>
                <li>${public_repos}<strong> Repos  &nbsp;</strong></li>
            </ul>

            <div id="repos"> </div>
        </div>
    </div>
    `;

    main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `;

    main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos');

    repos
    .slice(0,10)
    .forEach(repo => {
        const repoEl = document.createElement('a');
        repoEl.classList.add('repo');
        repoEl.href = repo.html_url;
        repoEl.target = '_blank';
        repoEl.textContent = repo.name;

        reposEl.appendChild(repoEl);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = search.value;

    if (user) {
        getUser(user);

        search.value = '';
    }
})