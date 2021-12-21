// ES6 filter e reduce, Map

var numbers = [1, 2, 3, 4, 5, 9];

console.log(
  "filter",
  numbers.filter((n) => n > 2)
);
console.log(
  "reduce",
  numbers.reduce((acum, current) => acum + current, 10)
);
console.log(
  "reduce",
  numbers.find((n) => n === 2)
);

// Destruct Array
const [a, b=0, ...c] = numbers;
console.log("Destruct Array", c);

// Destruct Array + Scape
const [aa, , , , ee] = numbers;
console.log("Destruct Array + Scape", aa, ee);


// new Set()

const newSet = new Set();
newSet.add(1)
newSet.add(2)
newSet.add(2)
newSet.add(3)
console.log("newSet add = ", newSet);

console.log("newSet has = ", newSet.has(3));
console.log("newSet has = ", newSet.has(39));

newSet.delete(1)
console.log("newSet delete = ", newSet);




