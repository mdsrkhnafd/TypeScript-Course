// A Type Guard is a way to narrow down the type of
// a variable at runtime within a conditional block.

// 👉 It helps TypeScript understand:

// “What exact type is this value right now?”

// 1. Using typeof (most common)
function print11(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

print11("hello"); // Output: HELLO
print11(3.14159); // Output: 3.14

// 2. Type Guard with instanceof

class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function speak(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const myDog = new Dog();
const myCat = new Cat();

speak(myDog); // Output: Woof!
speak(myCat); // Output: Meow!

// 3. Custom Type Guard (Advanced)
interface Bird {
  fly(): void;
}

interface Fish {
  swim(): void;
}

function move(animal: Bird | Fish) {
  if ("fly" in animal) {
    animal.fly();
  } else {
    animal.swim();
  }
}

move({
  fly: () => {
    console.log("Flying high!");
  },
}); // Output: (calls fly method)
move({
  swim: () => {
    console.log("Swimming gracefully!");
  },
});

// 🧠 Easy Interview Definition

// A Type Guard is a technique used to check and narrow down
// the type of a variable at runtime using conditions like typeof,
// instanceof, or custom functions.

// Why we use Type Guards:

// 1. To ensure type safety when working with variables that can
// have multiple types.

// 2. To provide more specific behavior based on the actual type
// of the variable.

// 3. Apply condition with the data type

// 4. Helps TypeScript infer types automatically
