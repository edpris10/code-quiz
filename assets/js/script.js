//initialize variables
var questionNumber = 0;
var correctAnswers = 0;
const questions = [
    {
        question: "How do you declare a variable in Javascript?",
        answers: [
            "A. let", 
            "B. const", 
            "C. var",
            "D. all of the above"

        ],
        correctAnswerIndex: 3
    },
    {
        question: "How do you access the 'breed' attribute of the 'dog' object? ",
        answers: [
            "A. dog.breed", 
            "B. dog-breed", 
            "C. breed"
        ],
        correctAnswerIndex: 0
    }
];

//remove previous question
const removeChildren = (parent) => {
    while (parent.lastChild) {
        if(parent.lastChild.checked && questions[questionNumber - 1].correctAnswerIndex == parent.lastChild.id){
            correctAnswers++;
        }
        parent.removeChild(parent.lastChild);
    }
};

//start quiz 
function startQuiz() { 
    //delete instruction and start button elements
    var deleteStatement = document.getElementById("instructions");
    deleteStatement.parentNode.removeChild(deleteStatement);
    var startButton = document.getElementById("start-btn");
    startButton.parentNode.removeChild(startButton);
    //start timer
    var timerDisplay = document.querySelector('#timerDisplay');
    startTimer(30, timerDisplay);
    // display next question
    displayQuestion();
};

//display question
function displayQuestion() {
    //finding and assign question container
    var container = document.getElementById('question');
    //checks if done with quiz
    if(questions.length > questionNumber){
        //assigning answer choices for a given question
        var answers = questions[questionNumber].answers;
        //creates the element for the question
        var question = document.createElement('h1');
        //sets innerHTML for the question element for the given question
        question.innerHTML = questions[questionNumber++].question;
            
       //add the newly created question element to the container
        container.appendChild(question);
        //add each answer choice to container
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
            //append elements to container
            container.appendChild(radiobox);
            container.appendChild(label);
            container.appendChild(newline);
        }
    }
    else{
        //done with quiz
        var submitAnswer = document.getElementById("submit-ans");
        submitAnswer.parentNode.removeChild(submitAnswer);
        //deletes timer after done
        var timer = document.getElementById("timerDisplay");
        timer.parentNode.removeChild(timerDisplay);

        //display results
        var result = document.createElement('p');
        result.innerHTML = "You scored a " + correctAnswers/questions.length * 100 + " on the quiz";
        container.appendChild(result);
    }
}

function getNextQuestion(){
    //gets parents element to remove child (answer choices)
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

//add eventListener to the submit-ans button to display next question
e = document.getElementById("submit-ans");
e.addEventListener("click", function(){getNextQuestion();}, false);


