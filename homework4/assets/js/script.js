var questionContainer = $("#quiz");
var resultsContainer = $("#results");
// var submitButton = $("#submit");
var timeLeft = 75;
var downloadTimer = $("#timeLeft");
var startTimer = $("#startTimer");
var countdown = $("#countdown");
var correctAnswer = 0;
var myQuestions;

$(document).ready(function(){
  $("#next").hide();
  $("#submit").hide();
  $("#checkScore").hide();
  $("#push").hide();
  $("#clear").hide();  
})

$("#startTimer").on("click", function() {
   downloadTimer = setInterval(function function1(){
    $("#countdown").html(timeLeft);
    timeLeft -= 1;
      if(timeLeft <= -1){
        clearInterval(downloadTimer);
        alert("Time's up! Dracarys!");
      }
   }, 1000);

   myQuestions = [
     {
       question: "Which of these is not Daenerys' dragon?",
       answers: {
         a: "Drogon",
         b: "Rhaegal",
         c: "Viscerys",
         d: "Viserion"
       },
       correctAnswer: "c"
     },
     {
       question: "Who created the Night King?",
       answers: {
         a: "The First Men",
         b: "The Children of the Forest",
         c: "The Lord of Light",
         d: "The Red Lady"
       },
       correctAnswer: "b"
     },
     {
       question: "What is the name of Arya's sword?",
       answers: {
         a: "Fang",
         b: "Ice",
         c: "Pin",
         d: "Needle"
       },
       correctAnswer: "d"
     },
     {
      question: "What is the name of Jon Snow's Direwolf?",
      answers: {
        a: "Gargamel",
        b: "Ghost",
        c: "Grey Wind",
        d: "Greyjoy"
      },
      correctAnswer: "b"
    },
    {
      question: "How did Viserys Targaryen die?",
      answers: {
        a: "Molten gold poured over his head",
        b: "Stabbed in the heart by Khal Drogo",
        c: "Pushed over a cliff at Westeros",
        d: "Drank wine poisoned with the strangler"
      },
      correctAnswer: "a"
    },
   ];   
 
   function buildQuiz() {
     var output = [];
     myQuestions.forEach((currentQuestion, questionNumber) => {
       var answers = [];
       for (letter in currentQuestion.answers) {
         answers.push(
           `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
               ${letter} :
               ${currentQuestion.answers[letter]}
            </label>`
         );
       }
       output.push(
         `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
       );
     });
     quizContainer.innerHTML = output.join("");
   }

   function showResults() {
     var answerContainers = quizContainer.querySelectorAll(".answers");
     var numCorrect = 0;

     myQuestions.forEach((currentQuestion, questionNumber) => {
     
       var answerContainer = answerContainers[questionNumber];
       var selector = `input[name=question${questionNumber}]:checked`;
       var userAnswer = (answerContainer.querySelector(selector) || {}).value;
 
        if (userAnswer === currentQuestion.correctAnswer) {
          numCorrect++;
          answerContainers[questionNumber].style.color = "lightgreen";
          //  timeLeft = 75;
        } else {
          answerContainers[questionNumber].style.color = "red";
          timeLeft -= 2;
        }
        answerContainers[questionNumber].style.color = "black";
     });
 
     // show number of correct answers out of total
     resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
   }
 
   function showSlide(n) {
     slides[currentSlide].classList.remove("active-slide");
     slides[n].classList.add("active-slide");
     currentSlide = n;
     
     if (currentSlide === 0) {
       nextButton.style.display = "none";
       submitButton.style.display = "inline-block";
     }     
     if (currentSlide === slides.length - 1) {
       nextButton.style.display = "none";
       submitButton.style.display = "inline-block";
       checkScoreButton.style.display = "inline-block";
     } else {
       nextButton.style.display = "inline-block";
      //  submitButton.style.display = "none";
      //  checkScoreButton.style.display = "none";
     }
   }
 
   function showNextSlide() {
     showSlide(currentSlide + 1);
   }
 
   var quizContainer = document.querySelector("#quiz");
   var resultsContainer = document.querySelector("#results");
   var submitButton = document.querySelector("#submit");
   var checkScoreButton = document.querySelector("#checkScore");

   buildQuiz();

   var nextButton = document.querySelector("#next");
   var slides = document.querySelectorAll(".slide");
   var currentSlide = 0;
 
   showSlide(0);

   function myStopFunction() {
    clearInterval(downloadTimer);
    $("#push").show();
    $("#clear").show();
    $("#checkScore").show();
   }
 
   submitButton.addEventListener("click", showResults);
   nextButton.addEventListener("click", showNextSlide);
   checkScoreButton.addEventListener("click", myStopFunction);

   var board = document.querySelector("#board");

  // Load saved scores:
  var localStorage = {};
  var scores = [];

  try {
    scores = JSON.parse(localStorage.scores);
  } catch(err) {}

  // Add new scores and save them:
  $("#push").on("click", function(){ 
    scores.push(Math.floor(Math.random() * 17));  
    localStorage.scores = JSON.stringify(scores);  
    board.innerHTML = scores.map(score => `<li>${ score }</li>`).join('');
  });

  // Clear all scores and delete them from localStorage:
  $("#clear").on("click", function(){
    scores = [];  
    delete localStorage.scores;  
    board.innerHTML = '';
  });
})

 