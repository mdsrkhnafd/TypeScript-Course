"use strict";
// Interview Definition
// Access Modifiers are keywords that control the visibility
// and accessibility of class properties and methods.
// TypeScript provides public, private, and protected access modifiers.
// Why Use Access Modifiers?
// They help:
// Protect sensitive data
// Control access
// Improve code security
// Encapsulate business logic
class Patient1 {
    patientId;
    disease;
    insuranceCode;
    constructor(patientId, disease, insuranceCode) {
        this.patientId = patientId;
        this.disease = disease;
        this.insuranceCode = insuranceCode;
    }
}
const patient1 = new Patient1(1, "Fever", "INS123");
console.log(patient1.patientId); // Accessible (public)
console.log(patient1);
// What is Public?
// Public members are accessible from anywhere in the code.
// By default, all class members are public if no access modifier is specified.
// What is Protected?
// Protected members are accessible within the class and its subclasses.
// They cannot be accessed from outside the class hierarchy.
// What is Private?
// Private members are only accessible within the class they are declared in.
// They cannot be accessed from outside the class or from subclasses.
