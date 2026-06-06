// One-Line Summary

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

function classLogger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor.name);
}

function getKeyDetails(target: any, propertyKey: any) {
  console.log("Property Name:", propertyKey);
}

@classLogger
class CustomMath {
  @getKeyDetails
  num1: number;

  num2: number;

  constructor(value1: number, value2: number) {
    this.num1 = value1;
    this.num2 = value2;
  }

  sum(num1: number, num2: number) {
    return num1 + num2;
  }
}

const customMath = new CustomMath(12, 13);

console.log(customMath.sum(12, 13));
