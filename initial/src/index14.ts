import { AppDataSource } from "./data-source";
import { CarEntity } from "./entity/car";

AppDataSource.initialize()
  .then(async () => {
    //const manager = AppDataSource.getRepository(CarEntity).manager;
    //const cars = await manager.find(CarEntity);
    //const users = await manager.find(UserEntity);

    //console.log("Users: ", users);

    const manager = AppDataSource.manager;

    const cars = await manager
      .createQueryBuilder()
      .from(CarEntity, "car")
      .select(["car.id", "car.brand", "car.model", "car.year"])
      //.where("car.year > :year", { year: 2018 })
      .where("car.year > :year and car.model = :model")
      .setParameters({ year: 2018, model: "Tucson" })
      .getMany();
    console.log("Cars: ", cars);

    console.log("AppDataSource initialized");
  })
  .catch((error) => console.log(error.message));
