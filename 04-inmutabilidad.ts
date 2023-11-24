class User {
  private readonly userId: string;
  name: string;
  readonly email: string;
  private password: string;

  constructor(name: string, email: string, password: string) {
    if (
      !password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
    ) {
      throw new Error("Password not match with pattern");
    }

    this.userId = "41cf1a44-1b9d-446b-97b3-1c6f4b9b922f";

    this.name = name;
    this.email = email;
    this.password = password;
  }

  recoveryPassword() {
    return this.password;
  }

  changeID() {
    //this.userId = "45678"
  }
}

const user = new User("Silvia", "silvia@correo.com", "Abc123xx");
user.changeID();
console.log("email", user.email);
//user.email = "nuevo@correo.com"
//user.userId = "abcdef"
//user.password = "123"

//console.log(user.password)
//user.password = "def456"
console.log("user", user);
//console.log("password", user.recoveryPassword())
