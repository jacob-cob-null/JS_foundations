//get country information
export async function fetchCountry(name) {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
        const country = await res.json()

        // country information
        const countryImage = country[0].flags.png
        const countryName = country[0].name.common;
        const region = country[0].continents[0]
        const capital = country[0].capital[0]
        const population = country[0].population

        console.log("Country Name:", countryName);
        console.log("Flag URL:", countryImage);
        console.log("Region:", region);
        console.log("Capital:", capital);
        console.log("Population:", population.toLocaleString());

        return {
            countryImage,
            countryName,
            region,
            capital,
            population
        }
    }
    catch (error) {
        alert(error)
    }


}