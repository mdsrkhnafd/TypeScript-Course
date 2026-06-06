"use strict";
// What is keyof in TypeScript?
let field;
field = "name"; // ✅
field = "disease"; // ✅
field = "patientId"; // ✅
// field = "doctor"; // ❌ Error
// keyof with Generics (Very Important)
function getValue(obj, key) {
    return obj[key];
}
// Usage:
const user32 = {
    name: "Mudasir",
    age: 30,
};
console.log(getValue(user32, "name"));
console.log(getValue(user32, "age"));
// Error cases:
// getValue(user, "email"); // ❌ Error  // Because "email" is not a key of user.
// Interview Definition
// keyof is a TypeScript operator that creates
// a union type from the property names of an object type.
// Difference Between typeof and keyof
// | Operator | Purpose
// | -------- | -------------------------------
// | `typeof` | Gets the type of a variable
// | `keyof`  | Gets the keys of an object type
const user30 = {
    name: "Mudasir",
    age: 30,
};
let keyData;
keyData = "name";
keyData = "age";
keyData = "isEmp";
// keyData = "city"; // ❌ Error
