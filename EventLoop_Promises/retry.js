function retryMatching(ceil, delay, attempt = 1){
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
        let num1 = randomizer(ceil)
        let num2 = randomizer(ceil)
        if(num1 === num2){
            resolve("Values are finally equal!")
        }
        else {
            console.log(`${num1} and ${num2} are not equal! try again for ${attempt} times`)
            setTimeout(() => {
                retryMatching(ceil, delay, attempt + 1)
                reject("Try again!")
            }, delay)
        }
        })
    })
    myPromise
        .then(res => console.log(res))
        .catch(err => console.log(err))
}
function randomizer(ceil) {
    return Math.floor(Math.random() * ceil)
}
retryMatching(100, 100)