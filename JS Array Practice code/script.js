var arr = new Array(`Patna`, `London`, `Delhi`, `Pune`);

for (var x of arr) {
  if (x.length >= 5) {
    console.log(x);
  }
}

arr.pop();

var x = arr.indexOf(`London`);

var y = arr.indexOf(`Bangalore`);

alert(x);
alert(y);
