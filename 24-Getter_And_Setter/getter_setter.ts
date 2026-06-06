// Getter and Setter in TypeScript (Simple Explanation)

// Getter and Setter are special methods used to control
// how we read and update object properties.

// Think of them like a security gate:

// Getter → reads value (GET 🔍)
// Setter → updates value (SET ✏️)

class User6 {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  // Getter (READ)
  get name(): string {
    return this._name;
  }

  // Setter (WRITE)
  set name(value: string) {
    this._name = value;
  }
}

const u = new User6("Mudasir");

console.log(u.name); // getter runs

u.name = "Ali"; // setter runs

console.log(u.name);

class User7 {
  private _age: number = 0;

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) {
      console.error("Age cannot be negative.");
      return;
    }
    this._age = value;
  }
}

const user7 = new User7();

user7.age = 34; // OK
console.log(user7.age);

// user7.age = -5; ❌ Error
