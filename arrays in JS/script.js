var arr = new Array();

arr[0] = `shivam`;
arr[1] = `kajal`;
arr[2] = `kalam`;

arr.push(`shekhar`);

arr.push(`ram`);

console.log(arr);

arr.pop();

console.log(arr);

arr.shift();

arr.unshift(`jitesh`);

console.log(arr.length);

console.log(arr);

console.log(arr.indexOf("kalam"));

console.log(arr.indexOf("jittttttesh"));

var new_arr = [
  `HTML`,
  `CSS`,
  `JS`,
  `EXPRESS`,
  `NODE`,
  `REACT`,
  "MONGODB",
  `REDUX`,
];

var third_arr = new_arr.concat(arr);

console.log(third_arr);

// sort(third_arr);

// console.log(third_arr.isArray(`kalam`));

// console.log(third_arr.isArray(`kabir`));

console.log(third_arr);

for (let x of third_arr) {
  // here x is elements of the array , in this case
  if (x == `kalam` || x == `shivam` || x == `MONgodb`) {
    console.log(x, 1);
  } else {
    console.log(x, -1);
  }
}

for (x in third_arr) {
  // here x is reoresenting the index  of the array
  if (x >= 0 && x < 3) {
    console.log(`index 0 - 2 is present`);
  } else {
    console.log(`Kuch Nahi kaam ho gya be`);
  }
}

var B = [1, , 2, , 3];

console.log(B);
