var symbol1 = Symbol();
var symbol2 = Symbol();
console.log(symbol1 === symbol2);
var symbol3 = Symbol("id");
var symbol4 = Symbol("id");
console.log(symbol3);
console.log(symbol4);
console.log(symbol3 === symbol4);

const dId = Symbol("id");

const obj = {
  [dId]: 1,
  name: "Mudasir",
};

console.log(obj[dId], obj.name);
