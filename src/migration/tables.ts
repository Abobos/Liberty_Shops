import db from "../config/pool";
import { logger } from "../utils";

const users = `
  DROP TABLE IF EXISTS users CASCADE;
  CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(128) NOT NULL,
    email VARCHAR(60) NOT NULL,
    password VARCHAR(60) NOT NULL,
    address VARCHAR(128) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    is_admin BOOLEAN NOT NULL DEFAULT false
  );`;

const properties = `
  DROP TABLE IF EXISTS properties CASCADE;
  CREATE TABLE properties(
    id SERIAL PRIMARY KEY,
    owner INT NOT NULL,
    type VARCHAR(20) NOT NULL,
    address VARCHAR(128) NOT NULL,
    quantity VARCHAR(128) NOT NULL,
    image_url VARCHAR(128) NOT NULL,
    FOREIGN KEY (owner) REFERENCES "users" (id) ON UPDATE CASCADE ON DELETE CASCADE
  );`;

const carts = `
DROP TABLE IF EXISTS carts CASCADE;
CREATE TABLE carts(
  id SERIAL PRIMARY KEY,
  property_id INT NOT NULL,
  owner INT NOT NULL,
  FOREIGN KEY (property_id) REFERENCES "properties" (id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (owner) REFERENCES "users" (id) ON UPDATE CASCADE ON DELETE CASCADE
);`;

const orders = `
DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders(
  id SERIAL PRIMARY KEY,
  property_id INT NOT NULL,
  address VARCHAR(128) NOT NULL,
  date_of_delivery TIMESTAMP NOT NULL,
  created_an TIMESTAMP NOT NULL DEFAULT NOW(),
  FOREIGN KEY (property_id) REFERENCES "properties" (id) ON UPDATE CASCADE ON DELETE CASCADE
);`;

(async function migrate() {
  try {
    await db.query(`${users} ${properties} ${carts} ${orders}`);
    logger("migration:database", "Table created");
  } catch (e) {
    logger("migration-error:database", `${e}: Table not created`);
    process.exit(1);
  }
})();
