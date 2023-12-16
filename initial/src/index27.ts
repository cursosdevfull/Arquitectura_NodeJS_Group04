import { In } from "typeorm";

import { AppDataSource } from "./data-source";
import { CarEntity } from "./entity/car";
import { UserEntity } from "./entity/user";

AppDataSource.initialize()
  .then(async () => {
    const manager = AppDataSource.manager;

    const cars = await manager.findBy(CarEntity, { id: In([1, 2]) });
    const user = await manager
      .createQueryBuilder()
      .from(UserEntity, "user")
      .insert()
      .values([
        {
          name: "Luis",
          email: "luis@email.com",
          password: "89765",
        },
      ])
      .execute();

    user.raw.forEach((user) => {
      user.cars = cars;
      user.save();
    });

    console.log("AppDataSource initialized");
  })
  .catch((error) => console.log(error.message));
