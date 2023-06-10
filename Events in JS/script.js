// Events in JS

// i) what is onclick , onmouseover , onmouseup , onmousedown , onmousemove , onkeyup , onkeydown , onkeypress , onload , onunload ,

// onfocus , onsubmit , onchange , onresize , onblur , onmouseout

document.getElementById("mouse-events").onmouseover = function () {
  //   alert(`Mouse over event is observed`);
  console.log(`mouseover events is being observed`);
};

function func_val(id) {
  var a = 0;

  a++;

  alert(id);

  document.getElementById(id).style.color = `yellow`;

  console.log(id, a);
}

document.getElementById(`mouse-on`).onmouseup = func_val(`mouse-on`);

document.getElementById(`mouse-out`).onmouseout = func_val(`mouse-out`);

document.getElementById(`mouse-move`).onmousemove = func_val(`mouse-move`);

document.getElementById(`mouse-down`).onmousedown = function () {
  var k = 0;

  k += 2;

  console.log(`mousedown`, k);
};

document.getElementById(`on-change`).onchange = function () {
  console.log(`on chnage event is being observed `);
};

document.getElementById(`submit-btn`).onsubmit = function () {
  alert(`submit btn is being pressed`);
};

// Key events
