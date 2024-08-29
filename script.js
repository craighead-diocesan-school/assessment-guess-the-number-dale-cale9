
let resutls = [

]

function play() {
    alert("Let's play Guess the number.")
    // Gives the player a message and tells them 'Let's play guess the number.
    let userName = prompt('What is your Name?')
    // Asks the user for an input of what their name is and stores it into the variable.
    alert('Hi ' + userName + ' You can guess a number from 1-20.')
    // Gives a message to the user saying Hi and that they can guess numbers from a range between 1-20.

    const maxNum = 20
    // Gives the variable maxNum a value of 20.
    let computerNum = Math.floor(Math.random() * maxNum) + 1
    // Generates a random number between 0-20.
    let numofAttemps = 0
    let userGuess = 0
    // creates variables and initial values before being changed in the code.

    while (computerNum != userGuess) {
        //This while works only when the user's guess does not equal the computer number.
        userGuess = prompt('Guess a number')
        // Asks the user to input a number.
        userGuess = userGuess.trim()
        // The code will still work if any spaces are added before or after a guess. So this code makes sure to get rid of the spaces and work as normally.
        userGuess = Number(userGuess)
        // This makes sure the user's guess is a number.

        if (computerNum == userGuess) {
            // This code only works when the user's guess is the same as the computer
            alert('Yay, you got it. ')
            // If the user gets the number correct they get an alert saying 'Yay, you got it.
            numofAttemps = numofAttemps + 1
            // This adds an attempt to the total number of attempt
            resutls.push('\n' + userName + ' = ' + numofAttemps)
            // This code outputs to the scoreboard with the user's name and how many tries it took them to get to the final number.

        }
        else if (
            userGuess <= 20 && userGuess >= 0) {
            // This else if only works if the user's guess was wrong but was still in between the range of 0-20. 
            alert('Incorrect, try again.')
            // tells the user that their guess is wrong and to guess another number.
            numofAttemps = numofAttemps + 1
            // This adds an attempt to the total number of attempts

        }
        else if (computerNum != userGuess) {
            alert('Invaild, try again.')
            // This code only works when the user's guess isn't the computer's number, isn't in the range of 20-1 and if it is anything greater than 20 or a word instead of the number.
        }
    }
}

function showScoreboard() {

    let arraylength = resutls.length
    // The 'arraylength' keeps the length of the results array.
    let count = 0
    // Creates a variable and initial values before being changed in the code.
    let scoreboard = ''
    while (count < arraylength) {
        count = count + 1
        scoreboard = scoreboard + resutls[count] + ','
        // This adds the results to the scoreboard and separates each player's results by a comma to make it easier to read.
    }
    alert(resutls)
    // This whole code is simply used to output a scoreboard. 
} 