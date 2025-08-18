'use strict'

//handler
function items(){
    let itemCollection = []
    return {
        newItem: (name) => {
            itemCollection.push(name)
        },
        getArr: () => [...itemCollection]
    }
}
let handler = items()
handler.newItem("Spinach")
handler.newItem("Bell Pepper")
handler.newItem("Onion")
handler.newItem("Garlic")
handler.newItem("Squash")
handler.newItem("Leek")
handler.newItem("Potato")
handler.newItem("Gourd")

let itemArr = handler.getArr()
let foundItem = findItem("Spinach", itemArr)
checkExisting("Spinachd", itemArr)

//find
function findItem(name, arr) {

   let foundItem = arr.find(item => item == name)
   if (typeof foundItem !== "undefined") {
    console.log(`Item: ${name} was found on array of Items`)
   } else {
console.log(`No such item found on array of Items`)
   }
}
//exists
function checkExisting(item, arr) {
    const found = (name) => name === item
    console.log(arr.some(found))
}

