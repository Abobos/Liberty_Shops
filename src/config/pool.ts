import { Pool } from "pg";
import "dotenv/config";

import { envrionmentDetails } from "../interface";
import { logger } from "../utils";
import envConfigDb from "./db";

const env: string = process.env.NODE_ENV || "development";

const t: envrionmentDetails = envConfigDb[env];
const config = process.env[t.envVariable];

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
