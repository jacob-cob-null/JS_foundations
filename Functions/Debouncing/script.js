const button = document.getElementById('button')
const message = document.getElementById('message')
let counter = 0
let timeout;

const greet = (target) => {
    target.textContent = `Greetings! (${counter})`
    ++counter;
}

function debouncer(fn, duration) {
    clearTimeout(timeout)
    timeout = setTimeout(fn, duration)
}

button.addEventListener('click', () => {

    debouncer(() => greet(message), 2000)
})
