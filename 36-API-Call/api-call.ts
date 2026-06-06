// async function getUsers() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

//   const users = await response.json();

//   console.log(users);
// }

// getUsers();

type APIType = {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
};

async function getUsers(): Promise<APIType> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  const users = await response.json();

  return users;
}

getUsers().then((result: APIType) => console.log(result));
