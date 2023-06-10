const a = [1, 2, 3, 4, 5];

// use map to double , triple , the arr

function double(x) {
  return x * 2;
}

const doubled_arr = a.map(double);

console.log(doubled_arr);

//  use of map , filter , reduce functions

//  filter function filters the values & return the filtered objects

// whereas reduce function reduce the no. of returned objects to 1

const filtered_arr = a.filter((x) => {
  return x % 2 != 0;
});

console.log(filtered_arr);

const users = [
  { firstname: "shivam", lastname: `kumar`, age: 22 },
  { firstname: "kajal", lastname: `kumari`, age: 24 },
  { firstname: "saroj", lastname: `kumari`, age: 46 },
  { firstname: "anjali", lastname: `raj`, age: 22 },
];

const name_arr = users.map((x) => x.firstname + x.lastname);

console.log(name_arr);

const first_name_age_less_than_30 = users
  .filter((x) => x.age < 30)
  .map((x) => x.firstname);

console.log(first_name_age_less_than_30);
console.log(1);




// Functional programming 
