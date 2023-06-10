//  what is promises ?

// ans ->  Its solution to callback hell , its a promise of code execution .

// either it will resolve or reject , in both cases subscriber will notified .

// using .then , .catch

let p1 = new Promise(function (resolve, reject) {
  console.log(`Promises is started to execute `);

  setTimeout(() => console.log(`Promise is rejecetd`), 3000);

  // asynchronicity of set Timeout

  //   resolve(`promise  is resolved`);

  reject(new Error(`Promise is rejected`));
});

p1.catch(function (value) {
  console.log(
    `in showing error, as promise is rejecetd , .catch function is used instead of .then`
  );
});

p1.then(
  function (value) {
    console.log(`Resolved : `);
    console.log(value);
  },
  function (error) {
    console.log(`Showing Error : `);
    console.log(error);
  }
);

p1; // -> output Promises is started to execute  ,  Resolved : , promise  is resolved , Promise is successfully resolved

// resolve(value) -> notifies when job is finished successfully & returns the "value";

// reject(error) -> notifies when job is failed

//----------------------------------------------------------------------------------------------------------------

// why promises ?

// parallel execution or using asynchronous behaviour , solution to callback hell

// Object created by new Promise() -> has 2 properties

// state -> intially pending , fulfilled if resolved  , rejected if failed

// result -> intially undefined in pending state , then changes to value if resolved & error if rejected.

//-------------------------------------------------------------------------------------------------------

// if you  are running 10 prommises which are coded next to one another , all will execute simultaneously

//-----------------------------------------------------------------------------------------------------------

// Now lets look into a  illustration  of some more concepts of promises

// resolve &  reject are 2 callback functions provided by js engine

// Waiting for Timeout

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => console.log(`Currently learning Promises in JS `), 3000);
  resolve(20394);
});

let element = document.createElement(`div`);

element.innerHTML = `I l u `;
document.body.appendChild(element);

promise.then(function (value) {
  console.log(value);
  alert(`checking alert calls in code `);
  let element = document.createElement(`div`);

  element.innerHTML = value;
  document.body.appendChild(element);
});

// waiting for file using promise
// let myPromise = new Promise(function (myResolve, myReject) {
//   let req = new XMLHttpRequest();
//   req.open("GET", "shivam.txt", true);
//   req.onload = function () {
//     if (req.status == 200) {
//       myResolve(req.response);
//     } else {
//       myReject("File not Found");
//     }
//   };
//   req.send();
// });

// myPromise.then(
//   function (value) {
//     console.log(value);
//     document.write(value);
//   },
//   function (error) {
//     console.log(error);
//     document.write(error);
//   }
// );

// Promise chaining

// 1.

let P = new Promise(function (resolve, reject) {
  setTimeout(resolve(1), 2000);
});

P.then(
  function (value) {
    console.log(value);
    return value * 2;
  },
  function (error) {
    console.log(error);
  }
)
  .then(function (value) {
    console.log(value);
    return value * 2;

    // in this return some value to .then is similar to creating a new promise which is successfully resolved having value = (value * 2)
  })
  .then((value) => alert(value));

P;

// 2. This below f_promise is not promise chaining

let f_promise = new Promise(function (resolve, reject) {
  setTimeout(resolve(1), 2000);
});

f_promise.then(
  function (value) {
    console.log(value);
    alert(value * 18);
    return value * 2;
  },
  function (error) {
    console.log(error);
  }
);

f_promise.then(function (value) {
  console.log(value);
  return value * 2;
});

f_promise.then(function (value) {
  alert(value);
});

f_promise;

// Creating promises in every .then  , similar to first promise chainig , instead of returning in .then we are

// creating a new promise & returning it

let new_P = new Promise(function (resolve, reject) {
  setTimeout(resolve(16), 2000);
});

new_P
  .then(
    function (value) {
      console.log(value);
      return new Promise(function (resolve, reject) {
        console.log(
          value * 2 +
            ` in the new Promise chaining where every return promise is created`
        );
        resolve(value * 2);
      });
    },
    function (error) {
      console.log(error);
    }
  )
  .then(function (value) {
    console.log(value);
    return new Promise(function (resolve, reject) {
      console.log(
        value * 2 +
          ` in the new Promise chaining where every return promise is created`
      );
      resolve(value * 2);
    });

    // in this return some value to .then is similar to creating a new promise which is successfully resolved having value = (value * 2)
  })
  .then((value) => alert(value));

P;

new_P;

// Using promise in the loadscript
