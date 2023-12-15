import { AppDataSource } from "./data-source";
import { CarEntity } from "./entity/car";
import { UserEntity } from "./entity/user";

AppDataSource.initialize()
  .then(async () => {
    const car = new CarEntity();
    car.brand = "Toyota";
    car.model = "Corolla";
    car.year = 2015;

    const user = new UserEntity();
    user.name = "Joe Doe";
    user.email = "joe.doe@correo.com";
    user.password = "54321";
    user.isActive = true;
    user.car = car;

    const userInserted = await AppDataSource.getRepository(UserEntity).save(
      user
    );

    console.log("AppDataSource initialized");
  })
  .catch((error) => console.log(error.message));
