// Timing Events ]

// The window object allows the execution of code at certain time intervals

// setTimeout(function, milliseconds)

let timeout = setTimeout(() => console.log(`Set Timeout is called`), 5000); // called after 5 seconds

// executes a function only once after waiting  a specified number of milliseconds

clearTimeout(timeout); // to stop the setTimeout function

// setInterval(function, milliseconds)

let timer = setInterval(
  () => console.log(`Set Interval is called after every 2 seconds`),
  2000
);

clearInterval(timer); // it is the function to stop the setInterval function

// Same as setTimeout(), but repeats the execution of the function continuously.

// --------------------------------------------------------------------------------------------------------------------------------------

// Callback functions

// Callback function can run after one function has been finsihed , As JS is single threaded , so we can't block the thread or call stack

// A callback function is passed as argument to a function , this technique allows one function to call another function

// & it is executed after one fucntion has finished its functioning

//JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

// Lets understand callback with some examples

// 1.

//You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result:

function displayer(sum) {
  console.log(sum);
}

function calculator(x1, x2) {
  let sum = x1 + x2;

  return sum;
}

let sum = calculator(10, 12.7473);

displayer(sum);

// 2.

//you could call a calculator function (myCalculator), and let the calculator function call the display function (myDisplayer):

function displayer1(sum) {
  console.log(sum);
}

function calculator1(x1, x2) {
  let sum = x1 + x2;

  displayer1(sum);
}

calculator1(10, 23902.1);

// 3. using callback

//The problem with the first example above, is that you have to call two functions to display the result.

// The problem with the second example, is that you cannot prevent the calculator function from displaying the result.

// Now it is time to bring in a callback.

// Advantage of callback function i.e 3rd example

function displayer2(sum) {
  console.log(sum);
}

function calculator2(x1, x2, callback) {
  let sum = x1 + x2;

  callback(sum);
}

calculator2(10, 25, displayer2);

//Using a callback, you could call the calculator function (myCalculator) with a callback (myCallback),
//and let the calculator function run the callback after the calculation is finished:

// Now take a look at good exmaple of callback function

let counter = 0;

setTimeout(function () {
  console.log(counter++);
  console.log(`set timer function is executing`);
}, 5000);

function x(y) {
  console.log(`x`);
  y();
}

x(function y() {
  console.log(`y`);
});

// See here firstly setTimeout will execeute , but result will be displayed after 5 sec , f1 -> there will wait for 5 sec

// Then x is called in which y is a callback function , so firstly x will execute after it will finished , y will execute & after that

// function in timeout will execute , JS will not wait for 5sec to excute first function , instead control goes to next one

// i.e function 1 will get pushed in call stack firstly(but it will not excute the function ) , then x will go (it wiil excute get popped from call stack) ,

// after that y function will go in execution context & get executed & popped out from it , lastly after completoion

// of 5 sec f1 will execute completely & get popped , now call stack is empty
