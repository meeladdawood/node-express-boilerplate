const express = require("express");
const dotenv = require("dotenv");
const logger = require("./middleware/logger");

// Route Files
const bootcamps = require("./routes/bootcamps");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(logger);

// Mount router
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("App listening on port", PORT);
});
