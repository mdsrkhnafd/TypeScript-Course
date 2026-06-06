// var var_name : data_type = value;

// How to add two number
var num1: number = 10;
var num2: number = 10.5;

var total: number = num1 + num2;
console.log(total);

// How to use binary, octal, hexaDecimal
var octal: number = 0o10001;
var hexaDecimal: number = 0x100001;
var binary: number = 0b100001;

// console.log(octal + 10);
// console.log(hexaDecimal);
// console.log(binary);

// Convert string to number
var item: number = 100;
var item2 = "50";
var convertedItem: number = Number(item2);
console.log(item + convertedItem);
// console.log(item + Number(item2));

// type inference
var data: number | string | boolean = "Mudasir";
data = 30;
data = true;
console.log(data);

// var userName = "John";
// var userAge = 30;
// var userIsAdmin = true;
// var num = 10.5;
// console.log(userName);
// console.log(userAge);
// console.log(userIsAdmin);
// console.log(num);
