import { envrionmentDetails } from "../interfaces";

export const envDatabaseSettings = (env: string): envrionmentDetails => {
  let config = {
    envVariable: "",
    dialect: "postgres"
  };

  if (env === "development") config.envVariable = "DATABASE_URL_DEV";
  else if (env === "test") config.envVariable = "DATABASE_URL_TEST";
  else config.envVariable = "DATABASE_URL_PROD";

  return config;
};
