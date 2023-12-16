import { AppDataSource } from "./data-source";
import { CarEntity } from "./entity/car";

AppDataSource.initialize()
  .then(async () => {
    //const manager = AppDataSource.getRepository(CarEntity).manager;
    //const cars = await manager.find(CarEntity);
    //const users = await manager.find(UserEntity);

    //console.log("Users: ", users);

    const manager = AppDataSource.manager;

    const cars = await manager
      .createQueryBuilder(CarEntity, "vehicle")
      .select(["vehicle.brand", "vehicle.year", "vehicle.id"])
      .getMany();
    console.log("Cars: ", cars);

    console.log("AppDataSource initialized");
  })
  .catch((error) => console.log(error.message));
