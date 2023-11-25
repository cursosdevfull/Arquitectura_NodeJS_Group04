class User {
  id: number;
  /*id: number
    firstname: string
    lastname: string
    age: number
    email: string */

  constructor(
    public firstname: string,
    public lastname: string,
    public age: number,
    public email: string
  ) {
    this.id = new Date().getTime();
    if (age < 18) throw new Error("Age must be 18 at least");
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
      throw "Email has not format right";
    /*this.id = id
      this.firstname = firstname
      this.lastname = lastname
      this.age = age
      this.email = email*/
  }
}

interface UserRepository {
  insert(user: User): User;
}

//const user = new User("Carmela", "Nieto", 34, "carmela.nietoemail.com")
//console.log("user", user)

class UserCreate {
  constructor(private userRepository: UserRepository) {}

  execute(firstname: string, lastname: string, age: number, email: string) {
    const user = new User(firstname, lastname, age, email);
    return this.userRepository.insert(user);
  }
}

class UserInfrastructure implements UserRepository {
  private users: Array<User> = [];

  insert(user: User) {
    this.users.push(user);
    return user;
  }

  list() {
    return [...this.users];
  }
}

const infrastructure = new UserInfrastructure();
const useCase: UserCreate = new UserCreate(infrastructure);
console.log(useCase.execute("Irma", "Lozano", 23, "irma@email.com"));
