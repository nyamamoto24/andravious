const questions = [
    {
        question: "Which of the following headlines is real?",
        answers:[
            { text: "&quot;Local Historian Claims Lost Treasure Hidden Beneath City's Most Famous Landmark&quot;", correct: false, id:1 },
            { text: "&quot;Indianapolis man gets 60 years for a road rage shooting that killed a man&quot;", correct: true,},
            { text: "&quot;Tech Giant Announces Revolutionary Gadget: The First Self-Watering Houseplant?&quot;", correct: false,},
        ],
        explain:[
            { text:"Incorrect. Look up the title of this article inside quotations and see what you find! This headline was AI generated and was never written by any news source!"},
            { text: "Correct! This article was published on “ABC NEWS” at this link: <a href='https://abcnews.go.com/US/wireStory/indianapolis-man-gets-60-years-road-rage-shooting-113688936'>https://abcnews.go.com/US/wireStory/indianapolis-man-gets-60-years-road-rage-shooting-113688936</a>"},
            { text:"Incorrect. Look up the title of this article inside quotations and see what you find! This headline was AI generated and was never written by any news source!"}, 
        ]
    },
    {
        question: "Which of the following headlines is real?",
        answers:[
            { text: "&quot;Pyramids Found to Be Ancient Parking Lots: Archaeologists Baffled&quot;", correct: false },
            { text: "&quot;Earthquake Rattles Coastal Area Near Los Angeles&quot;", correct: true },
            { text: "&quot;Time Travelers from 3024 Visit: 'You're All Still Using Paper? Seriously?'&quot;", correct: false },
        ],
        explain:[
            { text:"Incorrect. Look up the title of this article inside quotations and see what you find! This headline was AI generated and was never written by any news source!"},
            { text:"Correct! This article was published on “The New York Times” at this link: <a href='https://www.nytimes.com/2024/09/12/us/earthquake-california-los-angeles-malibu.html'>https://www.nytimes.com/2024/09/12/us/earthquake-california-los-angeles-malibu.html</a>"},
            { text:"Incorrect. Look up the title of this article inside quotations and see what you find! This headline was AI generated and was never written by any news source!"},
        ]
    },
    {
        question: "Which of the following headlines is real?",
        answers:[
            { text: "&quot;Local Library Discovers Unexpected Collection of Ancient Manuscripts&quot;", correct: false },
            { text: "&quot;Tech billionaire pulls off first private spacewalk high above Earth&quot;", correct: true },
            { text: "&quot;Archived Footage Uncovers Surprising Details About Early 20th Century Inventions&quot;", correct: false },
        ],
        explain:[
            { text:"Incorrect. Look up the title of this article inside quotations and see what you find! This headline was AI generated and was never written by any news source!"},
            { text:"Correct! This article was published on “AP NEWS PRESS” at this link: <a href='https://apnews.com/article/spacex-spacewalk-private-polaris-dawn-87d4c78853f0249baf29631bedfac749'>https://apnews.com/article/spacex-spacewalk-private-polaris-dawn-87d4c78853f0249baf29631bedfac749</a>"},
            { text:"Incorrect. Look up the title of this article inside quotations and see what you find! This headline was AI generated and was never written by any news source!"},
        ]
    },
    {
        question: "Which of the following headlines is from a reputable source?",
        answers:[
            { text: "&quot;Three Americans are accused of trying to overthrow Congo's president. They're now sentenced to death.&quot;", correct: true },
            { text: "&quot;Dems Alarmed By Joe Biden's Poor Performance As Debate Viewer&quot;", correct: false },
            { text: "&quot;MAXIMUM ALERT! Putin Issues Emergency Warning To The West: NATO Missile Strikes On Russian Territory Are A Declaration Of War Against Russia&quot;", correct: false },
        ],
        explain:[
            { text:"Correct! This article was published on “NBC NEWS” at this link: <a href='https://www.nbcnews.com/news/world/three-americans-are-accused-trying-overthrow-congos-president-now-sent-rcna171126'>https://www.nbcnews.com/news/world/three-americans-are-accused-trying-overthrow-congos-president-now-sent-rcna171126</a>"},
            { text:"Incorrect! This is an article you can find online. However, the source is “The Onion”, which is a satirical news site. This means the news supplied from here is satire and fake!"},
            { text:"Incorrect! This is an article you can find online. However, the source is “INFOWARS”,which is a far-right wing conspiracy news site owned by Alex Jones. Alex Jones is a far-right conspiracy theorist."},
        ]
    },
    {
        question: "Which of the following headlines is from a reputable source?",
        answers:[
            { text: "&quot;Video: Trump SLAMS Kamala Harris For Facilitating The Disappearance Of 325K Smuggled Children&quot;", correct: false },
            { text: "&quot;Fans React To Aaron Rodgers Spreading Conspiracy Theories&quot;", correct: false },
            { text: "&quot;McDonald's fall deals include extended $5 meal, 50 cent double cheeseburger and more&quot;", correct: true },
        ],
        explain:[
            { text:"Incorrect! This is an article you can find online. However, the source is “INFOWARS”,which is a far-right wing conspiracy news site owned by Alex Jones. Alex Jones is a far-right conspiracy theorist."},
            { text:"Incorrect! This is an article you can find online. However, the source is “The Onion”, which is a satirical news site. This means the news supplied from here is satire and fake!"},
            { text:"Correct! This article was published on “ABC NEWS” at this link: <a href='https://abcnews.go.com/GMA/Food/mcdonalds-fall-deals-include-extended-5-meal-50/story?id=113618411'>https://abcnews.go.com/GMA/Food/mcdonalds-fall-deals-include-extended-5-meal-50/story?id=113618411</a>."},
        ]
    },
]

const questionText = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const explaititle = document.getElementById("explaititle")
const explain = document.getElementById("explaindesc")
const explainapp = document.getElementById("bodyapp")
const ending = document.getElementById("endscreen")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    ending.innerHTML = "";
    showQuestion();
}

function showQuestion(){
    resetQuestions()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNum = currentQuestionIndex + 1;
    questionText.innerHTML = questionNum + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer,index) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text
        button.classList.add("btn");
        answerButtons.appendChild(button);
        button.dataset.id = index
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
    explainapp.style.display = "block";
    explain.innerHTML = questions[currentQuestionIndex].explain[selectedbutton.dataset.id].text;
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
    nextButton.innerHTML = "Try Again";
    nextButton.style.display = "block";
    ending.innerHTML = "Good job on finishing the quiz! If you performed poorly on this quiz, make sure to check out the course and read through it to understand how to identify these fake headlines better! <br> It is also very important to know that even though the source might be legit, sometimes the author can be biased. When looking at an article, make sure to read about the author of the article as well and see what their biases may be! Good luck!"
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();