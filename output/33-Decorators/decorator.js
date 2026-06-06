"use strict";
// One-Line Summary
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// A Decorator is a special TypeScript feature that uses
// @ syntax to add or modify behavior of classes, methods, properties,
// or parameters, and is widely used in frameworks like NestJS and Angular. 🚀
// @Auth
// class User {}
// @Log
// saveData()
// @Required
// name: string
// @Optional
// name?: string
/// DO
function classLogger(constructor) {
    console.log("Logging...");
    console.log(constructor.name);
}
function getKeyDetails(target, propertyKey) {
    console.log("Property Name:", propertyKey);
}
let CustomMath = class CustomMath {
    num1;
    num2;
    constructor(value1, value2) {
        this.num1 = value1;
        this.num2 = value2;
    }
    sum(num1, num2) {
        return num1 + num2;
    }
};
__decorate([
    getKeyDetails
], CustomMath.prototype, "num1", void 0);
CustomMath = __decorate([
    classLogger
], CustomMath);
const customMath = new CustomMath(12, 13);
console.log(customMath.sum(12, 13));
