const userName = document.getElementById("userName") as HTMLInputElement;
const userEmail = document.getElementById("userEmail") as HTMLInputElement;
const userAge = document.getElementById("userAge") as HTMLInputElement;
const btn = document.getElementById("btn");

btn?.addEventListener("click", () => {
  const name: string = userName.value;
  const email: string = userEmail.value;
  const age: number = Number(userAge.value);
  console.log(name, email, age);
});
