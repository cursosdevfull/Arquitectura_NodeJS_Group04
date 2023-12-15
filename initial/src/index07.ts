import { AppDataSource } from "./data-source";
import { CarEntity } from "./entity/car";
import { UserEntity } from "./entity/user";

AppDataSource.initialize()
  .then(async () => {
    const car = new CarEntity();
    car.brand = "Toyota";
    car.model = "Corolla";
    car.year = 2015;

    const car2 = new CarEntity();
    car2.brand = "Toyota";
    car2.model = "Hilux";
    car2.year = 2018;

    const user = new UserEntity();
    user.name = "Joe Doe";
    user.email = "joe.doe@correo.com";
    user.password = "54321";
    user.isActive = true;
    user.cars = [car, car2];

    await AppDataSource.getRepository(UserEntity).save(user);

    const user2 = new UserEntity();
    user2.name = "Jana Doe";
    user2.email = "jana.doe@correo.com";
    user2.password = "54321";
    user2.isActive = true;
    user2.cars = [car];

    await AppDataSource.getRepository(UserEntity).save(user2);

    console.log("AppDataSource initialized");
  })
  .catch((error) => console.log(error.message));
