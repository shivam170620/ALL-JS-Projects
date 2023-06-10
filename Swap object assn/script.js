var student = {
  firstname: `shivam`,
  lastname: `kumar`,
  age: `21`,
  profession: `SDE`,
  // display : function()
  // {
  //     alert(`Shivam Kumar is currently working on the web dev projects `)
  // }
};

console.log(student);

// Now we have to swap of the key - value pair

console.log(student[0]); // its undefined

var swapped_func = function (student) {
  var swapped_obj = new Object();

  for (var x in student) {
    //  
    swapped_obj[student[x]] = x;
    console.log(student[x], x);
  }

  console.log(swapped_obj);

  alert(JSON.stringify(swapped_obj));
};

swapped_func(student);

// You cant use length property in the object

//  for finding out how many properties are in object -> call out simple loop
