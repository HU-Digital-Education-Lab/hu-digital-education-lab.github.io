var timers = [0, 0, 0, 0, 0];
var curPlayer = 0;
var playing = false;
var timerInterval = null;

function updateTimer(playerNumber, value) {
    timers[playerNumber] += value;
    var playerElement = document.querySelector('#player-' + playerNumber);
    playerElement.querySelector('.score').innerHTML = timers[playerNumber];
}

function countdownTimer() {
    if (timers[curPlayer] > 0) {
        updateTimer(curPlayer, -1);
    }
}

function pause() {
    if (!playing) {
        timerInterval = setInterval(countdownTimer, 1000);
        document.getElementById('buttonPause').innerHTML = 'Pauze';
    }
    else {
        clearInterval(timerInterval);
        document.getElementById('buttonPause').innerHTML = 'Start';
    }
    playing = !playing;
}

function nextPlayer() {
    document.querySelector('#player-' + curPlayer).classList.remove('active');

    curPlayer++;
    if (curPlayer >= timers.length) {
        curPlayer = 0;
    }

    document.querySelector('#player-' + curPlayer).classList.add('active');
}
