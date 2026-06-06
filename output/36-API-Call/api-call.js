"use strict";
// async function getUsers() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const users = await response.json();
    return users;
}
getUsers().then((result) => console.log(result));
