interface UserProperties {
  userId: string;
  firstname: string;
  lastname: string;
  age: number;
  gender: string;
  email: string;
  tall: number;
}

interface IUser {
  update(): void;
  delete(): void;
  reconstitute(): void;
}

const userProperties: UserProperties = {
  userId: "34504045-da42-4e05-8661-8143f03e7144",
  gender: "male",
  email: "luis@email.com",
  firstname: "Luis",
  lastname: "Tamayo",
  age: 34,
  tall: 180,
};

const iUser: IUser = {
  update: () => console.log("updated"),
  delete: () => console.log("deleted"),
  reconstitute: () => console.log("reconstituted"),
};

const iUser2: IUser = {
  update() {
    console.log("updated");
  },
  delete() {
    console.log("deleted");
  },
  reconstitute() {
    console.log("reconstituted");
  },
};

class User implements UserProperties, IUser {
  userId: string;
  firstname: string;
  lastname: string;
  age: number;
  gender: string;
  email: string;
  tall: number;
  weight: number;

  constructor(props: UserProperties) {
    this.userId = props.userId;
    this.firstname = props.firstname;
    this.lastname = props.lastname;
    this.age = props.age;
    this.gender = props.gender;
    this.email = props.email;
    this.tall = props.tall;
    this.weight = Math.round(Math.random() * 100 + 1);
  }

  update(): void {
    throw new Error("Method not implemented.");
  }

  delete(): void {
    throw new Error("Method not implemented.");
  }

  reconstitute(): void {
    throw new Error("Method not implemented.");
  }
}

const user = new User(userProperties);
console.log("user", user);

const userProperties2: UserProperties = {
  userId: "34504045-da42-4e05-8661-8143f03e7144",
  gender: "male",
  email: "luis@email.com",
  firstname: "Luis",
  lastname: "Tamayo",
  age: 34,
  tall: 180,
};

const user2 = new User(userProperties2);