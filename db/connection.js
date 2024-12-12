const { Sequelize } = require("sequelize");
require("dotenv").config();
console.log("aaaa", process.env.DATABASE_URL);
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres", // Specify the database dialect
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
module.exports = { sequelize };
