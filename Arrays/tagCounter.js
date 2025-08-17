'use strict'

//input object
function obj(){
    let obj = []
    return {
        newObj: (title, tags) => {
            obj.push({title: title, tags: tags})
        },
        getArr: () => [...obj]
    }
}
let handler = obj()
//input and return arr

function getInput() {
for(let i = 0; i < 2; i++) {

    let title = prompt("Enter Title: ")
    let tags = prompt("Enter Tags (Separate by Comma): ")
    
    try{
let tagsArr = tags.split(",").map(tags => tags.trim())
        handler.newObj(title, tagsArr)
    } catch(err){
        alert(err)
    }
}
}
//aggregate
function aggregate(arr){
    return arr.reduce((acc, item) => {
        item.tags.forEach(tag => {
            acc[tag] = (acc[tag] || 0) + 1
        })
        return acc
    }, {})
}


getInput()
let objects = handler.getArr()
objects.forEach(item => alert(`${item.title} with the tags ${item.tags}`))
let aggregatedArr = aggregate(objects)
alert(JSON.stringify(aggregatedArr, null, 2))