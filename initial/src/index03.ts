import { AppDataSource } from "./data-source";
import { CarEntity } from "./entity/car";
import { UserEntity } from "./entity/user";

AppDataSource.initialize()
  .then(async () => {
    const car = new CarEntity();
    car.brand = "Toyota";
    car.model = "Corolla";
    car.year = 2015;

    const carInserted = await AppDataSource.getRepository(CarEntity).save(car);

    const user = new UserEntity();
    user.name = "John Doe";
    user.email = "doe@correo.com";
    user.password = "123456";
    user.isActive = true;
    user.car = carInserted;

    const userInserted = await AppDataSource.getRepository(UserEntity).save(
      user
    );

    console.log("AppDataSource initialized");
  })
  .catch((error) => console.log(error.message));
