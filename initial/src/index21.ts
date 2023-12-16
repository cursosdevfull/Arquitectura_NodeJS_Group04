import { AppDataSource } from "./data-source";
import { CarEntity } from "./entity/car";

AppDataSource.initialize()
  .then(async () => {
    const manager = AppDataSource.manager;

    const cars = await manager
      .createQueryBuilder()
      .from(CarEntity, "car")
      .select(["car.id", "car.brand", "car.model", "car.year"])
      .having("car.year >= :year_ini", { year_ini: 2018 })
      .getRawMany();

    console.log("Cars: ", cars);

    console.log("AppDataSource initialized");
  })
  .catch((error) => console.log(error.message));
