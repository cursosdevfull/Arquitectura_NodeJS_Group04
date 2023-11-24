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

class UserSalary {
  amountByTask = 100;
  userInfo: UserInfo;

  constructor(
    name: string,
    lastname: string,
    age: number,
    tasks: Array<string>
  ) {
    this.userInfo = new UserInfo(name, lastname, age, tasks);
  }

  getSalary() {
    const tasksLength = this.userInfo.tasks.length;
    return tasksLength * this.amountByTask;
  }
}

const userSalary = new UserSalary("José", "Espinoza", 34, [
  "Task1",
  "Task2",
  "Task3",
]);
console.log("salary", userSalary.getSalary());
