const h1 = document.createElement("h1");
const textNode = document.createTextNode("Hello World!!!!");
h1.appendChild(textNode); // till this only h1 tag is created not shown in browser
document.body.appendChild(h1);

// Creating element i.e tag using JS , insert the texts
// inside it using JS function (createTextNode())
// Using Tag name is used to insert the texts inside it , using
//appendChild() function

let text_Node = document.createTextNode("Hello World");
document.body.appendChild(text_Node);

var close = document.getElementsByClassName("close");

console.log(close);
