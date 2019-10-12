import { Pool } from "pg";
import "dotenv/config";

import { logger } from "../utils";
import envConfig from "./db";

console.log(process.env.DATABASE_URL_DEV);
const env: string = process.env.NODE_ENV || "development";
const config: string = process.env[envConfig[env].envVariable];
const pool = new Pool({ connectionString: config });

pool
  .connect()
  .then(logger(`${env}:database`, `connected to ${env} database`))
  .catch((e: string) => logger(`${env}:database`, "something went wrong"));

export default pool;
