var createQuestion = function(questionId) {

};

function startQuiz() {
    console.log("startQuiz");
    var timerDisplay = document.querySelector('#timerDisplay');
    startTimer(30, timerDisplay);
    
    //do more stuff
};

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


