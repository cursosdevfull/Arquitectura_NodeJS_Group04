import { AppDataSource } from "./data-source";
import { CarEntity } from "./entity/car";

AppDataSource.initialize()
  .then(async () => {
    const car = new CarEntity();
    car.brand = "Hyundai";
    car.model = "Santa Fe";
    car.year = 2024;

    await AppDataSource.getRepository(CarEntity).save(car);

    const car2 = new CarEntity();
    car2.brand = "Hyundai";
    car2.model = "Tucson";
    car2.year = 2020;

    await AppDataSource.getRepository(CarEntity).save(car2);

    const car3 = new CarEntity();
    car3.brand = "Hyundai";
    car3.model = "Accent";
    car3.year = 2021;

    await AppDataSource.getRepository(CarEntity).save(car3);

    const car4 = new CarEntity();
    car4.brand = "Hyundai";
    car4.model = "Elantra";
    car4.year = 2019;

    await AppDataSource.getRepository(CarEntity).save(car4);

    console.log("AppDataSource initialized");
  })
  .catch((error) => console.log(error.message));
