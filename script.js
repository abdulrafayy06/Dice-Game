
// Get the modal
let player1Name, player2Name;
let player1Score = 0, player2Score = 0;
let currentPlayer = 1;
let pictures = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];


//Start Game function
function startGame() {
    player1Name = document.getElementById('player1Name').value.toUpperCase();
    player2Name = document.getElementById('player2Name').value.toUpperCase();

    // Check if both player names are entered
    if (!player1Name || !player2Name) {
        showPopup('Please enter both player names');
        return;
    }

    // Hide the start button and show the game area
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('gameArea').style.display = 'block';
    document.getElementById('currentPlayer').innerText = `${player1Name}'s Turn`;

    // Show both players' scores
    document.getElementById('player1Score').innerText = `${player1Name}'s Score: ${player1Score}`;
    document.getElementById('player2Score').innerText = `${player2Name}'s Score: ${player2Score}`;
    // Hide restart button
    document.getElementById('restartButton').style.display = 'none';
}


//Roll Dice function
function rollDice() {

    // Generate a random number between 1 and 6
    let diceRoll = Math.floor(Math.random() * 6) + 1;

    // Display the dice roll with the corresponding image
    document.getElementById('diceImage').src = pictures[diceRoll - 1];
    document.getElementById('diceScore').innerText = `Dice Roll: ${diceRoll}`;

    if (diceRoll === 1) {
        switchPlayer();
    } else {
        if (currentPlayer === 1) {
            player1Score += diceRoll;
            document.getElementById('player1Score').innerText = `${player1Name}'s Score: ${player1Score}`;

            // Check if player 1 has won
            if (player1Score >= 50) {
                endGame(player1Name);
            }
        } else {
            player2Score += diceRoll;
            document.getElementById('player2Score').innerText = `${player2Name}'s Score: ${player2Score}`;

            // Check if player 2 has won
            if (player2Score >= 50) {
                endGame(player2Name);
            }
        }
    }
}

//Switch Player function
function switchPlayer() {
    if (currentPlayer === 1) {
        currentPlayer = 2;
    } else {
        currentPlayer = 1;
    }
    if (currentPlayer === 1) {
        document.getElementById('currentPlayer').innerText = `${player1Name}'s Turn`;
    } else {
        document.getElementById('currentPlayer').innerText = `${player2Name}'s Turn`;
    }

    /*
        ALTERNATE WAY TO SWITCH PLAYERS
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        document.getElementById('currentPlayer').innerText = currentPlayer === 1 ? `${player1Name}'s Turn` : `${player2Name}'s Turn`;
    */
}

function endGame(winner) {
    // Hide all game elements
    document.getElementById('currentPlayer').style.display = 'none';
    document.getElementById('diceScore').style.display = 'none';
    document.getElementById('rollDiceButton').style.display = 'none';

    // Show the winner and restart button
    showPopup(`${winner} WINS!`);
    document.getElementById('winner').innerText = `${winner} Wins!`;
    document.getElementById('winner').style.display = 'block';
    document.getElementById('restartButton').style.display = 'block';
}

function restartGame() {
    // Reset scores and current player
    player1Score = 0;
    player2Score = 0;
    currentPlayer = 1;

    // Reset player names
    document.getElementById('player1Name').value = '';
    document.getElementById('player2Name').value = '';
    // Show the start button
    document.getElementById('start-button').style.display = 'block';

    // Hide the game area and winner message
    document.getElementById('gameArea').style.display = 'none';
    document.getElementById('winner').style.display = 'none';
    document.getElementById('rollDiceButton').style.display = 'inline';
    document.getElementById('restartButton').style.display = 'none';
}

//Popup function
function showPopup(message) {
    document.getElementById('popupMessage').innerText = message;
    document.getElementById('popup').style.display = 'flex';
}


//Close Popup function
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
