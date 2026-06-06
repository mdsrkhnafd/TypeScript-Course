// Simple Definition of Module in TypeScript

// A Module is a file that contains code
// (variables, functions, classes, interfaces, etc.)
// and can share that code with other files using export and import.

// Default Export vs Named Export

export const name2 = "Mudasir";

export default interface UserInfoType {
  name: string;
  age: number;
  isActive: boolean;
  password: string;
}

export interface StudentInfoType {
  name: string;
  age: number;
  isActive: boolean;
}

export type StudentInfoType2 = {
  name: string;
  age: number;
  isActive: boolean;
};

export function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

// Interview Definition

// A module is a TypeScript file that exports and imports code,
// allowing applications to be organized into reusable and maintainable parts.

// Name Export Module

// Which One Is Used More?

// In modern React and TypeScript projects:

// Named exports are often preferred because they're easier to refactor and autocomplete.
// Default exports are still common for a main class, component, or function.
