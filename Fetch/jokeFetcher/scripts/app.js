import { renderJoke } from "./render.js"

//event listener for button
document.addEventListener('DOMContentLoaded', () => {
    const jokeBtn = document.getElementById("getJoke")

    jokeBtn.addEventListener('click', () => {
        renderJoke()
    })
})
