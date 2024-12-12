const { Measurement } = require("../db/models/measurement");

async function storeMeasurements(data, patientId) {
  const entries = [];

  for (const [name, details] of Object.entries(data)) {
    const { uom, data: measurements } = details;

    if (measurements) {
      measurements.forEach((item) => {
        entries.push({
          patientId,
          name,
          uom,
          from_date: item.from_date || null,
          to_date: item.to_date || null,
          on_date: item.on_date || null,
          low: item.measurement?.low || null,
          high: item.measurement?.high || null,
          measurement: item.measurement?.toString() || null,
        });
      });
    }
  }

  await Measurement.bulkCreate(entries);
}

module.exports = { storeMeasurements };
