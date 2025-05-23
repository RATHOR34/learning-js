const questions = [
    {
        question: "1.what is the capital of Franc?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        answer: "Paris",
    },
     {
    question: "2.Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "3.What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hypertext Markdown Language",
      "Hyperloop Machine Language",
      "Helicopters Terminals Motorboats Lamborginis",
    ],
    answer: "Hypertext Markup Language",
  },
  {
    question: "4.What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "1997"],
    answer: "1995",
  },
  {
    question: "5.Which of these is a JavaScript framework?",
    options: ["Django", "Flask", "React", "Laravel"],
    answer: "React",
  },
]

console.log(questions[0].question)
//get dom elements

let questionElement = document.querySelector(".question")
let questionNumberElement = document.querySelector(".question-number")
let optionsContainer = document.querySelector(".options-container")
let nextButton = document.querySelector(".next-btn")
let resultContainer = document.querySelector(".result")
let questionNumberELement = document.querySelector(".question-number");
let questionContainer = document.querySelector(".question-container");
let scoreElement = document.querySelector(".score");
let restartButton = document.querySelector(".restart-btn")
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// next question
function nextQuestion(){

  if (selectedAnswer === null) {
    alert("please select an answer!");
    return;
  }
  //click if answer is correct
  if (selectedAnswer === questions[currentQuestionIndex].answer) {
    score++;
  }
  
  //move to next question
  currentQuestionIndex++
  if(currentQuestionIndex < questions.length){
    showQuestion()
  }else{
     showResults();
    alert("this was the last question")
  }
}

// Display current question
function showQuestion(){
    resultContainer.classList.add("hidden")
    
    // get current question
    let currentQuestion = questions[currentQuestionIndex];
   
   // update question number    
    questionNumberElement.textContent = `Questions ${currentQuestionIndex + 1} of ${questions.length}`;

    // update question text
    questionElement.textContent = currentQuestion.question;
    
    // clear previous text
    optionsContainer.innerHTML = "";

    // Add new options
    currentQuestion.options.forEach((option
      
    ) => {
       const button = document.createElement("button")
       button.textContent = option;
       button.classList.add("option")
      //  button.addEventListener("click",(option) => selectAnswer(option))
      button.addEventListener("click",(e)=> selectAnswer(e))
       optionsContainer.appendChild(button);
    });
}

//handle Answer selection

function selectAnswer(e){
  document.querySelectorAll(".option").forEach((option) => {
    option.classList.remove("selected")
  })
  e.target.classList.add("selected")
   selectedAnswer = e.target.textContent
  console.log(e)

}

// result showing
function showResults(){
  (questionElement.innerHTML = ""),
   (optionsContainer.innerHTML = ""),
    nextButton.classList.add("hidden");
     scoreElement.textContent = score;
  resultContainer.classList.remove("hidden");
}

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.classList.remove("hidden")
  showQuestion();
}

restartButton.addEventListener("click",startQuiz)
nextButton.addEventListener("click",nextQuestion);
showQuestion()