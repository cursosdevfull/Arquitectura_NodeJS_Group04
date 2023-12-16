import { AppDataSource } from "./data-source";
import { CarEntity } from "./entity/car";
import { UserEntity } from "./entity/user";
import { UnitOfWork } from "./unit-of-work/uow";

AppDataSource.initialize()
  .then(async () => {
    const manager = AppDataSource.manager;

    const uow: UnitOfWork = new UnitOfWork(manager);
    await uow.start();

    const work = async () => {
      const manager = uow.getManager();
      const userRepository = manager.getRepository(UserEntity);
      const carRepository = manager.getRepository(CarEntity);

      const car = new CarEntity();
      car.brand = "BMW2";
      car.model = "X5";
      car.year = 2019;

      const carInserted = await carRepository.save(car);

      const user = new UserEntity();
      user.name = "Jimena";
      user.email = "jimena3@correo.com";
      user.password = "123456";
      user.cars = [carInserted];

      const userInserted = await userRepository.save(user);
    };

    uow.complete(work);

    console.log("AppDataSource initialized");
  })
  .catch((error) => console.log(error.message));
