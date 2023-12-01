function Logger(constructor: Function) {
  console.log("Logging");
  console.log(constructor);
}

@Logger
class Person {
  name = "Alejandra";

  constructor() {
    console.log("Person constructor");
  }
}

const pers = new Person();
