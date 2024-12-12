const express = require("express");
const router = express.Router();
//note:patient data could be fetched from another server
const patientData = require("../clinical_metrics.json");
const { Patient } = require("../db/models/patient");
const { storeMeasurements } = require("../services/storeMeasurements");
const {
  aggregateHeartRateData,
} = require("../services/aggregateHeartRateData");
const { sequelize } = require("../db/connection");

router.post("/heart-rate-aggregation", async (req, res) => {
  const aggregatedData = aggregateHeartRateData(
    patientData.clinical_data.HEART_RATE.data
  );
  const responseData = {
    ...patientData.clinical_data,
    HEART_RATE: {
      uom: "beats/min",
      data: aggregatedData,
      name: "Heart Rate",
    },
    STEPS: {
      uom: "",
      data: patientData.clinical_data.STEPS.data,
      name: "Steps",
    },
  };
  await sequelize.sync();
  const [patient, created] = await Patient.findOrCreate({
    where: { name: req.body.patientName },
    defaults: { name: "testuser" },
  });
  await storeMeasurements(responseData, patient.id);
  res.json(responseData);
});

module.exports = router;
