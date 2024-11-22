import "reflect-metadata";
import { Client } from "pg";
import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "../consts";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true,
  logging: false,
  entities: ["./src/modules/**/*Entity.ts"],
  migrations: ["./src/shared/typeorm/migrations/*.ts"],
  subscribers: [],
});

async function createDatabase() {
  const client = new Client({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: "postgres",
  });

  console.log("Checking if database exists...");
  try {
    await client.connect();

    const dbExists = await client.query(
      `SELECT 1 FROM pg_database WHERE datname = $1`,
      [DB_NAME]
    );

    if (dbExists.rowCount! > 0) {
      console.log(`Database ${DB_NAME} already exists. Skipping creation...`);
    } else {
      console.log("Creating database...");
      await client.query(`CREATE DATABASE ${DB_NAME}`);
      console.log(`Database ${DB_NAME} created successfully!`);
    }

    console.log("Ensuring 'uuid-ossp' extension is enabled...");
    await client.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
  } catch (error) {
    console.error("Error checking or creating database", error);
  } finally {
    await client.end();
  }
}

createDatabase().then(() => {
  AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });
});
