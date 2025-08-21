
//render country information
export function renderCountry({
    countryImage,
    countryName,
    region,
    capital,
    population
}, mainCont) {
    //container
    const content = document.createElement('div')
    content.classList = 'w-full h-fit flex gap-4 flex-col justify-center items-center'

    //image 
    const image = document.createElement('img')
    image.classList = 'h-fit w-full'
    image.src = countryImage

    //informaton container
    const infoContainer = document.createElement('div')
    infoContainer.classList = 'grid w-full p-2 bg-white rounded-md shadow-md grid-cols-2 grid-rows-2 gap-4 justify-items-start'

    const name = document.createElement('h1')
    name.textContent = `Name: ${countryName}`

    const regionCountry = document.createElement('h1')
    regionCountry.textContent = `Continent: ${region}`

    const capitalCountry = document.createElement('h1')
    capitalCountry.textContent = `Capital: ${capital}`

    const populationCountry = document.createElement('h1')
    populationCountry.textContent = `Population ${population}`

    //append info
    infoContainer.appendChild(name)
    infoContainer.appendChild(regionCountry)
    infoContainer.appendChild(capitalCountry)
    infoContainer.appendChild(populationCountry)

    //append info cont and image
    content.appendChild(image)
    content.appendChild(infoContainer)


    mainCont.appendChild(content)
}