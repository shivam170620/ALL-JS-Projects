var students = [
  [`shivam`, `22`, `SDE`, `Active`],
  [`KAROL G`, `35`, `SINGER`, `Not Active`],
  [`Bad Bunny`, `36`, `Singer`],
  [`Sidhu Moosewala`, `Singer`, `295`],
];

console.log(students);

// Properties of 2-D array

// It can have array of any size , function , objects in it

// Inserting in the inside array ->
students[1].push(`Spanish`);

// Deleting the elements in the inside array
students[0].pop();

console.log(students);

// Inserting from outside array , function , objects

students.push([`Anuel AA`, `45`, `Singer`, `Latino Singer`, `Haste Que Diga`]); // array insertion

var singer = {
  name: `J Balvin`,
  Speciality: `Latino Music`,
  Hits: `Mi Gente`,
  display: function () {
    console.log(`Ginza is his best reggatton music`);
  },
};

students.push(singer); // object insertion

var new_obj = {};

var display_func = singer.display.bind(new_obj);

console.log(display_func());

students[0].push(display_func());

students[0].push(display_func); // function insertion in 2-d array
