// closures in JS

// Closure is the function having access to parent function , even after the function has closed

// for eg -:

function x() {
  let a = 0;

  function y() {
    a += 1;
    console.log(a);
    return a;
  }

  return y;
}

let z = x();

z();
//  Here in above , variable 'a' will be got stored in the memory ( properties of closure (beauty of JS) ) & increased by 1.

z();

// here in this case it is returning child function y , but it still has memory acces in lexic order ( a -> 1)  which will be now increased by 1

//  a -> 2

z(); // a-> value will be incerased by 1 , new value will be 3.

// EG-2

function x() {
  var a1 = 101;
  function y() {
    var b = 10991;
    return function z() {
      var c = a1 + b;
      console.log(a1, b, c);
    };

    // returning the z function
  }

  return y;

  // returning the function
}

let func_new = x()();
func_new(); // this is calling function z , but when we called it , it has stored the value of a1 , b , c has in its lexical scope ( scope )

// i.e a1 , b , c variable was accessible , this concept is called closures 
