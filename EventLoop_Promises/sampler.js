function sayName(){
    timeout(() => {
        console.log("Finally")
    })
    console.log("Still gonna run first")
}
function timeout(callback) {
    setTimeout(() => {
        callback()
    }, 2000)
}

console.log("1")
setTimeout(() => {
    console.log("2")
}, 0)
console.log("4")
setTimeout(() => {
    console.log("3")
}, 100)
