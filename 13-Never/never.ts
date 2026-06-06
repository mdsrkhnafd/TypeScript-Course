function loopFunction(): never {
  while (true) {
    console.log("Hello Mudasir");
  }
}

// loopFunction();

function error(message: string): never {
  throw new Error(message);
}

// error("Hello Mudasir");

function simpleFunction(): void {
  throw new Error("Hello Mudasir");
}

simpleFunction();
