// scheduling a call
function helloWorld() {
    console.log("Hello World!");
}
function printSum(a, b) {
    console.log(`${a+b}`);
}

// setTimeout
setTimeout(helloWorld, 1000);
setTimeout(printSum, 1000, 10, 20);

let timer = setTimeout(helloWorld, 1000);
console.log(timer);
/*
Timeout {
  _idleTimeout: 1000,
  _idlePrev: [TimersList],
  _idleNext: [Timeout],
  _idleStart: 108,
  _onTimeout: [Function: helloWorld],
  _timerArgs: undefined,
  _repeat: null,
  _destroyed: false,
  [Symbol(refed)]: true,
  [Symbol(kHasPrimitive)]: false,
  [Symbol(asyncId)]: 4,
  [Symbol(triggerId)]: 1
}
*/
clearTimeout(timer);

// setInterval
let intervalTimer = setInterval(() => console.log('1sec'), 1000);

setTimeout(() => clearInterval(intervalTimer), 5000);

// Nested setTimeout
let delay = 500;

let networkTimer = setTimeout(function request() {
    let success = false;
    if(!success) {
        delay *= 2;
        networkTimer = setTimeout(request, delay);
    }
}, delay);