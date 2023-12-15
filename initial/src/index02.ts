import { AppDataSource } from "./data-source";
import { UserEntity } from "./entity/user";

AppDataSource.initialize()
  .then(async () => {
    const repository = AppDataSource.getRepository(UserEntity);

    const users = await repository.find();

    console.log(users);

    const user = await repository.findOne({ where: { id: 6 } });

    console.log("user", user);

    console.log("AppDataSource initialized");
  })
  .catch((error) => console.log(error.message));
