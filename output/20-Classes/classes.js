"use strict";
// Easy Definition
// A Class is a blueprint used to create objects with properties and methods.
// Defines:
// Data (properties)
// Behavior (methods)
// Interface Only defines structure.
class Student {
    name;
    age;
    constructor(name, age) {
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
    patientId;
    name;
    disease;
    constructor(patientId, name, disease) {
        this.patientId = patientId;
        this.name = name;
        this.disease = disease;
    }
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
