import { habitHandler } from "./habitObject.js";


export function initEvent() {
    const form = document.getElementById('form')
    const titleInput = document.getElementById('title')

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let title = titleInput.value.trim()

        if (title === "") return

        //add habit
        habitHandler.newHabit(title)
        titleInput.value = ""
    })
}