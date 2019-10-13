import express, { Application } from "express";

export class App {
  app: Application;

  constructor(private port?: number) {
    this.app = express();
    this.settings();
  }

  settings() {
    this.app.set("port", this.port || 3000 || process.env.PORT);
  }

  middlewares() {}

  routes() {}

  getEnv() {
    return this.app.get("env");
  }

  getPort() {
    return this.app.get("port");
  }
}
