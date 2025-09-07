
const questions = [
    {
        question: "Was ist die Hauptstadt von Deutschland?",
        answers: [
            { img: "https://i.natgeofe.com/n/b234ec7d-a988-4b75-9e65-749ddcbea7a0/citylife_berlin_2B4H3T1_web.jpg", correct: true },
            { img: "https://static01.nyt.com/images/2025/05/10/travel/01thing-to-do-berlin-top-bmwg/01thing-to-do-berlin-top-bmwg-videoSixteenByNine3000.jpg", correct: false }
        ]
    },
    {
        question: "Was ist 2 + 2?",
        answers: [
            { img: "https://example.com/3.jpg", correct: false },
            { img: "https://example.com/4.jpg", correct: true }
        ]
    }
];

let currentQuestionIndex = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    const questionElement = document.getElementById('question');
    questionElement.innerText = question.question;
    const answerButtons = document.getElementById('answer-buttons');
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        const img = document.createElement('img');
        img.src = answer.img;
        img.alt = "Antwortbild";
        img.style.width = "100%"; // Bildgröße anpassen
        button.classList.add('btn');
        button.onclick = () => checkAnswer(button, answer.correct);
        button.appendChild(img);
        answerButtons.appendChild(button);
    });
}

function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        button.classList.add('correct');
    } else {
        button.classList.add('wrong');
    }
    Array.from(document.querySelectorAll('.btn')).forEach(btn => {
        btn.disabled = true; // Deaktiviert alle Buttons nach der Auswahl
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        alert("Quiz beendet!");
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again'
    nextButton.style.display = "block";
}

startQuiz();