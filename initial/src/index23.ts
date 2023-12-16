import { AppDataSource } from "./data-source";
import { CarEntity } from "./entity/car";

AppDataSource.initialize()
  .then(async () => {
    const manager = AppDataSource.manager;

    const pageSize = 2;
    const page = 3;

    const cars = await manager
      .createQueryBuilder()
      .from(CarEntity, "car")
      .select(["car.id", "car.brand", "car.model", "car.year"])
      .offset((page - 1) * pageSize)
      .limit(pageSize)
      .getRawMany();

    console.log("Cars: ", cars);

    console.log("AppDataSource initialized");
  })
  .catch((error) => console.log(error.message));
