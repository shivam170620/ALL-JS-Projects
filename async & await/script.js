// Async & Await

// async function func() {
//   return 7;

//   // async function always return promise
// }

// func().then(function (value) {
//   console.log(value);
// });

// parllel execution of the 3 promises

async function WTC_Final() {
  let aus_batting = new Promise(function (resolve, reject) {
    setTimeout(
      () =>
        resolve(
          `Australia scored 469 in their first innings -> this is promise 1 `
        ),
      3000
    );
  });

  let ind_batting = new Promise(function (resolve, reject) {
    setTimeout(
      () =>
        resolve(
          `India scored 296 with help of rahane gritty 89 -> this is promise 2`
        ),
      6000
    );
  });

  console.log(`Australia 1st inning card:`);

  let aus_score = await aus_batting.then(function (value) {
    console.log(value);
  });

  console.log(aus_score);
  console.log(`India 1st inning batting card `);

  let ind_score = await ind_batting.then(function (value) {
    console.log(value);
  });
  console.log(ind_score);

  return [aus_batting, ind_batting]; // promise is returning
}

// here without using await , what happens is ->

// Australia 1st inning card:
//  India 1st inning batting card

//Australia scored 469 in their first innings -> this is promise 1        -------> after 3 seconds
// India scored 296 with help of rahane gritty 89 -> this is promise 2   ---------> after 6 seconds

// Both promises executing parallely

//------------------------------------------------------------------------------------------------

// Using await keyword , firstly it will wait till execution of australian 1st inning card for 3 seconds ,

// then wait for another 3second (total 6 second) then it will do the execution of indian 1st inning card.

// WTC_Final().then((value) => {
//   console.log(value);

//   // ANS ->

//   //   (2) [Promise, Promise]
//   // 0
//   // :
//   // Promise {<fulfilled>: 'Australia scored 469 in their first innings -> this is promise 1 '}
//   // 1
//   // :
//   // Promise {<fulfilled>: 'India scored 296 with help of rahane gritty 89 -> this is promise 2'}
//   // length
//   // :
//   // 2
// });

// console.log(`WTC Final is ended`);

//------------------------------------------------------------------------------------------------------

// Current output of the above , await doing it job as first fininshing the aus 1st inning , then showing ind first inning
// but the problem is (`WTC Final is ended`)) is showing before the score card

// Australia 1st inning card:
// WTC Final is ended

// Australia scored 469 in their first innings -> this is promise 1
// script.js:42 undefined
// script.js:43 India 1st inning batting card
// script.js:46 India scored 296 with help of rahane gritty 89 -> this is promise 2
// script.js:48 undefined
// script.js:68 (2) [Promise, Promise]

//---------------------------------------------------------------------------------------------

// Lets put the WTC_final() & console.log(...) in aysnc & execute using await function

async function final_res_dec() {
  return `WTC Final is ended`;
}

async function showing_final_res() {
  let wtc_final_res = await WTC_Final();

  wtc_final_res;

  let wtc_final_res_declaration = await final_res_dec();

  console.log(wtc_final_res_declaration);
}

showing_final_res();
// Australia 1st inning card:
// Australia scored 469 in their first innings -> this is promise 1
// script.js:42 undefined
// script.js:43 India 1st inning batting card
// script.js:46 India scored 296 with help of rahane gritty 89 -> this is promise 2
// script.js:48 undefined
// script.js:118 WTC Final is ended
