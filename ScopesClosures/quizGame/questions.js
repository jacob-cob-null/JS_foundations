export async function getQuestions() {
    let questions = await fetch('https://opentdb.com/api.php?amount=10&category=18&type=multiple')
    let data = await questions.json()
    console.log(data.results)
    return data.results
}

//format questions
export async function prepQuestions() {

    //get fetch
    let questions = await getQuestions()

    //format object
    let formattedQuestions = questions.map(q => ({
        question: q.question,
        correct_answer: q.correct_answer,
        incorrect_answers: q.incorrect_answers
    }));

    //return object array
    return formattedQuestions
}