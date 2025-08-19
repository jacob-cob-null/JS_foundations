function sleeperV1(ms, msg, times) {

    return myPromise = new Promise(resolve => {
        
        let count = 0
        let counter = setInterval(() => {

            count++
             console.log(`${msg} was invoked ${count} every ${ms}ms`)
            if(count === times) {
                clearInterval(counter)
                console.log("counter finished")
                resolve()
            }
        },ms)
    })
}

async function sleeperV2(ms, times) {
    for(let i = 0; i <= times; i++) {
       await defineSleep(ms)
       console.log(`Ticking sleeper for ${i} times`)
    }
}
function defineSleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}
async function init() {
    await sleeperV1(1200, "Invocation!", 10)
    await sleeperV2(700, 10)
}
init()