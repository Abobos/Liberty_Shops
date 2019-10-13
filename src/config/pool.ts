import { Pool } from "pg";
import "dotenv/config";

import { envrionmentDetails } from "../interfaces";
import { logger } from "../utils";
import { envDatabaseSettings } from "./db";

const env: string = process.env.NODE_ENV || "development";
const envConfig: envrionmentDetails = envDatabaseSettings(env);
const { envVariable } = envConfig;

const config = process.env[envVariable];
const pool = new Pool({ connectionString: config });

pool
  .connect()
  .then(() => {
    logger(`${env}:database`, `connected to ${env} database`);
    process.exit();
  })
  .catch((e: string) => {
    logger(`${env}:database`, "something went wrong");
    process.exit(1);
  });

export default pool;
