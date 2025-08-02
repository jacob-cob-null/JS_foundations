"use strict"
//capitalize
const capitalize = (word) => {
    if (!validateWord(word)) {
        return;
    }
    let modifiedWord = toFormat(word)
    let toCapital = modifiedWord[0]
    let capitalized = toCapital[0].toUpperCase() + modifiedWord[0].slice(1)

    return capitalized + " " + modifiedWord.slice(1).join(" ")
}
//Title Case
const titleCase = (word) => {
    if (!validateWord(word)) {
        return;
    }
    let modifiedWord = toFormat(word)
    let newArr = modifiedWord.map(word =>
        word[0].toUpperCase() + word.slice(1)
    );
    return newArr.join(" ")
}

//camelCase
const camelCase = (word) => {
    if (!validateWord(word)) {
        return;
    }
    let modifiedWord = toFormat(word)
    if (modifiedWord.length < 1) {
        return String(modifiedWord)
    }
    let firstWord = modifiedWord[0]
    let remainingWords = modifiedWord.slice(1)
    let newArr = remainingWords.map(word =>
        word[0].toUpperCase() + word.slice(1)
    );
    return firstWord + newArr.join("")
}

//snake_case
const snakeCase = (word) => {
    if (!validateWord(word)) {
        return;
    }
    let modifiedWord = toFormat(word)
    let newArr = modifiedWord.map(word =>
        word.toLowerCase()
    );
    return newArr.join("_")
}
//kebab-case
const kebabCase = (word) => {
    if (!validateWord(word)) {
        return;
    }
    let modifiedWord = toFormat(word)
    let newArr = modifiedWord.map(word =>
        word.toLowerCase()
    );
    return newArr.join("-")
}
//trim
const trimWord = (word) => {
    if (!validateWord(word)) {
        return;
    }
    return word.trim()
}
//removePunctuation
const removePunctuation = (word) => {
    if (!validateWord(word)) {
        return;
    }
    const punctuation = [
        ".", ",", "!", "?", ":", ";",
        "-", "_", "—", "(", ")", "[", "]", "{", "}",
        "'", '"', "`", "“", "”", "‘", "’",
        "/", "\\", "|", "@", "#", "$", "%", "^", "&", "*", "+", "=", "<", ">", "~"
    ];
    return word.split("").filter(char => !punctuation.includes(char)).join("")
}
//truncate(n)
const truncate = (word, size = 0) => {
    if (!validateWord(word)) {
        return;
    }
    let modifiedWord = toFormat(word)
    let newArr = []
    for (let i = 0; i < size; i++) {
        newArr.push(modifiedWord[i])
    }
    return newArr.join(" ") + "..."
}

//helpers
function validateWord(word) {
    return typeof word === 'string'
}
function toFormat(word) {
    return word.trim().split(" ")
}

console.log(capitalize("this is capitalization"))
console.log(titleCase("this is title case"))
console.log(camelCase("this is camel case"))
console.log(snakeCase("this is Snake case"))
console.log(kebabCase("this is Kebab case"))
console.log(trimWord("  this is trimming  "))
console.log(truncate("Hello, this is long", 10))
console.log(removePunctuation("Hello, world!"))