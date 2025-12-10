function createArray(arg1, arg2, arg3) {
  return [arg1, arg2, arg3];
}
const result = createArray(10, 20, 30);
console.log(result);

function stringOnly(...args) {
  return args.filter((arg) => typeof arg === "string");
}
console.log(stringOnly("Aman", 42, "Ashok", true, "Manish", 100));
function squareNumbers(...args) {
  return args.map((num) => num * num);
}
console.log(squareNumbers(2, 3, 4));
function getEvenNumbers(...args) {
  return args.filter((num) => num % 2 === 0);
}
console.log(getEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
function createArrayOfNames(names) {
  return names;
}
console.log(createArrayOfNames("Aman", "Ashok", "Manish", "Raj"));
function collectNames(...names) {
  return names.map((name) => name.toUpperCase());
}
console.log(collectNames("Aman", "Ashok", "Manish", "Raj"));

function makeUser(name, age, city) {
  return [{ name: name, age: age, city: city }];
}
console.log(makeUser("Sid", 22, "Delhi"));

function getOnlyNumbers(...args) {
  return args.filter((val) => typeof val === "number");
}
console.log(getOnlyNumbers("hello", 10, 20, "world", 30, true, 40));

function addTen(...args) {
  return args.map((num) => num + 10);
}
console.log(addTen(5, 10, 15, 20));

function createFruitArray(...fruits) {
  return fruits.length === 0 ? ["apple", "banana"] : fruits;
}
console.log(createFruitArray());
console.log(createFruitArray("orange", "mango", "grapes"));
