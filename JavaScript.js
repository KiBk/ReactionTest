/**
 * Created by Kirill on 10-Apr-17.
 */
function timeSet(value) {
    document.getElementById('timeId').innerHTML = 'You time: ' + value / 1000 + 's';
};

function randomVerticalPosition() {
    return Math.floor(Math.random() * 200) + 'px';
}

function randomHorizontalPosition() {
    return Math.floor(Math.random() * 500) + 'px';
}

function randomShape() {
    if (Math.random() > 0.5) {
        return '50%';
    } else {
        return '0%';
    }
}

function randomSize() {
    return Math.floor(Math.random() * 100 + 50) + 'px';
}

function randomColor() {
    var colorDictionary = {0:'blue',1:'red',2:'yellow',3:'brown',4:'green'};
    return colorDictionary[Math.floor(Math.random() * 5)]
}

function randomDelay() {
    return Math.floor(Math.random() * 900 + 100);
}

var alreadyBest = 1000;

function bestTime(newTime) {
    if (newTime < alreadyBest) {
        document.getElementById('bestId').innerHTML = 'Your best time: ' + newTime / 1000 + 's';
        alreadyBest = newTime;
    }
}

var date = new Date();
var globalTime = date.getTime();

document.getElementById('moving').onclick = function () {
    document.getElementById('moving').style.display = 'none';
    var date = new Date();
    var timeDifference = date.getTime() - globalTime;
    bestTime(timeDifference);
    timeSet(timeDifference);
    setTimeout(afterTimer, randomDelay());
};

function afterTimer() {
    document.getElementById('moving').style.display = 'block';
    document.getElementById('moving').style.backgroundColor = randomColor();
    document.getElementById('moving').style.borderRadius = randomShape();
    document.getElementById('moving').style.marginLeft = randomHorizontalPosition();
    document.getElementById('moving').style.marginTop = randomVerticalPosition();
    var size = randomSize();
    document.getElementById('moving').style.height = size;
    document.getElementById('moving').style.width = size;
    var date = new Date();
    globalTime = date.getTime();
}