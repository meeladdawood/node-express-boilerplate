const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: "Show all bootcamps" });
});

router.get("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, data: `get bootcamp ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.status(200).json({ success: true, data: "Create new bootcamps" });
});

router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, data: `Update bootcamp ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, data: `Delete bootcamp ${req.params.id}` });
});

module.exports = router;
