import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const myDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "frostmonk",
  database: "clinic_db",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
})
