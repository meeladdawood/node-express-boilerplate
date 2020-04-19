const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

// Load env config
dotenv.config({ path: "./config/config.env" });

// Load our models
const Bootcamp = require("./models/Bootcamp");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Read JSON Files
const bootcamps = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, "utf-8")
);

// Import into DB
const importData = async () => {
  try {
    await Bootcamp.create(bootcamps);

    console.log("Data Imported....".green.inverse);
    process.exit();
  } catch (err) {
    console.log("err", err);
  }
};

// Delete Data
const deleteData = async () => {
  try {
    await Bootcamp.deleteMany();

    console.log("Data Destoryed....".red.inverse);
    process.exit();
  } catch (err) {
    console.log("err", err);
  }
};
if (process.argv[2] === "-i") {
  importData();
} else if (process.argv === "-d") {
  console.log("HERE");
  deleteData();
}