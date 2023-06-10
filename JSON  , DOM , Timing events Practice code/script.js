const jsonobj =
  '{ "School_name" : "D.A.V Public School" , "Year" : "2016" , "Rank":"1", "Students_Studying" : "1000"}';

// word wrap

document.write(`<h1> JSON Example </h1>`);

console.log(jsonobj);

const parsed_text = JSON.parse(jsonobj);

// console.log(parsed_text);

console.log(parsed_text);

document.write(` <b>School name = <b>` + parsed_text.School_name);
document.write(`<br>Year = ` + parsed_text.Year);
document.write(`<br>Rank = ` + parsed_text.Rank);
document.write(`<br>Students Studying = ` + parsed_text.Students_Studying);


