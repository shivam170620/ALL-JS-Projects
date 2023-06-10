// JS DOM

// DOM Properties
// 1. innerHTML , attribute , style.property_name

document.getElementById(`first`).innerHTML = `<h1> First Element </h1>`;

document.getElementById(`second`).style.color = `red`;

document.getElementById(`second`).style.border = " 2px solid yellow";

// DOM Methods

// Changing element

// document.write() , document.getElementById , document.getElementByClassName , document.getElementByTagName , document.getElementById

document.write(`Using document.write property in third div `);

const x = document.getElementById(`third`); // single element

console.log(x);

const y = document.getElementsByClassName("t1"); // here y is an array , can contain multiple elements

console.log(y);

x.style.border = `5px dotted red`;

y[0].style.border = `7px dotted blue`;

// y[0].style.border = `10px solid black`;

// Differemce between getElementById & classname ->

// getElementById returns a single DOM element whose ID matches your query. getElementsByClassName returns an HtmlCollection - an array-
// like structure containing the DOM elements that matched your query. You have to iterate through each element in the array to apply your style.

const z = document.querySelectorAll(`.t2`);

// in queryselector , we have to write the class-name with its (dot .) sign , or id-name with (# sign infront of it ) or can directly use
// element name

console.log(z);

for (var i = 0; i < z.length; i++) {
  z[i].style.color = `brown`;
  z[i].style.fontSize = `28px`;
}

// document.querySelector() -> returns the first element that matches the specified CSS Selector (id/class/element/name/attribute) ,
//document,querySelectorAll() -> returns all element.

// Adding and Deleting Elements

const element = document.createElement(`p`);
element.innerHTML = `This element is created dynamically using JS createElment Function`;
document.getElementById(`second`).appendChild(element);

const new_element = document.createElement(`h2`);
new_element.innerHTML = `replaceChild function is executed using this `;
document.getElementById(`second`).replaceChild(new_element, element);

//document.createElement() , document.createText() , document.appendChild() , document.removeChild() , document.replaceChild(new , old)

// Event Handler

// element.addEventListener(event , function , useCapture) -> useCapture is optional

const btn = document.createElement(`button`);
btn.innerHTML = `Submit`;
document.getElementById(`third`).appendChild(btn);


document
  .getElementsByTagName(`button`)[0]
  .addEventListener(`click`, function () {
    alert(`EventListener Function is getting executed`);
  });

// It is used to attach eventhandler to the element
// We can add multiple eventHandler to a particular element without overriding existing ones
