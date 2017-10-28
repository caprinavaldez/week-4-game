// At start of game, each crystal is assigned a value btwn 1-12 randomly
// User clicks on a crystal to get started
// Clicking a crystal will add to user's total score
// On first click, comp chooses & shows random # btwn 19-120
// User wins if their # matches winning #
// User loses if their # goes over winning #
// If user win, add 1 point to win
// If user lose, add 1 point to lose 
// When user win/lose, comp chooses a new # & crystal values change
// Win/Lose scores will remain

$(document).ready(function() {

	var win = 0;
	var lose = 0;
	var userScore = 0;
	var winningNumber; 
	var imgValue1;
	var imgValue2;
	var imgValue3;
	var imgValue4;

	//game reset
	function gameReset() {
		userScore = 0;	
		generateWinNumber();
		generateCrystalValue();
	}

	// function to generate random winning number btwn 19-120
	function generateWinNumber() {
		winningNumber = Math.floor((Math.random() * 120) + 19);
		console.log("Winning Number: " + winningNumber);
		$("#winning-number").html("Winning Number: " + winningNumber);
	}

	// function to generate each crystal to a value btwn 1-12
	function generateCrystalValue() {
		imgValue1 = Math.floor((Math.random() * 12) + 1);
		imgValue2 = Math.floor((Math.random() * 12) + 1);	
		imgValue3 = Math.floor((Math.random() * 12) + 1);
		imgValue4 = Math.floor((Math.random() * 12) + 1);
		console.log("Crystal 1: " + imgValue1);
		console.log("Crystal 2: " + imgValue2);
		console.log("Crystal 3: " + imgValue3);
		console.log("Crystal 4: " + imgValue4);
	}

	//function to determine win/lose values
	function gameValue() {
		if (userScore === winningNumber) {
			alert("YOU GOT IT!");
			win++;
			$("#Game-win").html("Wins: " + win);
			gameReset();
		}

		else if (userScore > winningNumber) {
			alert("Too bad, so sad :(");
			lose++;
			$("#Game-lose").html("Losses: " + lose);
			gameReset();
		}
	}

	gameReset();

	// user score updates w/ value of img
	$("#img-1").on("click", function () {
		userScore = imgValue1 + userScore;
		console.log("User Score: " + userScore);
		gameValue();
		$("#userScore").html("Your Score: " + userScore);
	});

	$("#img-2").on("click", function () {
		userScore = imgValue2 + userScore;
		console.log("User Score: " + userScore);
		gameValue();
		$("#userScore").html("Your Score: " + userScore);
	});

	$("#img-3").on("click", function () {
		userScore = imgValue3 + userScore;
		console.log("User Score: " + userScore);
		gameValue();
		$("#userScore").html("Your Score: " + userScore);
	});

	$("#img-4").on("click", function () {
		userScore = imgValue4 + userScore;
		console.log("User Score: " + userScore);
		gameValue();
		$("#userScore").html("Your Score: " + userScore);
	});

	// winningNumber = this.value
	// $("#winning-number").html("Winning Number: " + this.value)	

});