// What is Generic in TypeScript?

// A Generic allows you to write code that works
// with different data types while keeping type safety.

// T  = Type
// K  = Key
// V  = Value

function getData<T>(value: T): T {
  return value;
}

console.log(getData<string>("Mudasir"));
console.log(getData<number>(100));
console.log(getData<boolean>(true));

// Generic with Arrays

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirstElement<number>([10, 20, 30]));
console.log(getFirstElement<string>(["Ali", "Ahmed"]));

function getArrayElement<T>(arr: T): T {
  return arr;
}

let numbers: number[] = [1, 2, 3];
let strings: string[] = ["Hello", "World"];
console.log(numbers);
console.log(strings);

// Generic Interface

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

const userResponse: ApiResponse<string> = {
  success: true,
  data: "Mudasir",
};

// OR

const ageResponse: ApiResponse<number> = {
  success: true,
  data: 30,
};

// Generic Type

type Box<T> = {
  value: T;
};

const box1: Box<string> = {
  value: "Hello",
};

const box2: Box<number> = {
  value: 100,
};

// Generic Class

class Storage1<T> {
  private data: T;

  constructor(data: T) {
    this.data = data;
  }

  getData11(): T {
    return this.data;
  }
}

const user11 = new Storage1<string>("Mudasir");

console.log(user11.getData11());

// Real-World Example

// API Response:
interface ApiResponse23<T> {
  status: number;
  data: T;
}

// User data:

interface User23 {
  name: string;
  age: number;
}

const response23: ApiResponse23<User23> = {
  status: 200,
  data: {
    name: "Mudasir",
    age: 30,
  },
};

console.log(response23);

// Interview Definition

// Generics are a TypeScript feature that allows creating reusable components
// that work with multiple data types while maintaining type safety.

// A Generic lets you write one reusable function, interface, type,
// or class that can work with many data types while preserving
// TypeScript's type checking. 🚀

// Memory Tricks
// any
// =
// Accept anything
// Protect nothing ❌

// Generic<T>
// =
// Accept anything
// Protect type ✅
