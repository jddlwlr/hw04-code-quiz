// Targeting html elements
var startBtn = $('#startButton');
var timerEl = $('#timerDisp')

var choicesEl = $('.btn');
var questionEl = $('#questionEl')
var index = -1;

// Question content Array
var questions = [
  {
    question: "What does a function do?",
    choices: ["Addition", "subtraction", "Anything you need it to", "all of the above"],
    correct: "all of the above"
  },
  {
    question: "what is a banana?",
    choices: ["A fruit", "A vegetable", "a figment of your imagination", "binoculars"],
    correct: "A vegetable"
  },
]

$(startBtn).click(function () {

  $(startBtn).hide();
  nextQuestion();
  startTimer();

});

function startTimer(){

      var counter = 10;
      var interval = setInterval(function() {
          counter--;
        
          if (counter <= 0) {
              clearInterval(interval);
              $(timerEl).text("Time's Up!");
              $(startBtn).show();
              $(startBtn).text("Try Again?") 
              // endGame ();
          }
          else{
            $(timerEl).text(counter);
          }
    
      }, 1000);
};
//use forEach in here
function nextQuestion () {
  var i = -1;
    $(questionEl).text(questions[i++].question)
    
    choicesEl.each(function (){
     
      $(choicesEl).text(questions[i++].choices)

    });

}
// need to have the function inside the event listenr

$choices.click(compare()) 
