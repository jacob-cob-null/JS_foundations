'use strict'

//input grades
function inputGrades(){
    let grades = []
    let input

    do{
        input = prompt("Input Grade:") 

        if(input == 'n' || input == 'N') break
        if (input === null) break

            
        if(validate(input)){
            //coerce to number
            grades.push(parseInt(input))
        } else {
            alert("Input valid numbers!")
        }
    } while(true)
        alert(grades)
        return grades
}

//get multiplier and map
function multiplier(arr){
    let multiplier = prompt("Enter Multiplier: ")

    if(validate(multiplier)){
        let newArr = arr.map(item => item * multiplier)
        return newArr
    } else {
        alert("Enter valid input")
    }
}


//get failing threshold and return filtered grades
function threshold(arr) {
    let threshold = prompt("Enter Passing Grade")
    if(validate(threshold)){
        let newArr = arr.filter(item => item >= threshold)
        return newArr
    } else {
        alert("Enter valid input")
    }

}
//find average reduce divided by length
function getAverage(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0) / arr.length
}

let gradesArr = inputGrades()
//scale grades
let scaledGrades = multiplier(gradesArr)
alert(scaledGrades)
//return passing only
let filtered = threshold(scaledGrades)
alert(filtered)
alert(getAverage(filtered))

//validate input, must always be number
function validate(input) {
    return !isNaN(Number(input)) && input !== ''
}
