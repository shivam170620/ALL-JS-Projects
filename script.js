// var arr = [];

// var show = function (text) {
//   document.getElementById(`show-to-do-list`).appendChild(text);
//   document.write(`text`);
// };

// var add_function = function () {
//   var text = document.getElementById("input-text-space").value;
//   if (text.length == 0) {
//     alert(`No texts are given `);
//     return;
//   } else {
//     arr.push(text);
//   }

//   if (arr.length == 0) {
//     alert(`Nothing left in the list`);
//     return;
//   }

//   show(text);
// };

// var delete_function = function () {
//   if (arr.length == 0) {
//     alert(`No item in list`);
//     return;
//   }

//   const myList = document.getElementById(`show-to-do-list`);
//   myList.removeChild(myList.lastElementChild);
//   arr.pop();
// };

// ---------------------------------------------------------------------------------

// on clicking close button create a close array

var close = document.getElementsByClassName(`close-btn`);

var nodeList = document.getElementsByTagName(`li`);

function add_function() {
  var li = document.createElement(`li`);

  var input_Value = document.getElementById(`input-text-space`).value;

  var text = document.createTextNode(input_Value);

  li.appendChild(text);

  if (input_Value === "") {
    alert(`Empty Textbox!!!`);
  } else {
    document.getElementById(`show-to-do-list`).appendChild(li);
  }
  // after adding it to to-do make the input space empty
  document.getElementById(`input-text-space`).value = ``;

  // create the delete button

  var btn = document.createElement(`button`);
  var text = document.createTextNode(`Delete`);
  btn.className = `close-btn`;
  btn.appendChild(text);

  // Now append the delete button in li of the to-do list

  li.appendChild(btn);

  // This is used when delete button will get clicked

  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      // make the display of the parent element of close[i] as none
      //i.e hide the current close[i]

      var curr_container = this.parentElement;
      curr_container.style.display = `none`;
    };
  }
}
