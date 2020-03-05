const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreDiv");

// question & answer array
let questions = [
	{
		question: "Originally named, The Collegiate School, Yale University took on its new name in what year?",
		imgSrc: "../img/collegiateschool.jpeg",
		choiceA: "1770",
		choiceB: "1778",
		choiceC: "1701",
		correct: "C"
	},
	{
		question: "The Yale Daily News is the country's oldest collegiate newspaper which has been in print since. . . ?",
		imgSrc: "../img/YDN.jpeg",
		choiceA: "1922",
		choiceB: "1791",
		choiceC: "1878",
		correct: "C"
	},
	{
		question: "Nine of Yale's ten founders taught at ______ University, because their school stopped requiring freshmen to study biblical Hebrew?",
		imgSrc: "..//img/Harvard.jpg",
		choiceA: "Harvard",
		choiceB: "Princeton",
		choiceC: "Brown",
		correct: "A"
	},


];



//:variables
let lastQuestionIndex = questions.length - 1; 
let runningQuestionIndex = 0;

const questionTime = 10; //15s
const gaugeWidth = 150;//150px
let count = 0;
const gaugeProgressUnit = gaugeWidth / questionTime;

let TIMER;
let score = 0;

//start quiz
start.addEventListener("click", startQuiz);

function startQuiz() {

	start.style.display = "none";
	counterRender();
	
	renderQuestion();
	startQuiz.style.display = display;
	progressRender();
	
	TIMER = setInterval(counterRender, 1000);
}









//render a question
function renderQuestion() {
	let q = questions[runningQuestionIndex];
	qImg.innerHTML = "<img src" + q.imgSrc + ">";
	question.innerHTML = "<p>" + q.question + "</p>";
	
	choiceA.innerHTML = q.choiceA;
	choiceB.innerHTML = q.choiceB;
	choiceC.innerHTML = q.choiceC;
}
 runningQuestionIndex = 0;
renderQuestion();
runningQuestionIndex++;
renderQuestion;



//progress Render
function progressRender() {
	for (let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++) {

		progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";

	}
}
function answerIsCorrect() {
	document.getElementById(runningQuestionIndex).style.backgroundColor = "green";
}
//answer is wrong
function answerIsWrong() {
	document.getElementById(runningQuestionIndex).style.backgroundColor = "red";
}

///







//counter render




const gaugeProgressUnit = gaugeWidth / questionTime;








function counterRender() {
	if (count <= questionTime) {
		counter.innerHTML = count;
		timeGauge.style.width = gaugeProgressUnit * count + "px";
		count++;

	} else {
		count = 0
		//change progress color to red
		answerIsWrong();
		if (runningQuestionIndex < lastQuestionIndex) {
			runningQuestionIndex++;
			questionRender();
//end quiz show score
		} else {  clearInterval(TIMER);
			scoreRender();

		}
	}
}
let TIMER =
setInterval(counterRender,1000);
clearInterval();




//check answer
let score = 0;
function checkAnswer(answer) {
	if(questions[runningQuestionIndex].correct == answer) {
		//answer is correct	
		score++;
		// change progress color to red
		answerIsCorrect();
	} else {
		//answer is wrong
		//change progress color to red
		answerIsWrong();
	}
	
	if (runningQuestionIndex < lastQuestionIndex) {
		count=0
		runningQuestion++;
		questionRender();
	} else {
		//end quiz show score
		clearInterval(TIMER);
		scoreRender();

	}
}
//These lines below may need tyo get deleted ....
//answer is correct
//function answerIsCorrect() {
	//document.getElementById(runningQuestionIndex).style.backgroundColor = "#0f0";

//answer is wrong
//function answerIswrong() {
	//document.getElementById(runningQuestionIndex).style.backgroundColor = "f00";

//}
//LInes ABove may be deleted.....
//score render
function scoreRender() {
	scoreDiv.style.display = "block";

	//calculate the amount of the question percent answered by the user
	const scorePerCent = Math.round(100 * score / questions.length);
	//choose the image based on the scorePerCent
	let img = (scorePerCent >= 80) ? "img/5.png" :
		(scorePercent >= 60) ? "img/4.png" :
			(scorePercent >= 40) ? "img/3.png" :
				(scorePercent >= 20) ? "img/2.png" :
					"img/1.png";
	scoreDiv.innerHTMl = "<img src=" + img + ">";
	scorediv.innerHTML += "<p>" + scorePerCent + "%</p>";




}










