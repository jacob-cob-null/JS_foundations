//get joke json
export async function getJoke() {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke")
    const jokeObj = await res.json()

    const setup = jokeObj.setup
    const punchline = jokeObj.punchline

    console.log(setup, punchline)
    return {
        setup,
        punchline
    }
}