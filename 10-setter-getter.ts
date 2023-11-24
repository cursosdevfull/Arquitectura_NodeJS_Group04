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
  salaryStored = 0;

  constructor(userInfo: UserInfo) {
    this.userInfo = userInfo;
  }

  get salary() {
    if (this.salaryStored > 0) return this.salaryStored;

    const tasksLength = this.userInfo.tasks.length;
    return tasksLength * this.amountByTask;
  }

  set salary(salary: number) {
    this.salaryStored = salary;
  }
}

const userInfo = new UserInfo("José", "Espinoza", 34, [
  "Task1",
  "Task2",
  "Task3",
]);

const userSalary = new UserSalary(userInfo);
userSalary.salary = 500;
console.log("salary", userSalary.salary);
