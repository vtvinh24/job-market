import { Sequelize } from "@sequelize/core";
import { MsSqlDialect } from "@sequelize/mssql";
import { Example } from "./orms/ExampleModel.js.example";
import config from "../../config.json";

// equivalent to old DBContext.js
const sequelize = new Sequelize({
  dialect: MsSqlDialect,
  server: config.database.server,
  port: config.database.port,
  database: config.database.database,
  schema: 'dbo1',
  authentication: {
    type: "default",
    options: {
      userName: config.database.user,
      password: config.database.password,
    },
  },
  models: await importModels(__dirname + '/**/*.models.orms.{ts,js}'),
});
