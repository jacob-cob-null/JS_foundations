import { getJoke } from "./fetchJoke.js"

//get destructured joke elements and render, show punchline after 1 second
export async function renderJoke(){
    const setupText = document.querySelector(".setup")
    const punchlineText = document.querySelector(".punchline")

    //clear text
    setupText.textContent = ''
    punchlineText.textContent = ''

    const {setup, punchline} = await getJoke()

    setupText.textContent = setup

    setTimeout(() => {
        punchlineText.textContent = punchline
    }, 1000)

}