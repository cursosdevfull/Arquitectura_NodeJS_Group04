import { AppDataSource } from "./data-source";
import { UserEntity } from "./entity/user";

AppDataSource.initialize()
  .then(async () => {
    const manager = AppDataSource.manager;

    const users = await manager
      .createQueryBuilder()
      .from(UserEntity, "user")
      .innerJoin("user.cars", "car")
      .select(["user.id", "user.name", "car.id", "car.brand"])
      .getRawMany();

    console.log(users);

    console.log("AppDataSource initialized");
  })
  .catch((error) => console.log(error.message));
