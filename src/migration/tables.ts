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

const products = `
  DROP TABLE IF EXISTS products CASCADE;
  CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    owner INT NOT NULL,
    type VARCHAR(20) NOT NULL,
    address VARCHAR(128) NOT NULL,
    quantity VARCHAR(128) NOT NULL,
    image_url VARCHAR(128) NOT NULL
  );`;

const carts = `
DROP TABLE IF EXISTS carts CASCADE;
CREATE TABLE carts(
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  FOREIGN KEY (product_id) REFERENCES "products" (id) ON UPDATE CASCADE ON DELETE CASCADE
);`;

const orders = `
DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders(
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  OWNER INT NOT NULL,
  address VARCHAR(128) NOT NULL,
  date_of_delivery TIMESTAMP NOT NULL,
  created_an TIMESTAMP NOT NULL DEFAULT NOW(),
  FOREIGN KEY (product_id) REFERENCES "products" (id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (owner) REFERENCES "users" (id) ON UPDATE CASCADE ON DELETE CASCADE
);`;

(async function migrate() {
  try {
    await db.query(`${users} ${products} ${carts} ${orders}`);
    logger("migration:database", "Table created");
    process.exit();
  } catch (e) {
    logger("migration-error:database", `${e}: Table not created`);
    process.exit(1);
  }
})();
