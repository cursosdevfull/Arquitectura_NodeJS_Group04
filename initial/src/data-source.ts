import "reflect-metadata";

import { DataSource } from "typeorm";

import { CarEntity } from "./entity/car";
import { UserEntity } from "./entity/user";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3310,
  username: "shidalgo",
  password: "12345",
  database: "db",
  synchronize: true,
  logging: true,
  entities: [UserEntity, CarEntity],
  migrations: [],
  subscribers: [],
});
