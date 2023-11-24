class User {
  readonly userId = "98a8cf4e-a996-47c2-ae33-58d133ef5e00";
  protected readonly token = "34504045-da42-4e05-8661-8143f03e7144";
}

class Developer extends User {
  getAccessApplication() {
    console.log("token", this.token);
  }
}

class DeveloperCloud extends Developer {
  allowApplication() {
    console.log("token cloud", this.token);
  }
}

const user = new User();
console.log("userId", user.userId);
//console.log("token", user.token)

const developer = new Developer();
developer.getAccessApplication();

const developerCloud = new DeveloperCloud();
developerCloud.allowApplication();
