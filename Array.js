var marks = [1, 2, 3, 4, 5];

var sum = 0;

for (let i = 0; i < marks.length; i++) {
  sum = sum + marks[i];
}
console.log(sum);
console.log("------reduce");

let total = marks.reduce((sum, mark) => sum + mark, 0);
console.log(total);

let total1 = marks.reduce((sum, mark) => sum * mark, 1);
console.log("multiple ", total1);

let total3 = marks.reduce((sum, mark) => sum - mark);
console.log("total3 is ", total3);

let total4 = marks.reduce((sum, mark) => sum / mark);
console.log("total4 is ", total4);

let max = marks.reduce((max, current) => Math.max(max, current));
console.log("max is ", max);

let min = marks.reduce((min, current) => Math.min(min, current));
console.log("min is ", min);

const words = ["apple", "banana", "guvava"];
const countTotalCharacters = words.reduce(
  (word, current) => word + current.length,
  0,
);
console.log("countTotalCharacters is ", countTotalCharacters);

console.log("------reduce");

console.log(marks[2]);

marks[5] = 10;

console.log(marks);
console.log(marks.length);

marks.push(20);

console.log(marks);

marks.pop(5);
console.log(marks);

marks.unshift(0);
console.log(marks);

console.log(marks.indexOf(10));

console.log(marks.includes(112));

console.log(marks.slice(1, 3));

const cart = [
  { item: "Laptop", price: 50000 },
  { item: "Mouse", price: 1000 },
  { item: "Keyboard", price: 2000 },
];

const carttotal = cart.reduce((sum, mark) => sum + mark.price, 0);
console.log(carttotal);

const people = [
  { name: "John", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Alice", age: 30 },
  { name: "Tom", age: 15 },
];

const adultnum = people.reduce((sum, mark) => sum + mark.sum, 0);
consile.log(adultnum);
