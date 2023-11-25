interface Address {
  location: string;
  city: string;
  country: string;
}

type ADDRESS = {
  location: string;
  city: string;
  country: string;
};

type GENDER = "MALE" | "FEMALE";

interface UserEssentials {
  userId: string;
  firstname: string;
  lastname: string;
  email: string;
  address: ADDRESS;
}

interface UserOptionals {
  age: number;
  tall: number;
  gender: GENDER;
}

type UserProperties = UserEssentials & Partial<UserOptionals>;
/*type UserUpdate = {
    firstname: string;
    lastname: string;
    address: ADDRESS;
    age: number;
  }*/
type UserUpdate = Partial<
  Omit<UserEssentials, "userId" | "email"> & Pick<UserOptionals, "age">
>;

class User {
  userId: string;
  firstname: string;
  lastname: string;
  email: string;
  address: ADDRESS;
  age: number;
  tall: number;
  gender: GENDER;

  constructor(props: UserProperties) {
    Object.assign(this, props);
  }

  update(props: UserUpdate) {
    Object.assign(this, props);
  }
}

const userProperties: UserProperties = {
  userId: "7f1910a5-fc04-44e8-8708-67f398bca872",
  firstname: "Juan Carlos",
  lastname: "Pérez",
  email: "juan.carlos@email.com",
  address: {
    location: "Avenida La República",
    city: "Jauja",
    country: "Perú",
  },
};

const user = new User(userProperties);
console.log("user", user);

const userUpdate: UserUpdate = {
  firstname: "José Luis",
  age: 50,
};
user.update(userUpdate);
console.log("user", user);
