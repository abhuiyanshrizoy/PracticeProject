const questions = [
    {
        question: "What was Portugal's first match?",
        answer:[
            {text:"18 December 1921", correct: true},
            {text:"12 September 1940", correct: false},
            {text:"3 December 1902", correct: false},
            {text:"1 January 1990", correct: false},
        ]
    },
    {
        question: "Which country is 1st in FIFA ranking?",
        answer:[
            {text:"Brazil", correct: false},
            {text:"France", correct: false},
            {text:"Argentina", correct: true},
            {text:"Germany", correct: false},
        ]  
    },
    {
        question: "How many cups does Brazil have?",
        answer:[
            {text:"7", correct: false},
            {text:"1", correct: false},
            {text:"2", correct: false},
            {text:"5", correct: true},
        ]
    },
    {
        question: "Who won the 2022 FIFA world cup?",
        answer:[
            {text:"Argentina", correct: true},
            {text:"Qatar", correct: false},
            {text:"Croatia", correct: false},
            {text:"Morroco", correct: false},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");

    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = 'You scored ${score} out of ${questions.length}!';
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();