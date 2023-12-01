function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("Loggin - Person")
class Person {
  name = "Alejandra";

  constructor() {
    console.log("Person constructor");
  }
}

const pers = new Person();
