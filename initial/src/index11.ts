import { AppDataSource } from "./data-source";
import { UserEntity } from "./entity/user";

AppDataSource.initialize()
  .then(async () => {
    //const manager = AppDataSource.getRepository(CarEntity).manager;
    //const cars = await manager.find(CarEntity);
    //const users = await manager.find(UserEntity);

    //console.log("Users: ", users);

    const manager = AppDataSource.manager;

    const users = await manager
      .createQueryBuilder()
      .from(UserEntity, "user")
      .select(["user.id", "user.name"])
      .getMany();
    console.log("Users: ", users);

    console.log("AppDataSource initialized");
  })
  .catch((error) => console.log(error.message));
