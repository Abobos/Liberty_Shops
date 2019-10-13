import http from "http";
import { App } from "./app";
import { logger } from "./utils";

const expressApp = new App();

const PORT = expressApp.getPort();
const env = expressApp.getEnv();

const server = http.createServer(expressApp.app);

server.listen(PORT, () =>
  logger(`${env}:server`, `App started on PORT ${PORT}`)
);
