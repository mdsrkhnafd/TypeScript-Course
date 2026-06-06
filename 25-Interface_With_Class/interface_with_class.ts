// 🧠 Easy Interview Definition

// Interface with class means a class must follow
// a structure defined by an interface using the implements keyword.

// 🧠 EASY INTERVIEW ANSWER

// Interface and Type are used to define the shape of data,
// while Class is used to create real objects with behavior and logic

// Defining an interface for a User
interface User8 {
  name: string;
  age: number;

  getDetails(): string;

  welcome(): string;

  getStudentList(): string[];
}

// Implementing the User interface in a class
class Student8 implements User8 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `${this.name} is ${this.age} years old`;
  }

  welcome(): string {
    return `Welcome, ${this.name}!`;
  }

  getStudentList(): string[] {
    return ["Student A", "Student B", "Student C"];
  }
}

const s1 = new Student8("Mudasir", 30);

console.log(s1.getDetails());
console.log(s1.welcome());

console.log(s1.getStudentList());

// Output:
// Mudasir is 30 years old
// Welcome, Mudasir!
