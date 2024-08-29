# Pomodoro Timer Project

This project involves creating a Pomodoro Timer application using HTML, CSS, and JavaScript. The goal was to develop a functional timer that helps users manage their work and break intervals effectively. The timer features options for Pomodoro sessions, short breaks, and long breaks, with a visually appealing interface styled using CSS Flexbox.

## Table of Contents
- [Overview](#overview)
- [Screenshot](#screenshot)
- [Links](#links)
- [Built With](#built-with)
- [What I Learned](#what-i-learned)
- [Continued Development](#continued-development)
- [Author](#author)

## Overview
The Pomodoro Timer application is designed to help users follow the Pomodoro Technique, which involves working for 25 minutes and taking short breaks. This project includes functionalities for starting, resetting, and switching between Pomodoro sessions, short breaks, and long breaks. The layout is created using Flexbox for a responsive and user-friendly interface.

## Screenshot
![Pomodoro Timer Screenshot](/sc.png)

## Links
- Solution URL: [(https://github.com/jiehlarae/Pomodoro.git)]
- Live Site URL: [(https://jiehlarae.github.io/Pomodoro/)]

## Built With
- Semantic HTML5 markup
- CSS Flexbox for layout and styling
- JavaScript for timer functionality and event handling

## What I Learned
This project enhanced my understanding of managing application state and user interactions using JavaScript. I learned how to implement a timer that updates every second and manage different timer states for Pomodoro, short breaks, and long breaks. Additionally, I explored dynamic styling based on the active timer state and improved my skills in manipulating the DOM and handling user events.

```javascript
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
```

## Continued Development
I plan to enhance the Pomodoro Timer by adding features such as notifications when the timer ends and a visual indication of completed Pomodoro sessions. Exploring additional user interface improvements and integrating advanced functionalities like task tracking are also on my agenda. I aim to refine my JavaScript skills and further develop my knowledge of CSS for creating more dynamic and responsive designs.

### Author
- *Github:* [@jiehlarae](https://github.com/jiehlarae)
- *X:* [@JiehlaDacara](https://x.com/JiehlaDacara)


