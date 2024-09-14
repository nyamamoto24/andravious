const questions = [
    {
        question: "Which of the following headlines is real?",
        answers:[
            { text: "&quot;Local Historian Claims Lost Treasure Hidden Beneath City's Most Famous Landmark&quot;", correct: false },
            { text: "&quot;Indianapolis man gets 60 years for a road rage shooting that killed a man&quot;", correct: true },
            { text: "&quot;Tech Giant Announces Revolutionary Gadget: The First Self-Watering Houseplant?&quot;", correct: false },
        ],
        explain:"Question 1 Explained"
    },
    {
        question: "Which of the following headlines is real?",
        answers:[
            { text: "&quot;Pyramids Found to Be Ancient Parking Lots: Archaeologists Baffled&quot;", correct: false },
            { text: "&quot;Earthquake Rattles Coastal Area Near Los Angeles&quot;", correct: true },
            { text: "&quot;Time Travelers from 3024 Visit: 'You're All Still Using Paper? Seriously?'&quot;", correct: false },
        ],
        explain:"Question 2 Explained"
    },
    {
        question: "Which of the following headlines is real?",
        answers:[
            { text: "&quot;Local Library Discovers Unexpected Collection of Ancient Manuscripts&quot;", correct: false },
            { text: "&quot;Tech billionaire pulls off first private spacewalk high above Earth&quot;", correct: true },
            { text: "&quot;Archived Footage Uncovers Surprising Details About Early 20th Century Inventions&quot;", correct: false },
        ],
        explain:"Question 3 Explained"
    },
    {
        question: "Which of the following headlines is real?",
        answers:[
            { text: "&quot;Three Americans are accused of trying to overthrow Congo's president. They're now sentenced to death.&quot;", correct: true },
            { text: "&quot;Dems Alarmed By Joe Biden's Poor Performance As Debate Viewer&quot;", correct: false },
            { text: "&quot;MAXIMUM ALERT! Putin Issues Emergency Warning To The West: NATO Missile Strikes On Russian Territory Are A Declaration Of War Against Russia&quot;", correct: false },
        ],
        explain:"Question 4 Explained"
    },
    {
        question: "Which of the following headlines is real?",
        answers:[
            { text: "&quot;Video: Trump SLAMS Kamala Harris For Facilitating The Disappearance Of 325K Smuggled Children&quot;", correct: false },
            { text: "&quot;Fans React To Aaron Rodgers Spreading Conspiracy Theories&quot;", correct: false },
            { text: "&quot;McDonald's fall deals include extended $5 meal, 50 cent double cheeseburger and more&quot;", correct: true },
        ],
        explain:"Question 5 Explained"
    },
]

const questionText = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const explain = document.getElementById("explaindesc")
const explainapp = document.getElementById("bodyapp")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetQuestions()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNum = currentQuestionIndex + 1;
    questionText.innerHTML = questionNum + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", checkAnswer);
    });
}

function resetQuestions(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
    explain.innerHTML = "";
    explainapp.style.display = "none";
}

function checkAnswer(stat){
    const selectedbutton = stat.target;
    const iscorrect = selectedbutton.dataset.correct === "true";
    if(iscorrect){
        selectedbutton.classList.add("correct")
        score++;
    }else{
        selectedbutton.classList.add("incorrect")
    }
    // disables selecting more buttons and highlights the correct one if
    // it wasnt selected.
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    // to do: add box with explamation and update details when a question is added
    explainapp.disabled = false;
    explain.innerHTML = questions[currentQuestionIndex].explain;
}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        endQuiz()
    }
}

function endQuiz(){
    resetQuestions();
    questionText.innerHTML = `You scored ${score} out of ${questions.length}`
    nextButton.innerHTML = "Try Again"
    nextButton.style.display = "block";
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();
