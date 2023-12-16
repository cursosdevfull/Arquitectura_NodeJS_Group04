import { AppDataSource } from "./data-source";
import { CarEntity } from "./entity/car";

AppDataSource.initialize()
  .then(async () => {
    const manager = AppDataSource.manager;

    const cars = await manager
      .createQueryBuilder()
      .from(CarEntity, "car")
      .select("sum(car.year)", "total")
      .getRawOne();

    console.log("Cars: ", cars);

    console.log("AppDataSource initialized");
  })
  .catch((error) => console.log(error.message));
