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
		question: "Originally named The Collegiate Shcool, Yale University took on its new name in what year?",
		imgSrc: "images/collegiateschool.jpeg",
		choiceA: "1770",
		choiceB: "1778",
		choiceC: "1701",
		correct: "C"
	},
	{
		question: "The Yale Daily News is the country's oldest collegiate newspaper which has been in print since. . . ?",
		imgSrc: "images/YDN.jpeg",
		choiceA: "1922",
		choiceB: "1791",
		choiceC: "1878",
		correct: "C"
	}];

//:variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; //10s
const gaugeWidth = 150;//150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

//render a question
function renderQuestion() {
	let q = questions[runningQuestion];

	question.innerHTML = "<p>" + q.question + "</p>";
	qImg.innerHTML = "<img src" + q.imgSrc + ">";
	choiceA.innerHTML = q.choiceA;
	choiceB.innerHTML = q.choiceB;
	choiceC.innerHTML = q.choiceC;
}
start.addEventListener("click", startQuiz);
//start quiz
function startQuiz() {

	start.style.display = "none";
	renderQuestion();
	quiz.style.display = "block";
	renderProgress();
	renderCounter();
	TIMER = setInterval(renderCounter, 1000);
}
//render progress
function renderProgress() {
	for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {

		progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";

	}
}

//counter render

function renderCounter() {
	if (count <= questionTime) {
		counter.innerHTML = count;
		timeGauge.style.width = count * gaugeUnit + "px";
		count++

	} else {
		count = 0
		//change progress color to red
		answerIsWrong();
		if (runningQuestion < lastQuestion) {
			runningQuestion++;
			renderQuestion();

		} else {//end quiz show score
			clearInterval(TIMER);
			scoreRender();

		}
	}
}
//pick up here


//check answer
function checkAnswer(answer){
	if(answer == questions[runningQuestion].correct){
	//answer is correct	
	score++;
	// change progress color to red
	answerIsCorrect();
}else {
	//answer is wrong
	//change progress color to red
	answerIsWrong();
}
count = 0
if (runningQuestion < lastQuestion) {
	runningQuestion++;
	renderQuestion();
} else {
	//end quiz show score
	clearInterval(TIMER);
	scoreRender();

}}

//answer is correct
function answerIsCorrect() {
	document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}
//answer is wrong
function answerIswrong() {
	document.getElementById(runningQuestion).style.backgroundColor = "f00";

}
//score render
function scoreRender() {
	scoreDiv.style.display = "block";

	//calculate the amount of the question percent answered by the user
	const scorePerCent = Math.round(100 * socre / questions.length);
	//choose the image based on the scorePerCent
	let img = (scorePerCent >= 80) ? "img/5.png" :
		(scorePercent >= 60) ? "img/4.png" :
			(scorePercent >= 40) ? "img/3.png" :
				(scorePercent >= 20) ? "img/2.png" :
					"img/1.png";
	score.Div.innerHTMl = "<img src=" + ">";
	scorediv.innerHTML += "<p>" + scorePerCent + "%</p>";




}










