
let introString = "5.1 Program Structure";
let breakPara = "/////////////////////////////////";
let testOneString = "Test 1: Looping a Triangle";
let testTwoString = "Test 2: FizzBuzz";
let testThreeString = "Test 3: ChessBoard";

function run() {

	console.log(introString);
	console.log(breakPara);
	console.log(testOneString);

	////////////////////////////////
	////// LOOPING A TRIANGLE //////

	/// My First Go ///

	for (let i = "#"; i < 10; i++) {
		console.log("Triangle test: " + i);
	}

	console.log(breakPara);

	/// Didnt Work ///
	/// New Iteration after checking example ///

	for (let l = "#"; l.length < 35; l += "#") {
		console.log(l);
	}

	console.log(breakPara);

	// More testing
	// Playing around

	let w = "333"
	const MAXNUM = 20;

	for (w; w.length < MAXNUM ; w += "12") {
		console.log(w);
	}

	console.log(breakPara);

	console.log(testTwoString);

	var u;

	// My first Attempt


	for (u = 0; u < 100; u++) {

		if(u % 3) {
			console.log("Fizz");
		}

		if (u % 5) {
			console.log("Buzz");
		}

		console.log(u);
	}

	for (var i = 0; i <= 30; i++) {
		var output = "";
		if (i % 3 == 0) 
			output = "Fizz";
		if (i % 5 == 0)
			output = "Buzz";

		console.log(i);
	}

	for(let n = 1; n <= 100; n++) {

		var output = "";
		if (n % 3 == 0) 
			output += "Fizz";
		if (n % 5 == 0)
			output += "Buzz";


		console.log("n: " + n + " FB: " + output);
	}

	console.log(breakPara);
	console.log(testThreeString);

	var squaresX = 10;
	var squaresY = 10;

	for (let i = 0; i < squaresX; i++) {
		console.log(i);
	} 	

	//Example from Eloquent JS code

	var size = 40;
	var board = "";

	for (var y = 0; y < size; y++) {
		for (var x = 0; x < size; x++) {
    		if ((x + y) % 2 == 0)
      			board += " ";
    		else
      			board += "#";
  		}
  	board += "\n";
	}

	console.log(board);

}

