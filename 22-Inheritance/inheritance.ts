// Interview Definition

// Inheritance is an OOP feature that allows a class to
// inherit properties and methods from another class using the extends keyword.

class Person2 {
  constructor(
    public name: string,
    public age: number,
  ) {}

  greet(): void {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  }
}

class Employee2 extends Person2 {
  constructor(
    name: string,
    age: number,
    public salary: number,
  ) {
    super(name, age);
  }

  // Method Overriding
  // greet(): void {
  //   console.log(
  //     `Hello, I am ${this.name}, a ${this.age}-year-old employee earning $${this.salary}.`,
  //   );
  // }
  work(): void {
    console.log(`${this.name} is working.`);
  }
}

const emp2 = new Employee2("Mudasir", 25, 50000);

console.log(emp2);
emp2.greet(); // Method from Person2
// emp2.greet(); // Method from Employee2 (if overridden)
emp2.work(); // Method from Employee2
