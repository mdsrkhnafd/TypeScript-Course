"use strict";
console.log("Hello, DOM!");
var headingEl = document.querySelector("h1"); // This will return an HTMLElement or null if there is no <h1> element in the DOM
console.log(headingEl?.textContent); // This will safely access the textContent property of headingEl. If headingEl is null, it will return undefined instead of throwing an error.
var anchorEl = document.querySelector("a"); // Non-null assertion operator to tell TypeScript that anchorEl will not be null
console.log(anchorEl.href); // This will work because we used the non-null assertion operator, but it can lead to runtime errors if there is no <a> element in the DOM
var anchorElClass = document.querySelector(".anchorStyle"); // Type assertion to tell TypeScript that anchorElClass is an HTMLAnchorElement
console.log(anchorElClass.href); // This will work because we used type assertion, but it can lead to runtime errors if there is no element with the class "anchorStyle" in the DOM or if it is not an anchor element
var headingElId = document.getElementById("heading"); // Non-null assertion operator to tell TypeScript that headingElId will not be null
console.log(headingElId.textContent); // This will work because we used the non-null assertion operator, but it can lead to runtime errors if there is no element with the id "heading" in the DOM or if it is not a heading element
