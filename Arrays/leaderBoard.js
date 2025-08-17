'use strict'
function users(){
    let userCollection = []
    return {
        newUser: (name, score) => {
            userCollection.push({name: name, score: score})
        },
        getUsers: () => [...userCollection]
    }
}
let handler = users()
handler.newUser("Jacob", 10)
handler.newUser("Hacob", 13)
handler.newUser("Yob", 12)
handler.newUser("cob", 15)
handler.newUser("Hobb", 17)
handler.newUser("yac", 12)
handler.newUser("joc", 18)
handler.newUser("hac", 11)
handler.newUser("boy", 20)

let userArr = handler.getUsers()
printArr(userArr)

let sortedArr = sortArr(userArr)
let topItems = topArr(sortedArr, 5)

console.log("/nShowing top items:")
printArr(topItems)

function topArr(arr, size) {
    return arr.slice(0, size)
}

function sortArr(arr) {
    return arr.sort((a,b) => b.score - a.score)
}

function printArr(arr){
    arr.forEach(user => {
    console.log(`User: ${user.name}, score: ${user.score} `)
});
}