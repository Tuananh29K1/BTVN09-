
//Tạo các biến của form Quiz
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answear-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");

//Khởi tạo các biến
let questionCounter = 0; 
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;

//push the questions into availableQuestions Array
function setAvailableQuestions(){
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        availableQuestions.push(quiz[i])
    } 
}
// set question-number and question-text and options
function getNewQuestion(){
    //set question-number
    questionNumber.innerHTML =`Câu Hỏi ${questionCounter + 1} trên ${quiz.length}`;
    //set question-text
    // get random question  
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex;
    //display question-text ( q )
    questionText.innerHTML = currentQuestion.q;
    
    //get the position of 'questionIndex' from the avaiableQuestion Array
    const index1 = availableQuestions.indexOf(questionIndex);
    //remove the position of 'questionIndex' from the avaiableQuestion Array, so that the question does not repeat
    availableQuestions.splice(index1,1)
    
    //set option
    const optionLen = currentQuestion.options.length;
    //push options into availableOptions Array
    for(let i=0; i<optionLen; i++){
        availableOptions.push(i);
    }
      
    optionContainer.innerHTML = ''; // chú ý code này
    let animationDelay = 0.2;
    // create options in HTML
    for(let i=0; i<optionLen; i++ ){
        //Random options
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        //get the position of 'optionIndex' from the availableOptions
        const index2 = availableOptions.indexOf(optionIndex);
        //remove the position of 'optionIndex' from the availableOptions the option does not repeat
        availableOptions.splice(index2,1);

        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.style.animationDelay =animationDelay + 's';
        animationDelay = animationDelay + 0.2;
        option.className = "option";
        optionContainer.appendChild(option);
        option.setAttribute("onclick","getResult(this)");       
    }

    questionCounter ++;
}
    //get the result of current attempt question
function getResult(element){
     const id = parseInt(element.id);
     //get the answer by comparing the id of clicked option 
     if( id === currentQuestion.answer ){
         // set the green color to the correct option
         element.classList.add("correct");
         // add the indicator to correct mark
         updateAnswerIndicator("correct");
         correctAnswers ++;
     }else{
         // set the red color to the incorrect option
         element.classList.add("wrong");
         // add the indicator to wrong mark
         updateAnswerIndicator("wrong");

         // if the answer is incorrect the show the correct option by adding green color the correct option 
         const optionLen = optionContainer.children.length;
         for(let i=0; i<optionLen; i++){
             if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
                optionContainer.children[i].classList.add("correct");
             }
         }
     }
  attempt ++;   
  unclickableOptions();      
}
// make all the options unclickbale once the user select a option (Restrict the user to change the opption again)
function unclickableOptions(){
    const optionLen = optionContainer.children.length;
    for(let i=0; i<optionLen; i++){
        optionContainer.children[i].classList.add("already-answered");
    }
}

function answersIndicator(){
    answersIndicatorContainer.innerHTML = '';
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        const indicator = document.createElement("div");
        answersIndicatorContainer.appendChild(indicator);
    }
}

function updateAnswerIndicator(markType){
    answersIndicatorContainer.children[questionCounter-1].classList.add(markType);
} 
//Gắn sự kiên cho button Next
function next(){
    if(questionCounter === quiz.length){
       quizOver();
    }else{
        getNewQuestion();
    }
}

function quizOver(){
    //hide quiz quizBox
    quizBox.classList.add("hide");
    // show result Box
    resultBox.classList.remove("hide");
    quizResult();
}
//get the quiz Result
function quizResult(){
    resultBox.querySelector(".total-question").innerHTML = quiz.length;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
    const percentag = (correctAnswers/quiz.length)*100;
    resultBox.querySelector(".percentage").innerHTML = `${percentag.toFixed(2 )} %`;
    resultBox.querySelector(".total-score").innerHTML = `${correctAnswers} / ${quiz.length}`; 
}

function resetQuiz(){
        questionCounter = 0;  
        correctAnswers = 0;
        attempt = 0;
}

function tryAgainQuiz(){
    //hide the resultBox
    resultBox.classList.add("hide");
    //show the quizBox
    quizBox.classList.remove("hide");
    resetQuiz();
    startQuiz();
}

function goToHome(){
    //hide the resultBox
    resultBox.classList.add("hide");
    // hide the quizBox
    quizBox.classList.add("hide");
    //show the home Box
    homeBox.classList.remove("hide");
    resetQuiz();
    
}

function start(){
    //hide the homeBox
    homeBox.classList.add("hide");
    //show the quizBox
    quizBox.classList.remove("hide");
}
 /// STARTING POINT 
function startQuiz(){

    //hide home box
    homeBox.classList.add("hide");
    //show quiz box
    quizBox.classList.remove("hide");

    //fist we will set all questions in avaiableQuestions Array
    setAvailableQuestions();
    //second we will call getNewQuestion(); function
    getNewQuestion();
    // to create indicator of answers
    answersIndicator();
}
 