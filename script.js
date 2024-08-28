
let resutls = [

]

function play() {
    alert("Let's play Guess the number.")
    let userName = prompt('What is your Name?')
    alert('Hi ' + userName + ' You can guess a number from 1-20.')

    const maxNum = 20
    let computerNum = Math.floor(Math.random() * maxNum) + 1
    let numofAttemps = 0
    let userGuess = 0

    alert(computerNum)
    while (computerNum != userGuess) {
        userGuess = prompt('Guess a number')
        userGuess = userGuess.trim()
        userGuess = Number(userGuess)

        if (computerNum == userGuess) {
            alert('Yay, you got it. ')
            numofAttemps = numofAttemps + 1
            resutls.push('\n' + userName + '=' + numofAttemps)

        }
        else if (
            userGuess <= 20 && userGuess >= 0) {
            alert('Incorrect, try again.')
            numofAttemps = numofAttemps + 1

        }
        else if (computerNum != userGuess ){
            alert('Invaild, try again.')
        }
    }
}

function showscoreboard() {
    alert(resutls)
    

} 