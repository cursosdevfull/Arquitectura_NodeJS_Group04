import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(async () => {
    const manager = AppDataSource.manager;

    const cars = await manager.query("select * from car");

    console.log("Cars: ", cars);

    console.log("AppDataSource initialized");
  })
  .catch((error) => console.log(error.message));
