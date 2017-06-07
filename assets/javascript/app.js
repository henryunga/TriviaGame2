$(document).ready(function() {
//note
function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();


$("body").on("click", ".start-button", function(event){
	event.preventDefault();
	generateHTML();

	timerWrapper();

});

$("body").on("click", ".answer", function(event){
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {

		clearInterval(theClock);
		generateWin();
	}
	else {
		clearInterval(theClock);
		generateLoss();
	}
});

$("body").on("click", ".reset-button", function(event){
	resetGame();
});

});

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter +
	"</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" +
	"<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" +
	"<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally +
	"</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = [
"Who wrote Leaves of Grass?",
"Who was the first African-American winner of the Nobel Prize for Literature?",
"Who is the main character of the Virginia Woolf classic Mrs. Dalloway?",
"What 1985 film, starring Whoopi Goldberg, was adapted from Alice Walker's Pulitzer Prize-winning novel set in rural Georgia?",
"Salinas Valley, CA is the main setting of this author's prolific novel East of Eden?",
"Which U.S. President became the first and only winner of the Pulitzer Prize?",
"Which writer became known as the leader of the Harlem Renaissance?",
"What is Dr. Suess's first name?"];
var answerArray = [
["Walt Whitman", "Edgar Allan Poe", "Mark Twain", "Steve Jobs"],
["Zadie Smith","Toni Morrison","Frederick Douglass","Oprah Winfrey"],
["Virginia", "Lolita", "Clarissa", "Vanessa"],
["Beloved","The Sound and the Fury","The Color Purple","These Is My Words"],
["F. Scott Fitzgerald", "T.S. Eliot", "Ernest Hemingway", "John Steinbeck"],
["John F. Kennedy","Richard Nixon","Barack Obama","Abraham Lincoln"],
["Ishmael Reed", "Langston Hughes", "Lenny Bruce", "James Baldwin"],
["Samuel","Elie","Charles","Theodor"]];
var imageArray = ["<img class='center-block' src='assets/images/whitman.jpg'>", "<img class='center-block img-right' src='assets/images/morrison.jpg'>", "<img class='center-block img-right' src='assets/images/clarissa.jpg'>", "<img class='center-block img-right' src='assets/images/purple.jpg'>", "<img class='center-block img-right' src='assets/images/steinbeck.jpg'>", "<img class='center-block img-right' src='assets/images/kennedy.jpg'>", "<img class='center-block img-right' src='assets/images/hughes.jpg'>", "<img class='center-block img-right' src='assets/images/suess.jpg'>"];
var correctAnswers = ["A. Walt Whitman", "B. Toni Morrison", "C. Clarissa", "C. The Color Purple",
"D. John Steinbeck", "A. John F. Kennedy", "B. Langston Hughes", "D. Theodor"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
