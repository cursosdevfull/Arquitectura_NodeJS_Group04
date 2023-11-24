//let username: string = "Juan Pérez"
let username = "Juan Pérez";
// username = 30

username = "Carlos Trejos";

let ageOfPatient: number;
let isUserLogged: boolean;

//let listNamesOfUsersRegistered: string[] = ["Martha", "José", "Roberto", "Claudia"]
let listNamesOfUsersRegistered: Array<string> = [
  "Martha",
  "José",
  "Roberto",
  "Claudia",
];
listNamesOfUsersRegistered.push("Jimena");
//listNamesOfUsersRegistered.push(["Alicia"])

let listStudentsEnrolled: Array<{
  name: string;
  age: number;
  addresses: Array<string>;
}> = [{ name: "Gustavo", age: 40, addresses: ["Avenida Del Sol 123"] }];
listStudentsEnrolled.push({
  name: "Pedro",
  age: 30,
  addresses: ["Jirón de la Revolución 456", "Pasaje Olaya 345"],
});

let listUsersWithProjects: Array<Array<{ name: string; age: number }>> = [
  [
    { name: "Jorge", age: 23 },
    { name: "Carla", age: 22 },
  ],
  [{ name: "Claudia", age: 32 }],
];
