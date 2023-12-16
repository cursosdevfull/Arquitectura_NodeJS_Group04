import { MoreThan } from "typeorm";

import { AppDataSource } from "./data-source";
import { CarEntity } from "./entity/car";

AppDataSource.initialize()
  .then(async () => {
    const [cars, count] = await AppDataSource.getRepository(
      CarEntity
    ).findAndCount({
      skip: 0,
      take: 4,
      relations: ["users"],
      where: { year: MoreThan(2018) },
      order: { year: "DESC", brand: "ASC" },
    });

    console.log("Cars: ", cars);
    console.log("Count: ", count);

    console.log("AppDataSource initialized");
  })
  .catch((error) => console.log(error.message));
