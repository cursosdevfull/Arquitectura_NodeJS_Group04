import { AppDataSource } from "./data-source";
import { CarEntity } from "./entity/car";

AppDataSource.initialize()
  .then(async () => {
    const manager = AppDataSource.manager;

    await manager
      .createQueryBuilder()
      .from(CarEntity, "car")
      .insert()
      .values([
        { brand: "Toyota", model: "Corolla", year: 2020 },
        { brand: "Toyota", model: "Camry", year: 2021 },
      ])
      .execute();

    console.log("AppDataSource initialized");
  })
  .catch((error) => console.log(error.message));
