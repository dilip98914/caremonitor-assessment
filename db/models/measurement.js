const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");
const { Patient } = require("./patient");

const Measurement = sequelize.define(
  "Measurement",
  {
    patientId: {
      type: DataTypes.INTEGER,
      references: {
        model: Patient,
        key: "id",
      },
    },
    uom: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    from_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    to_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    on_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    low: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    high: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    measurement: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    tableName: "measurements",
    timestamps: false,
  }
);
module.exports = { Measurement };
