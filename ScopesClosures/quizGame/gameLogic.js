import { getQuestions, prepQuestions } from "./questions.js";

export async function gameLoop(component = []){
    const { questionNumber, score, question, choices } = component //gets all components

    let questions = await prepQuestions() //gets all questions

    //make user object with private score
    //iterate question
    //add listener to each object
    //take note of current correct answer
    //validate if correct answer is equal to chosen answer via data attribute
    //increment private score if right, do nothing otherwise
    //update components e.g { questionNumber, score, question, choices }
    //iterate until finished
    
}   
