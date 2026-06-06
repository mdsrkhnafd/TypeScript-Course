// A reusable block of code that performs a task.

// function functionName(parameter: type): returnType {
//  code
// }

// void = no return
function voidMessage(): void {
  console.log("Hello Mudasir");
}
// string = return string
function greet(): string {
  return "Hello Mudasir Khan Welcome to Typescript";
}

// parameter type and return type
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// optional parameter
function add2(num1: number, num2?: number): number {
  if (num2) {
    return num1 + num2;
  } else {
    return num1;
  }
}

// default parameter
function add3(num1: number, num2: number = 10): number {
  return num1 + num2;
}

// rest parameter
function add4(num1: number, ...num2: number[]): number {
  return num1 + num2.reduce((a, b) => a + b);
}

// complex function mutiple type
function add5(num1: number | string, num2: number | string): number | string {
  if (typeof num1 === "string" || typeof num2 === "string") {
    return `${num1}${num2}`;
  } else {
    return num1 + num2;
  }
}

function complex(): number | string {
  let data = 10;
  let name = "Mudasir";
  let type = "age";

  if (type === "age") {
    return data;
  } else {
    return name;
  }
}

function totalPrice(price: number, tax: number, text?: string) {
  if (text) {
    console.log(`Total price is ${price * tax}`);
  } else {
    console.log(price * tax);
  }
}

// return any type
function anything(): any {
  return "Return any type";
}

// call this function
voidMessage();
console.log(greet());
console.log(add(10, 10));
console.log(add2(10));
console.log(add3(10));
console.log(add4(10, 10, 10, 10));
console.log(add5(10, "10"));
console.log(complex());
console.log(anything());

totalPrice(10, 10);
totalPrice(10, 10, "Mudasir");

const greet1 = (name: string): string => {
  return "Hello " + name;
};

console.log(greet1("Mudasir"));

// Union Types with Functions
function printValue(value: string | number) {
  console.log(value);
}

printValue("Mudasir");
printValue(100);
