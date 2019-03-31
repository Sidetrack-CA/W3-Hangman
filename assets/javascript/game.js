


// Put all of the inital setup into a startover function and call it for game to restart

// Setup the basic scoring variable
var wins = 0;
var losses = 0;

function restart() {
    var guessesLeft = 13;
    var guesses = [];
    guesses = []; // This clears the array before the game starts
    document.getElementById("showLettersguessed").innerHTML = "Letters Guessed: " + guesses; // this puts the value of the blank array on the screen, essentially using it to clear the letters guessed



    // Setup the variables that allow the code to pick a random letter (Computer Choice)
    var letters = "abcdefghijklmnopqrstuvwxz";
    var randomLetter = letters[Math.floor(Math.random() * (letters.length - 1))];
    console.log("Computer Choice " + randomLetter); // show the computers random letter in the console log

    // Show the Starting Variables in the HTML Page
    document.getElementById("showWins").innerHTML = "Wins: " + wins;
    document.getElementById("showLosses").innerHTML = "Losses: " + losses;
    document.getElementById("showGuessesleft").innerHTML = "Guesses Left: " + guessesLeft;

    // Grab the users choice when they push a key
    document.onkeyup = function (event) {
        var currentGuess = event.key.toLowerCase();
        console.log("User Choice " + currentGuess); // Just a way for me to check what the users key choice is

        // Adds current guessed key to the array guesses
        guesses.push(currentGuess);




        // Display this message and show the wins on the HTML Page
        if (currentGuess === randomLetter) {
            alert("Winner Winner");
            wins++;
            document.getElementById("showWins").innerHTML = "Wins: " + wins;
            restart();
        }
        // If the user runs out of guesses then run this function to incremenmt the losses and reset the game buy clearing the variables
        else if (guessesLeft < 2) {
            console.log("Guesses: " + guessesLeft);
            alert("You're out of guesses, lets start again");
            losses++;
            document.getElementById("showLosses").innerHTML = "Losses: " + losses;
            restart();
        }
        // If the user guesses a letter thats not the winning one but still has guesses left. decrease guesses left and show guesses left on html page
        else {
            guessesLeft -= 1;
            document.getElementById("showGuessesleft").innerHTML = "Guesses Left: " + guessesLeft;

            // Takes the array guesses and seperates all entered values with , and a space
            currentGuess = guesses.join(", ");
            document.getElementById("showLettersguessed").innerHTML = "Letters Guessed: " + guesses;
        }
    }
}
restart();