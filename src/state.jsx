const user = {
  id: "1",
  name: "Иван",
  lastname: "Иванов",
  email: "Ivan.Ivan@gmail.ru",
  avatar:
    "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8fDA%3D&w=300&q=80",
  about: "Информация о себе",
};

/* const users = {
  0: {
    id: 5,
    name: "Пётр",
    lastname: "Петров",
    email: "Petr.Petrov@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&w=300&q=80",
  },
  1: {
    id: 47,
    name: "Сидр",
    lastname: "Сидоров",
    email: "Sidr.Sidorov@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&w=300&q=80",
  },
  2: {
    id: 12,
    name: "Екатерина",
    lastname: "Ковалёва",
    email: "Katya.Kovaleva@gmail.com",
    avatar:
      "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww&w=300&q=80",
  },
  3: {
    id: 76,
    name: "Анна",
    lastname: "Смирнова",
    email: "Anna.Smirnova@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&w=300&q=80",
  },
  4: {
    id: 3,
    name: "",
    lastname: "Седова",
    email: "Olga.Anechkina@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&w=300&q=80",
  },
}; */

let users = {};

export function getUser(userId) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == userId) return users[i];
  }
  return user;
}

export async function getUsers() {
  let response = await fetch("https://laurent.p-host.in/getUsers");
  users = await response.json();
  console.log(users);
  return users;
}
