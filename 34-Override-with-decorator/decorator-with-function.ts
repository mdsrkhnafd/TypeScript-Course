function updateSum(target: any, key: string, descriptor: PropertyDescriptor) {
  descriptor.value = function sum(num1: number, num2: number) {
    let output = num1 + num2;
    return "The output is " + num1 + " and " + num2 + " is " + output;
  };
}

class CustomMath1 {
  @updateSum
  add(num1: number, num2: number): number {
    return num1 + num2;
  }
}

var math = new CustomMath1();
console.log(math.add(10, 20));
