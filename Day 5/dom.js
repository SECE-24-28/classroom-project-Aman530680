//  // 1. Tag selector - selects all elements by tag name
//       let heading1 = document.getElementsByTagName("h1");
//       console.log(heading1[1]); // logs second <h1>

//       // 2. Class selector - selects all elements by class name
//       let cl = document.getElementsByClassName("a");
//       console.log(cl[0]); // logs first element with class "a"

//       // 3. ID selector - selects single element by ID
//       let idd = document.getElementById("b");
//       console.log(idd);

//       // 4. Query selector - selects first matching element (CSS selector)
//       let sel = document.querySelector(".a");
//       console.log(sel);

//       // 5. Query all selector - selects all matching elements (CSS selector)
//       let queryAll = document.querySelectorAll(".a");
//       console.log(queryAll);

//       // Read & write operations
//       let head = document.querySelector("p");

//       // Read operation
//       console.log(head.textContent);

//       // Write operation
//       head.textContent = "This is the new paragraph content";

//       // InnerHTML manipulation
//       let div = document.querySelector("div");
//       div.innerHTML = "<p>Hello from innerHTML</p>";
//       console.log(div.textContent); // logs text only
//       console.log(div.innerHTML);   // logs HTML structure

//       // Add / Remove / Toggle class
//       div.classList.add("border");       // adds red border
//       div.classList.remove("border");    // removes red border
//       div.classList.toggle("background"); // toggles rosybrown background

//       // styling
//       let p = document.querySelector("p");
//       p.style.color="red";
//       p.style.backgroundColor= "green";

//       // creating Element
//       let 
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.querySelectorAll("input")[0];
  let feedback = document.querySelectorAll("input")[1];

  if (name.value === "") {
    alert("Name is required");
    return;
  }

  if (feedback.value.length < 5) {
    alert("Feedback must be at least 5 letters");
    return;
  }

  alert("Form submitted successfully!");
});

let result = document.querySelector("#result");

result.textContent = "theij";
