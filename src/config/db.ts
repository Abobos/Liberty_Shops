export default {
  development: {
    envVariable: "DATABASE_URL_DEV",
    dialect: "postgres"
  },

  test: {
    envVariable: "DATABASE_URL_TEST",
    dialect: "postgres"
  },

  production: {
    envVariable: "DATABASE_URL",
    dialect: "postgres"
  }
};
