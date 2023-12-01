function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function CacheData(ttl: number) {
  return function (constructor: Function) {
    console.log("ttl", ttl);
  };
}

@CacheData(10000)
@Logger("Loggin - Person")
class Person {
  name = "Alejandra";

  constructor() {
    console.log("Person constructor");
  }
}

const pers = new Person();
