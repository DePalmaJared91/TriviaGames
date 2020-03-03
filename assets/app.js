const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const qImg = document.getElementById("qImg");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const progress = document.getElementById("progress");
const scoreContainer = document.getElementById("scoreContainer");

// question & answer array
let questions = [
	{
		question: "What was Yale University's name between 1701 and 1716?",
		imgSrc: "images/collegaiteschool.jpeg",
		choiceA: "The Ivy School",
		choiceB: "The British East India School",
		choiceC: "The  Collegiate School",
		correct: "C",
	},
	{
		question: "What was Yale University's name between 1701 and 1716?",
		imgSrc: "images/collegaiteschool.jpeg",
		choiceA: "The Ivy School",
		choiceB: "The British East India School",
		choiceC: "The  Collegiate School",
		correct: "C",
	},
	{
		question: "What was Yale University's name between 1701 and 1716?",
		imgSrc: "images/collegaiteschool.jpeg",
		choiceA: "The Ivy School",
		choiceB: "The British East India School",
		choiceC: "The  Collegiate School",
		correct: "C",
	},
	{
		question: "What was Yale University's name between 1701 and 1716?",
		imgSrc: "images/collegaiteschool.jpeg",
		choiceA: "The Ivy School",
		choiceB: "The British East India School",
		choiceC: "The  Collegiate School",
		correct: "C",
		},
			
		{
		question: "What was Yale University's name between 1701 and 1716?",
		imgSrc: "images/collegaiteschool.jpeg",
		choiceA: "The Ivy School",
		choiceB: "The British East India School",
		choiceC: "The  Collegiate School",
		correct: "C",
	},
	{
	question: "What was Yale University's name between 1701 and 1716?",
	imgSrc: "images/collegaiteschool.jpeg",
	choiceA: "The Ivy School",
	choiceB: "The British East India School",
	choiceC: "The  Collegiate School",
	correct: "C",
	},

	{
	question: "What was Yale University's name between 1701 and 1716?",
	imgSrc: "images/collegaiteschool.jpeg",
	choiceA: "The Ivy School",
	choiceB: "The British East India School",
	choiceC: "The  Collegiate School",
	correct: "C",
	},
	
	{
		question: "What was Yale University's name between 1701 and 1716?",
		imgSrc: "images/collegaiteschool.jpeg",
		choiceA: "The Ivy School",
		choiceB: "The British East India School",
		choiceC: "The  Collegiate School",
		correct: "C",
	},
	
	];

	//:variables
	const lastQuestion = questions.length - 1;
	let runningQuestion = 0;
	let count = 0;
	const questionTime =10; //10s
	const gaugeWidth = 150;//150px
	constgaugeUnit = gaugeWidth / questionTime;
	let Timer; 
	let score = 0;

	//render a question
	function renderQuestion(){
let q = questions[runningQuestion];

question.innerHTML = "<p>"+ q.question +"</p>";
qImg.innerHTML ="<img src"+ q.imgSrc + imgSrc +">";
choiceA.innerHTML = q.choiceA;
choiceB.innerHTML= q.choiceB;
choiceC.innerHTML = q.choiceC;
/////PICK UP HERE


	}


let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;
function renderQuestion() {

	let q = questions[runningQuestionIndex];
	qImg.innerHTML = "<img src=" + q.imgSrc + ">";
	question.innerHTML = "<p>" + q.question + "</p>";
	choiceA.innerHTML = q.choiceA;
	choiceB.innerHTMl = q.choiceB;
	choiceC.innerHTML = q.choiceC;




}
runningQuestionIndex = 0;
renderQuestion()
runningQuestionIndex++
renderQuestion()

function progressRender() {
	for (let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++) {

		progress.innerHtmL += "<div class='prog' id= " + qIndex + "></div>";
	}
}

function answerIsCorrect() {
	document.getElementById(runningQuestionIndex).style.backgroundColor = "green"
}
function answerIsWrong() {
	document.getElementById(runningQuestionIndex).style.backgroundColor = "red";


}
const questionTime = 15; 
const gaugeWidth = 150;
let count = 0;
const gaugeProgressUnit = gaugeWidth/questionTime;
function counterRender() {if ( count<=questionTime ) {
	counter.innerHTML = count;
	timeGauge.style.width = gaugeProgressUnit * count + "px";
	count++;} else
	{count = 0;
	answerIsWrong();
	if (runningQuestionIndex < lastQuestionIndex){
		runningQuestionIndex++;
		questionRender( );
	} else{clearInterval(TIMER);
	}
}
	let score=[0];
fucntion checkAnswer(answer) {if (questions[runningQuestionIndex].correct == answer){
	score++;
	answerIsCorrect();
} else{
	answerIsWrong();
}
if(runningQuestionIndex < lastQuestionIndex){
	count=0;
	runningQuestionIndex++;
	questionRender();
} else{ 
	clearInterval(TIMER);
	scoreRender();
	
}
}

}



