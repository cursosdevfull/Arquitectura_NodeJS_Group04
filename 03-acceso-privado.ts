class User {
  name: string;
  email: string;
  private password: string;

  constructor(name: string, email: string, password: string) {
    if (
      !password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
    ) {
      throw new Error("Password not match with pattern");
    }

    this.name = name;
    this.email = email;
    this.password = password;
  }

  recoveryPassword() {
    return this.password;
  }
}

const user = new User("Silvia", "silvia@correo.com", "Abc123xx");
//user.password = "123"

//console.log(user.password)
//user.password = "def456"
console.log("user", user);
console.log("password", user.recoveryPassword());
