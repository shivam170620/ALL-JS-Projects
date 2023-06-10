// Functional programming -> It is the way through we can reduce code redundancy

// make high order functions , then we can use them in function ( that we can have different logic , & single function which will produce

// result on basis of logic )

let name = {
  firstName: "shivam",
  lastName: "kumar",

  //   inside the printname function , there should be use of " this " keyword
  // accessing the object

  printName: function () {
    console.log(this.firstName + this.lastName);
  },
};

let name2 = {
  firstName: `Kajal`,
  lastName: `Kumari`,
};

let print_name = function (village, district, state) {
  console.log(
    this.firstName +
      this.lastName +
      `belongs to` +
      village +
      `,` +
      district +
      `,` +
      state
  );
};

document.write(name.printName());

name.printName();

// Now use call  function

print_name.call(name, `Gadhpura`, `Begusarai`, `Bihar`);

// console.log(<br></br>);

// using of call function -> just pass the object & arguments

// we can use apply function -> in that we will be passing objects , & all arguments in the form of array

// thats the only diff between call function & apply function

print_name.apply(name, [`Gadhpura`, `Begusarai`, `Bihar`]);

// use of bind function -> In call & apply function -> it invokes the function & returns the required result

// whereas in the bind function , it will make a copy of it.

let print_name_function_bind = print_name.bind(
  name,
  `Gadhpura`,
  `Begusarai`,
  `Bihar`
);

console.log(print_name_function_bind);

print_name_function_bind();

let print_function_for_name2_using_bind = name.printName.bind(name2);

console.log(print_function_for_name2_using_bind);

print_function_for_name2_using_bind();
