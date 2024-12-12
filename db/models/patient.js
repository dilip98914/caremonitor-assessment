const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");

const Patient = sequelize.define(
  "Patient",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "patients",
    timestamps: false,
  }
);

module.exports = { Patient };
