"use strict";
// any     = No type checking
// unknown = Type-safe checking required
var value = "Hello";
value = 34;
value = true;
value = {};
value = [];
value = "Hello Mudasir";
console.log(value.toUpperCase()); // type checking free
var value1 = "Hello";
value1 = 34;
value1 = true;
value1 = {};
value1 = ["Mudasir"];
value1 = "Hello Mudasir Khan";
if (typeof value1 === "string") {
    console.log(value1.toUpperCase()); // type checking not free
}
