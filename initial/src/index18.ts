import { Brackets } from "typeorm";

import { AppDataSource } from "./data-source";
import { CarEntity } from "./entity/car";

AppDataSource.initialize()
  .then(async () => {
    const manager = AppDataSource.manager;

    const cars = await manager
      .createQueryBuilder()
      .from(CarEntity, "car")
      .select(["car.id", "car.brand", "car.model", "car.year"])
      .where("car.year >= :year_ini")
      .andWhere("car.year <= :year_end")
      .andWhere(
        new Brackets((qb) => {
          qb.where("car.model = :model1").orWhere("car.model = :model2");
        })
      )
      .setParameters({ model1: "Tucson", model2: "Accent" })
      .setParameters({ year_ini: 2018, year_end: 2023 })
      .getMany();
    console.log("Cars: ", cars);

    console.log("AppDataSource initialized");
  })
  .catch((error) => console.log(error.message));
