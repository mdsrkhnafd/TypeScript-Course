"use strict";
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userAge = document.getElementById("userAge");
const btn = document.getElementById("btn");
btn?.addEventListener("click", () => {
    const name = userName.value;
    const email = userEmail.value;
    const age = Number(userAge.value);
    console.log(name, email, age);
});
