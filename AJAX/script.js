// to request data , xmlhttpRequest objects are used , (xhr objects)

// open & send methods are  used

// AJAX Helps in fetching data asynchrously , without interfering with existing page

// No page load/refresh

// Its not a programming language

// Modern websites uses JSON data

// Client Server Archictecture

console.log(`AJAX Tutorial is started`);

document.getElementById(`Fetch-button`).addEventListener(`click`, fetch_func);

// fetching  the data in the   server

function fetch_func() {
  // You have clicked fetch button

  console.log(` You have clicked fetch button`);

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    console.log(this.readyState);
  };

  //============================================================================================================

  // xhr -> is XML HTTP Request object is created

  xhr.open("GET", "shivam.txt", true);

  // above is used to open the object i.e file (texts.txt) that has to displayed , using GET Method (will explain more about)

  // 3rd parameter is for opening the data in asynchrous way(true)  or synchronous way(false)

  xhr.open(`GET`, `https://dummyjson.com/products/search?q=Laptop`, true);

  // Inserting the file url

  //-------------------------------------------------------------------------------------------------

  // If we will give file , which does not exists , then it will come status of 4XX

  //   xhr.open(`GET`, `SK.txt`, true); //Output ->  GET http://127.0.0.1:5500/SK.txt 404 (Not Found)

  //-------------------------------------------------------------------------------------------------------

  // Checking for the readystate values

  xhr.onreadystatechange = function () {
    console.log(this.readyState);
  };

  // Ready state have values ranging from 0-4

  //   onreadystatechange	Defines a function to be called when the readyState property changes
  // readyState	Holds the status of the XMLHttpRequest.
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  //--------------------------------------------------------------------------------------------------

  //   // For checking progress

  xhr.onprogress = function () {
    console.log(` On Progress`);
  };

  //------------------------------------------------------------------------------------------------

  // On loading of the data

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(this.responseText);
    } else {
      console.log(`Some error occurs`);
    }

    // this is xhr object here
  };
  //--------------------------------------------------------------------------------------------------
  //

  xhr.send();

  //GET - Requests data from a specified resource

  console.log(`We  are done`);

  // sending the request
}

//-------------------------------------------------------------------------------------------------------

// Fetching the data using POST Method

function fetch_func_POST_Method() {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
  };

  xhr.open(`POST`, `https://dummy.restapiexample.com/api/v1/create`, true);

  xhr.getResponseHeader(`Content-type`, `application/x-www-form-urlencoded`);

  xhr.onprogress = function () {
    console.log(`on progress`);
  };

  xhr.onload = function () {
    if (xhr.status === 200 && xhr.readyState === 4) {
      console.log(`Response is ready`);

      console.log(this.responseText);
    } else {
      console.log(`error ocurred`);
    }
  };
  const str = '{"name":"test12323","salary":"123","age":"23"}';

  //POST - Submits data to be processed to a specified resource

  // Every time the name value i.e id here should be different in POST Method
  xhr.send(str);
}

// -------------------------------------------------------------------------------------------------------------

//  Now displaying employee list without loading of web page , Beauty of AJAX

document
  .getElementById(`Display-button`)
  .addEventListener(`click`, show_response);

function show_response() {
  // You have clicked fetch button

  console.log(` You have clicked fetch button`);

  const xhr = new XMLHttpRequest();

  //============================================================================================================

  xhr.open(`GET`, `employee_json.txt`, true);

  xhr.onprogress = function () {
    console.log(` On Progress`);
  };

  //------------------------------------------------------------------------------------------------

  // On loading of the data

  xhr.onload = function () {
    if (xhr.status === 200) {
      let parsed_data = JSON.parse(this.responseText);

      parsed_data = parsed_data.data;

      console.log(parsed_data, `editor is shivam kumar`);

      console.log(`Result part is done`, parsed_data.length);

      // parsed_data is in the form of array here

      for (var i = 0; i < parsed_data.length; i++) {
        let element = document.createElement(`li`);
        var str = "";
        for (var keys in parsed_data[i]) {
          // keys are id , employee name ,salary , age , profile pic

          str += `  ` + keys + ` : ` + parsed_data[i][keys] + `   ,   `;
        }
        element.innerHTML = str;
        document.getElementById(`display-list`).appendChild(element);
      }
    } else {
      console.log(`Some error occurs`);
    }

    // this is xhr object here
  };
  //--------------------------------------------------------------------------------------------------

  xhr.send();

  //GET - Requests data from a specified resource

  console.log(`We  are done`);

  // sending the request
}
