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

  constructor(userInfo: UserInfo) {
    this.userInfo = userInfo;
  }

  getSalary() {
    const tasksLength = this.userInfo.tasks.length;
    return tasksLength * this.amountByTask;
  }
}

const userInfo = new UserInfo("José", "Espinoza", 34, [
  "Task1",
  "Task2",
  "Task3",
]);

const userSalary = new UserSalary(userInfo);
console.log("salary", userSalary.getSalary());
