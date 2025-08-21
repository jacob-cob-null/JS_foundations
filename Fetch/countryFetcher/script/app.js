import { fetchCountry } from "./fetch.js";
import { getInput } from "./formInput.js";
import { renderCountry } from "./render.js";

document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search')
    const container = document.getElementById('countryContainer')
    // seach for country
    searchBtn.onclick = async () => {
        const country = getInput()
        const countryInfo = await fetchCountry(country)
        container.innerHTML = ''
        renderCountry(countryInfo, container)
    }
})

