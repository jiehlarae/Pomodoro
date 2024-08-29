// Selecting DOM elements
const container = document.querySelector('.container');
const body = document.querySelector('body');
const tracker = document.querySelector('.tracker');
const buttons = document.querySelectorAll('button');
const pomo = document.querySelector('#pomo');
const shortBreak = document.querySelector('#shortBreak');
const longBreak = document.querySelector('#longBreak');
const timer = document.querySelector('.timer');
const resetBtn = document.querySelector('#resetBtn');
const startBtn = document.querySelector('#startBtn');

// Timer durations in seconds
let interval;
let times = {
    pomoTime: 25 * 60, // 25 minutes
    shortBreakTime: 5 * 60, // 5 minutes
    longBreakTime: 15 * 60 // 15 minutes
};

let trackTime = document.querySelector('#trackTime');
let trackCounter = 0;
let isPomo = false;
let currentDuration;

// Color schemes for different timer states
const colorSchemes = {
    pomo: { bodyBg: '', containerBg: '', trackerBg: '', buttonColor: '', pomoBg: '', sbBg: '', lbBg: '' },
    shortBreak: { bodyBg: '#6A9AB0', containerBg: '#8CB9C3', trackerBg: '#8CB9C3', buttonColor: '#6A9AB0', pomoBg: '#8CB9C3', sbBg: '#6A9AB0', lbBg: '' },
    longBreak: { bodyBg: '#9B6F9F', containerBg: '#B88BBE', trackerBg: '#B88BBE', buttonColor: '#9B6F9F', pomoBg: '#B88BBE', sbBg: '#B88BBE', lbBg: '#9B6F9F' }
};

// Function to apply color scheme based on the timer type
function setColor(scheme) {
    const colors = colorSchemes[scheme];
    body.style.backgroundColor = colors.bodyBg;
    container.style.backgroundColor = colors.containerBg;
    tracker.style.backgroundColor = colors.trackerBg;
    buttons.forEach(btn => btn.style.color = colors.buttonColor);
    pomo.style.backgroundColor = colors.pomoBg;
    shortBreak.style.backgroundColor = colors.sbBg;
    longBreak.style.backgroundColor = colors.lbBg;
}

// Function to set up event listeners for buttons
function buttonListener() {
    pomo.addEventListener('click', function () {
        clearInterval(interval);
        tracker.style.display = 'block';
        setColor('pomo');
        startButton(times.pomoTime, true);
        initialTime(times.pomoTime);
        resetTimer(times.pomoTime);
    });

    shortBreak.addEventListener('click', function () {
        clearInterval(interval);
        setColor('shortBreak');
        startButton(times.shortBreakTime, false);
        initialTime(times.shortBreakTime);
        resetTimer(times.shortBreakTime);
    });

    longBreak.addEventListener('click', function () {
        clearInterval(interval);
        setColor('longBreak');
        startButton(times.longBreakTime, false);
        initialTime(times.longBreakTime);
        resetTimer(times.longBreakTime);
    });
}

// Initialize button listeners
buttonListener();

// Timer functionality
function startTimer(duration, isPomodoro) {
    currentDuration = duration;
    clearInterval(interval);
    interval = setInterval(() => {
        if (currentDuration > 0) {
            currentDuration--;
            updateTimer();
        } else {
            clearInterval(interval);
            initialTime(duration);
            if (isPomodoro) {
                trackCounter++;
                trackTime.innerText = trackCounter;
            }
            showStartBtn();
        }
    }, 1000);
    hideStartBtn();
}

// Reset timer to initial time
function initialTime(duration) {
    currentDuration = duration;
    clearInterval(interval);
    updateTimer();
    showStartBtn();
}

// Update timer display
function updateTimer() {
    let minutes = Math.floor(currentDuration / 60);
    let seconds = currentDuration % 60;
    timer.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Add event listener to reset button
function resetTimer(duration) {
    resetBtn.addEventListener('click', function () {
        initialTime(duration);
    });
}

// Add event listener to start button
function startButton(duration, isPomodoro) {
    startBtn.addEventListener('click', function () {
        startTimer(duration, isPomodoro);
        isPomo = isPomodoro;
    });
}

// Show or hide start and reset buttons
function hideStartBtn() {
    startBtn.style.display = 'none';
    resetBtn.style.display = 'block';
}

function showStartBtn() {
    startBtn.style.display = 'block';
    resetBtn.style.display = 'none';
}

// Initial setup
initialTime(times.pomoTime);
startButton(times.pomoTime, true);
resetTimer(times.pomoTime);
