import { AppDataSource } from "./data-source";
import { UserEntity } from "./entity/user";

AppDataSource.initialize()
  .then(async () => {
    const user = new UserEntity();
    user.name = "Shidalgo";
    user.email = "shdialgo@correo.com";
    user.password = "12345";

    await AppDataSource.getRepository(UserEntity).save(user);

    const user2 = new UserEntity();
    user2.name = "sergio";
    user2.email = "sergio@correo.com";
    user2.password = "12345";

    await AppDataSource.getRepository(UserEntity).save(user2);

    console.log("AppDataSource initialized");
  })
  .catch((error) => console.log(error.message));
