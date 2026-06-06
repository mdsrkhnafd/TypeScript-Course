// 🧠 Easy Interview Definition

// Static keyword is used to define class members that can be accessed
// directly using the class name without creating an instance.

class MathUtils {
  // instance members
  add(a: number, b: number): number {
    return a + b;
  }
  // static members
  static PI: number = 3.14159;
  static calculateCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}

// creating an instance to access instance members
const mathUtils = new MathUtils();
console.log(mathUtils.add(1, 2));

//
console.log(MathUtils.PI);
console.log(MathUtils.calculateCircumference(10));
