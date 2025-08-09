export function initComponents() {
    const questionNumber = document.getElementById('questionNumber')
    const score = document.getElementById('score')
    const question = document.getElementById('question')
    const choices = document.getElementById('choices')

    return {
        questionNumber,
        score,
        question,
        choices
    }
}
/**
 * @param {object}, questionNumber, question, score, choices
 */
export function updateComponent(questionComponent, questionContainer, choicesArray, choicesContainer) {

    //question
    questionContainer.textContent = questionComponent;
    //choices
    makeChoices(choicesArray, choicesContainer)
}

function makeChoices(choices = [], choicesContainer) {
    let shuffledChoices = shuffle(choices)
    choicesContainer.innerHTML = '';
    shuffledChoices.forEach(element => {
        let choice = document.createElement('h1')
        choice.className = 'choice bg-slate-50 outline-2 flex justify-center text-xl text-center items-center outline-slate-200 rounded-md hover:brightness-95 active:brightness-90 transition-all duration-300'
        choice.textContent = element
        choicesContainer.append(choice)
    });


}
function shuffle(array = []) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomNum = Math.floor(Math.random() * (i + 1));

        [array[i], array[randomNum]] = [array[randomNum], array[i]];
    }
    return array;
}