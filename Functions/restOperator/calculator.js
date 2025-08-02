"use strict"
//sum of numbers
const sum = (...numbers) => {
    if (!validateNum(numbers)) {
        return
    }
    let sum = 0
    numbers.forEach((num) => sum += num)
    return sum
}


//difference of numbers
const dif = (...numbers) => {
    if (!validateNum(numbers)) {
        return
    }
    let first = numbers[0]
    let remaining = numbers.slice(1)
    remaining.forEach((num) => first -= num)
    return first
}


//product of numbers
const prod = (...numbers) => {
    if (!validateNum(numbers)) {
        return
    }
    let product = 1
    numbers.forEach((num) => product *= num)
    return product
}

//divide first number
const quo = (...numbers) => {
    if (!validateNum(numbers)) {
        return
    }
    let first = numbers[0]
    let remaining = numbers.slice(1)
    remaining.forEach((num) => first /= num)
    return first
}


//power
const pow = (base, ...numbers) => {
    if (!validateNum(numbers)) {
        return
    }
    numbers.forEach(num => {
        base = base ** num
    });
    return base
}

//output
console.log(sum(1, 2, 3))
console.log(dif(10, 2, 3))
console.log(prod(2, 3, 4))
console.log(quo(100, 2, 5))
console.log(pow(2, 3, 2))

//helper
function validateNum(num = []) {
    return num.every((item) => typeof item === 'number');
}