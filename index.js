(function () {
  'use strict';
  let stopLight = document.getElementById('stopLight');
  let slowLight = document.getElementById('slowLight');
  let goLight = document.getElementById('goLight');

  let stopButton = document.getElementById('stopButton');
  let slowButton = document.getElementById('slowButton');
  let goButton = document.getElementById('goButton');

})();

stopButton.addEventListener('click', () => {
  if (stopLight.style.backgroundColor === 'red') {
    stopLight.style.backgroundColor = 'black';
  } else {
    stopLight.style.backgroundColor = 'red';
  }
})

slowButton.addEventListener('click', () => {
  if (slowLight.style.backgroundColor === 'yellow') {
    slowLight.style.backgroundColor = 'black';
  } else {
    slowLight.style.backgroundColor = 'yellow';
  }
})

goButton.addEventListener('click', () => {
  if (goLight.style.backgroundColor === 'green') {
    goLight.style.backgroundColor = 'black';
  } else {
    goLight.style.backgroundColor = 'green';
  }
})

stopButton.addEventListener('mouseenter', (e) => {
  console.log(`Entered ${e.target.textContent} button.`)
})
stopButton.addEventListener('mouseleave', (e) => {
  console.log(`Left ${e.target.textContent} button.`)
})

slowButton.addEventListener('mouseenter', (e) => {
  console.log(`Entered ${e.target.textContent} button.`)
})
slowButton.addEventListener('mouseleave', (e) => {
  console.log(`Left ${e.target.textContent} button.`)
})

goButton.addEventListener('mouseenter', (e) => {
  console.log(`Entered ${e.target.textContent} button.`)
})
goButton.addEventListener('mouseleave', (e) => {
  console.log(`Left ${e.target.textContent} button.`)
})













