
var questionNumber = 0;
var correctAnswers = 0;

const removeChildren = (parent) => {
    console.log(parent);
    while (parent.lastChild) {
        if(parent.lastChild.checked && questions[questionNumber - 1].correctAnswerIndex == parent.lastChild.id){
            correctAnswers++;
        }
        parent.removeChild(parent.lastChild);
    }
};

function startQuiz() { 
    console.log("startQuiz");
    var timerDisplay = document.querySelector('#timerDisplay');
    startTimer(30, timerDisplay);
    displayQuestion();
    
};

function displayQuestion() {
    if(questions.length > questionNumber){
        var answers = questions[questionNumber++].answers;
        for(let i = 0; i < answers.length; i++){
            var radiobox = document.createElement('input');
            radiobox.type = 'radio';
            radiobox.id = i;
            radiobox.value = answers[i];
            radiobox.name = "answer-choice"
        
            var label = document.createElement('label')
            label.htmlFor = i;
        
            var description = document.createTextNode(answers[i]);
            label.appendChild(description);
        
            var newline = document.createElement('br');
        
            var container = document.getElementById('question');
            container.appendChild(radiobox);
            container.appendChild(label);
            container.appendChild(newline);
        }
    }
    else{
        //done with quiz
        //display results
        console.log(correctAnswers/questions.length * 100);
    }
}

function getNextQuestion(){
    var parent = document.getElementById("question");
    
    removeChildren(parent);
    displayQuestion();
}

var startTimer = function(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer, 10);

        if (seconds<10){
            seconds = "0" + seconds;
        }

        display.textContent = "0:" + seconds;
        timer--;
        if (timer < 0) {
            timer = 0;
        }
    }, 1000);
};

var questions = [
    {
        question: "question here?",
        answers: [
            "A", 
            "B", 
            "C"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "question here?",
        answers: [
            "D", 
            "E", 
            "F"
        ],
        correctAnswerIndex: 0
    }
];

e = document.getElementById("submit-ans");
e.addEventListener("click", function(){getNextQuestion();}, false);


