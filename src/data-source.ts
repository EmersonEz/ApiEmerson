import { subscribe } from "diagnostics_channel";
import { DataSource, Migration } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "passwordsql",
    port:3306,
    database: "test-api",
    synchronize: true,
    logging: true,
    entities:["dist/models/**/*.js"],
    subscribers:["dist/subscribers/**/*..js"],
    migrations:["dist/migrations/**/*.js"]


})