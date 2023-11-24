class UserInfo {
  name: string;
  lastname: string;
  age: number;
  tasks: Array<string>;

  constructor(
    name: string,
    lastname: string,
    age: number,
    tasks: Array<string>
  ) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.tasks = tasks;
  }
}

class UserSalary extends UserInfo {
  amountByTask = 100;

  getSalary() {
    const tasksLength = this.tasks.length;
    return tasksLength * this.amountByTask;
  }
}

const userSalary = new UserSalary("José", "Espinoza", 34, [
  "Task1",
  "Task2",
  "Task3",
]);
console.log("salary", userSalary.getSalary());
