"use strict";
function loopFunction() {
    while (true) {
        console.log("Hello Mudasir");
    }
}
// loopFunction();
function error(message) {
    throw new Error(message);
}
// error("Hello Mudasir");
function simpleFunction() {
    throw new Error("Hello Mudasir");
}
simpleFunction();
