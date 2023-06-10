var student = {
  name: `shivam kumar`,
  age: `21`,
  profession: `SDE`,
  21: 1000,
  display: function () {
    console.log(this.name);
    console.log(this[21]);

    // this keyword refers to the object
  },
};

delete student.name;

alert(JSON.stringify(student)); // this is for showing alert to the browser display of the objects

let updateVariable = function (x) {
  x.age = `23`;
};

console.log(student);

updateVariable(student);

console.log(student);

student.display();
student.display;

// constructor for object initialisation

function studentStructure(name, age, gender, profession) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.profession = profession;
  this.display = function () {
    console.log(
      this.age,
      "display function of studentStructure is being executed"
    );
  };
}

var student2 = new studentStructure();

console.log(student2);

console.log(student2.display);

console.log(student2.display());

console.log(student["name"]);

var mp = new Map();

mp.set("name", "Shivam Kumar");
mp.set("age", 21);
mp.set("gender", "male");
mp.set(2023, "graduation");

// map can have key value pair , has any of the data type i.e one key value pair has data type string . while other has datatype as
// number , string

console.log(mp.length, mp, mp.has(2023, `graduation`), mp.get(`age`));

mp.clear();

console.log(mp);

// write a function such that we can generate the copy of the object i.e key - values are swapped of the original object

var swapped_student_obj = function (student) {
  var swapped_student = new Object();
  for (var x of student) {
    swapped_student[student[x]] = x;
  }

  console.log(swapped_student);
};

swapped_student_obj(student);
