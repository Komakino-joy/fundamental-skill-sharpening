const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Hello world',
    "What's up Buttercup?",
    "May the Force be with you.",
    "I want to be forgotten.",
    "Joy Division Rocks.",
    "Starman waiting..."
];

const types = [
    'info',
    'success',
    'error'
]

button.addEventListener('click', () => createNotification());

const createNotification = (message = null, type = null) => {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.classList.add(type ? type : getRandomType());

    notif.textContent = message ? message : getRandomMsg();

    toasts.appendChild(notif);

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

const getRandomMsg = () => {
    return messages[Math.floor(Math.random() * messages.length)];
}

const getRandomType = () => {
    return types[Math.floor(Math.random() * types.length)];
}