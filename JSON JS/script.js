// Json

// Datatype - ....

// Note :- In JSON Notation , where it will be object or array i.e JSON object or JSON array -> it will exist in key value pair
// The key & pair both will be of type string , (JSON Object or array)

// eg-:

// const texts =
//   '{  "name": "shivamkumar","profession": "SDE",   "middlename": null,   "DOB": "2001-06-17", "address": {   "city": "begusarai",   "state": "Bihar",    "Country": "India",  },"subject": ["CS", "Finance", "Management"] }';

// In JSON Object everything will be in double quotes

const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text);
obj.birth = new Date(obj.birth);

console.log(obj.name + ` is born on ` + obj.birth);

const texts =
  '{ "firstName":"shivam" , "middleName":null , "lastName":"Kumar","DOB":"2001-06-17", "subjects":["CS", "Finance"], "address":{"city":"begusarai","country":"india"}, "display": "function(){console.log(`Function is running in string format in JSON Form `);}"}';

// ----------------------------------------------------------------------------------------------------------------------

// Parsing

const parsed_texts = JSON.parse(texts);

// Parsed_texts is now in the object

console.log(parsed_texts);

parsed_texts.DOB = new Date(parsed_texts.DOB);

console.log(parsed_texts);

// Parsing Date -> Write it into string format yyyy-mm-dd
// then now convert into the Date object , after  parsing the text

// Functions are not allowed in JSON

parsed_texts.display = eval("(" + parsed_texts.display + ")");

// eval function is used for converting the string in parsed_texts into working function

console.log(parsed_texts.display());

console.log(parsed_texts);

//--------------------------------------------------------------------------------------------------------------------

// Stringify

let CSK = {
  Franchise: `Chennai`,
  Captain: `MS Dhoni`,
  Trophy: `5`,
  Opener: `Ruturaj & Conway`,
  Allrounder: `Mooen , Jaddu , D chahar`,
  Impact: `Rahane , Dube , Rayudu , Pathirana , Deshpande`,
  tagName: ` CSK Yellove`,
  final_date: `2023-05-28`,
  Reserve_date: new Date(`2023-05-29`),
  display: function () {
    console.log(
      `Function is called for showing the case of stringify function `
    );
  },
};

let JSON_string = JSON.stringify(CSK);
console.log(JSON_string);

// Storing data ,

// IN JSON , Javascript objects can be stored inform of text / string

localStorage.setItem("my_data", JSON_string); // storing the data

let txt = localStorage.getItem("my_data"); //  fetching the data inform of string

parsed_txt = JSON.parse(txt); // object

console.log(txt, parsed_txt);

// Function from a javascript object will be removed upon using stringify function

// So for restoring it , convert it into string

CSK.display = CSK.display.toString();

let CSK_Stringified = JSON.stringify(CSK);

console.log(`,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,`);

// Exceptions ---------------------------------------------------------------------------------------------------------

// IN JSON date objects are not allowed but the exception is - JSON.stringify() function will convert any dates into string.

const objject = {
  name: "John",
  today: new Date(),
  city: "New York",
  display: function () {
    console.log(`this function is tested upon stringify`);
  },
};
const myJSON = JSON.stringify(objject); // {"name":"John","today":"2023-05-31T12:10:23.299Z","city":"New York"} -> Output

console.log(myJSON);

// Here in above output , that display function is lost upon using stringify function 3

// In JSON, functions are not allowed as object values.

// The JSON.stringify() function will remove any functions from a JavaScript object, both the key and the value:

objject.display = objject.display.toString();

let stringfied_objject = JSON.stringify(objject);

console.log(stringfied_objject);

// If you send functions using JSON, the functions will lose their scope, and the receiver would have to use eval() to convert them back into functions.
