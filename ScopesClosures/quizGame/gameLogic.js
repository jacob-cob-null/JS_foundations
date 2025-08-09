import { updateComponent } from "./components.js";
import { getQuestions, prepQuestions } from "./questions.js";

export async function gameLoop({ questionNumber, score, question: questionContainer, choices: choicesContainer } = {}) {

    let questions = await prepQuestions();
    let newPlayer = player();
    let currentQuestionIndex = 0;

    const showQuestion = (index) => {
        if (index >= questions.length) {
            questionContainer.textContent = `Game Over! Final Score: ${newPlayer.getScore()}`;
            choicesContainer.innerHTML = '';
            return;
        }

        // Move all the question display logic INSIDE showQuestion
        const q = questions[index];
        let rawChoices = [q.correct_answer, ...q.incorrect_answers];

        questionNumber.textContent = `Question: ${index + 1}`;
        score.textContent = newPlayer.getScore();
        updateComponent(q.question, questionContainer, rawChoices, choicesContainer);

        // Clean up previous event listeners
        const newChoicesContainer = choicesContainer.cloneNode(true);
        choicesContainer.parentNode.replaceChild(newChoicesContainer, choicesContainer);
        choicesContainer = newChoicesContainer;

        choicesContainer.addEventListener('click', validateAnswer);

        function validateAnswer(e) {
            if (e.target.classList.contains('choice')) {
                if (q.correct_answer === e.target.textContent) {
                    newPlayer.increaseScore();
                    score.textContent = newPlayer.getScore();
                    e.target.classList.add('!bg-green-200'); // Correct answer
                } else {
                    e.target.classList.add('!bg-red-200'); // Wrong answer feedback
                }
                choicesContainer.removeEventListener('click', validateAnswer);

                // Move to next question
                setTimeout(() => {
                    showQuestion(index + 1);
                }, 700);
            }
        }
    };

    // Start the game
    showQuestion(0);
}

const player = () => {
    let score = 0;
    return {
        increaseScore: () => { score++ },
        getScore: () => score
    }
}