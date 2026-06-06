// Easy Definition

// A Class is a blueprint used to create objects with properties and methods.

// Defines:

// Data (properties)
// Behavior (methods)

// Interface Only defines structure.

class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const student1 = new Student("Alice", 20);
student1.displayInfo();

// Real Hospital Example
class Patient {
  constructor(
    public patientId: number,
    public name: string,
    public disease: string,
  ) {}

  showDetails() {
    console.log(`${this.name} - ${this.disease}`);
  }
}

const patient = new Patient(1, "Ahmed", "Fever");

patient.showDetails();

// One-Line Interview Answer

// An Interface defines the structure of an object,
// while a Class is a blueprint that creates objects
// and can contain properties, methods, constructors, and business logic.
