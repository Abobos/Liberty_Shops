import express, { Application } from "express";

import indexRoute from "./routes";

export class App {
  app: Application;

  constructor(private port?: number) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set("port", this.port || 3000 || process.env.PORT);
  }

  middlewares() {}

  routes() {
    this.app.use(indexRoute);
  }

  getEnv() {
    return this.app.get("env");
  }

  getPort() {
    return this.app.get("port");
  }
}
