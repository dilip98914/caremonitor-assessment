function aggregateHeartRateData(data) {
  const aggregated = [];

  // Sort data by date
  //   data.sort((a, b) => new Date(a.on_date) - new Date(b.on_date));

  let intervalStart = null;
  let intervalEnd = null;
  let measurements = [];

  data.forEach(({ on_date, measurement }) => {
    const timestamp = new Date(on_date);

    if (!intervalStart) {
      intervalStart = new Date(
        Math.floor(timestamp.getTime() / (15 * 60 * 1000)) * 15 * 60 * 1000
      );
      intervalEnd = new Date(intervalStart.getTime() + 15 * 60 * 1000);
    }

    if (timestamp >= intervalEnd) {
      if (measurements.length > 0) {
        aggregated.push({
          from_date: intervalStart.toISOString(),
          to_date: intervalEnd.toISOString(),
          measurement: {
            low: Math.min(...measurements),
            high: Math.max(...measurements),
          },
        });
      }

      while (timestamp >= intervalEnd) {
        intervalStart = intervalEnd;
        intervalEnd = new Date(intervalStart.getTime() + 15 * 60 * 1000);
      }

      measurements = [];
    }

    // Add measurement to the current interval
    measurements.push(Number(measurement));
  });

  // Add the final interval
  if (measurements.length > 0) {
    aggregated.push({
      from_date: intervalStart.toISOString(),
      to_date: intervalEnd.toISOString(),
      measurement: {
        low: Math.min(...measurements),
        high: Math.max(...measurements),
      },
    });
  }

  return aggregated;
}
module.exports = { aggregateHeartRateData };
