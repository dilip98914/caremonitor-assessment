const express = require("express");
const app = express();
const dotenv = require("dotenv");
const measurementRoutes = require("./routes/measurements");
dotenv.config();
app.use(express.json());

app.use("/", measurementRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
