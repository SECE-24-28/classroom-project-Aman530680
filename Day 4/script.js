console.log("Hello world");

console.log(a);
var a = 10;
console.log(a);

function testScope() {
  var x = 5;
  console.log("Inside function:", x);
}
testScope();

let b = 20;
b = 130;
console.log(b);

const c = 40;
console.log(c);

function greet() {
  return "Hello!";
}
console.log(greet());

const greetAnon = function () {
  return "Hi there!";
};
console.log(greetAnon());

let arrow = () => {
  console.log("arrow functiono call ");
};

arrow();

function num(n, callback) {
  return callback(n);
}

const double = (n) => n * 2;

console.log(num(5, double));

const addAndLog = (parameter1, parameter2) => {
  const a = parameter1;
  const b = parameter2;
  const sum = a + b;
  console.log(sum);
};

addAndLog(2, 30);
addAndLog(20, 30);

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function mod(a, b) {
  return a % b;
}
console.log("add", add(10, 5));
console.log("subtract", subtract(10, 5));
console.log("multiply", multiply(10, 5));
console.log("divide", divide(10, 5));
console.log("mod", mod(10, 3));

function demoAllDataTypes() {
  const undef = undefined;
  const nul = null;
  const bool = true;
  const num = 42;
  const big = 9007199254740991n;
  const str = "Hello, JS!";
  const sym = Symbol("sym");
  const obj = { name: "Alice", age: 30 };
  const arr = [1, 2, 3];
  function fn() {
    return "I am a function";
  }
  const date = new Date("2020-01-01");
  const regex = /ab+c/i;
  const map = new Map([["k", "v"]]);
  const set = new Set([1, 2, 3]);

  const all = {
    undef,
    nul,
    bool,
    num,
    big,
    str,
    sym,
    obj,
    arr,
    fn,
    date,
    regex,
    map,
    set,
  };

  console.log("\n--- demoAllDataTypes output ---");
  for (const [k, v] of Object.entries(all)) {
    const t = typeof v;
    let extra = "";
    if (v && typeof v === "object")
      extra = ` (constructor: ${v.constructor ? v.constructor.name : "null"})`;
    console.log(`${k}:`, v, " | typeof ->", t + extra);
  }

  console.log("symbol description:", String(sym));

  return all;
}

demoAllDataTypes();
let arrA = [1, 2, 3, 4];
let arrB = [1, 2, 3, 4];
console.log(arrA === arrB);
console.log(arrA[0] === arrB[0]);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for each
arr.forEach((element, index) => {
  console.log(element, index);
});
let nums = [1, 2, 3, 4, 5];
nums.map((el, ind) => {
  console.log(el, ind);
});

console.log("--- Filter Examples ---");

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = data.filter((num) => num % 2 === 0);
console.log("Even numbers:", even);

let words = ["hello", "", "world", null, "test", undefined, "data"];
let valid = words.filter((word) => word);
console.log("Truthy values:", valid);

let mixed = [1, 0, "text", "", true, false, null, undefined, 42];
let truthy = mixed.filter((val) => val);
console.log("All truthy values:", truthy);

console.log("\n--- Reduce Examples ---");

let sum = nums.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of array:", sum);

let prod = nums.reduce((acc, curr) => acc * curr, 1);
console.log("Product of array:", prod);

let str = ["Hello", " ", "World"];
let concat = str.reduce((acc, curr) => acc + curr, "");
console.log("Concatenated string:", concat);

let items = [
  { name: "apple", price: 10 },
  { name: "banana", price: 5 },
  { name: "orange", price: 8 },
];
let total = items.reduce((acc, item) => acc + item.price, 0);
console.log("Total price:", total);

// Students dataset and print only names
const students = [
  {
    name: "Aman Karn",
    class: "CSE-A",
    email: "aman.k@example.com",
    address: "Coimbatore, India",
  },
  {
    name: "Priya Sharma",
    class: "CSE-B",
    email: "priya.s@example.com",
    address: "Chennai, India",
  },
  {
    name: "Rohit Verma",
    class: "ECE-A",
    email: "rohit.v@example.com",
    address: "Mumbai, India",
  },
  {
    name: "Sneha Gupta",
    class: "IT-A",
    email: "sneha.g@example.com",
    address: "Delhi, India",
  },
  {
    name: "Arjun Rao",
    class: "EEE-B",
    email: "arjun.r@example.com",
    address: "Bangalore, India",
  },
  {
    name: "Meera Iyer",
    class: "CSE-A",
    email: "meera.i@example.com",
    address: "Hyderabad, India",
  },
  {
    name: "Karan Patel",
    class: "MECH-A",
    email: "karan.p@example.com",
    address: "Ahmedabad, India",
  },
  {
    name: "Divya Reddy",
    class: "CSE-B",
    email: "divya.r@example.com",
    address: "Vizag, India",
  },
  {
    name: "Sahil Khan",
    class: "ECE-B",
    email: "sahil.k@example.com",
    address: "Lucknow, India",
  },
  {
    name: "Aditi Joshi",
    class: "IT-B",
    email: "aditi.j@example.com",
    address: "Pune, India",
  },
  {
    name: "Vikram Singh",
    class: "EEE-A",
    email: "vikram.s@example.com",
    address: "Jaipur, India",
  },
  {
    name: "Riya Das",
    class: "CSE-A",
    email: "riya.d@example.com",
    address: "Kolkata, India",
  },
  {
    name: "Harish Kumar",
    class: "CIVIL-A",
    email: "harish.k@example.com",
    address: "Patna, India",
  },
  {
    name: "Anjali Nair",
    class: "ECE-A",
    email: "anjali.n@example.com",
    address: "Kochi, India",
  },
  {
    name: "Nikhil Yadav",
    class: "IT-A",
    email: "nikhil.y@example.com",
    address: "Indore, India",
  },
  {
    name: "Pooja Jha",
    class: "CSE-B",
    email: "pooja.j@example.com",
    address: "Bhopal, India",
  },
  {
    name: "Aditya Roy",
    class: "EEE-A",
    email: "aditya.r@example.com",
    address: "Guwahati, India",
  },
  {
    name: "Shivani Patil",
    class: "MECH-B",
    email: "shivani.p@example.com",
    address: "Nashik, India",
  },
  {
    name: "Farhan Ali",
    class: "ECE-B",
    email: "farhan.a@example.com",
    address: "Noida, India",
  },
  {
    name: "Lakshmi Menon",
    class: "CSE-A",
    email: "lakshmi.m@example.com",
    address: "Trivandrum, India",
  },
];

const names =students.map((el)=>el.name);
console.log("Names array:", names);
console.log("Names list:");
students.forEach((el) => console.log(el.name));

// Display full details
console.log('\nFull details (table):');
console.table(students);

console.log('\nFull details (per student):');
students.forEach((s, i) => {
  console.log(`\nStudent ${i + 1}:`);
  console.log(`Name   : ${s.name}`);
  console.log(`Class  : ${s.class}`);
  console.log(`Email  : ${s.email}`);
  console.log(`Address: ${s.address}`);
});
