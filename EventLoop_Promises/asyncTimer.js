let increment = 0

function intervalTimer(){
    console.log("Initialization starting")
    console.log("Initialization Ending")
    console.log("Iteration starting")

    let interval = setInterval(() => {

        if(increment === 10){
            clearInterval(interval)
            console.log("Iteration finished!")
        }
        else {
            timer()
            increment++
        }
    }, 1000)
}
function timer(){
    setTimeout(() => {
        display(`Greeting from timers for ${increment} times `)
    },1000)
}
function display(message){
    console.log(message)
}

intervalTimer()