import "reflect-metadata";

import { DataSource } from "typeorm";

import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mongodb",
  url: "mongodb://root:12345@localhost/db?retryWrites=true&w=majority&authSource=admin",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
