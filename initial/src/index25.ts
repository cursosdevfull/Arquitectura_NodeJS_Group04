import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(async () => {
    const manager = AppDataSource.manager;

    const cars = await manager.query("call getCarsByAge(?)", [2026]);

    console.log("Cars: ", cars[0]);

    console.log("AppDataSource initialized");
  })
  .catch((error) => console.log(error.message));
