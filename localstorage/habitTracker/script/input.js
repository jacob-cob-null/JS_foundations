import { habitHandler } from "./habitObject.js";

const habitHandlers = habitHandler()

export function initEvent() {
    const form = document.getElementById('form')
    const titleInput = document.getElementById('title')

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let title = titleInput.ariaValueMax.trim()

        if (title === "") return

        habitHa
    })
}