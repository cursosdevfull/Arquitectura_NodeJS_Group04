import { AppDataSource } from "./data-source";
import { UserEntity } from "./entity/user";

AppDataSource.initialize()
  .then(async () => {
    const users = await AppDataSource.getRepository(UserEntity).find({
      relations: ["car"],
      select: ["id", "name", "email"],
    });
    console.log(users);

    console.log("AppDataSource initialized");
  })
  .catch((error) => console.log(error.message));
