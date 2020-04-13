exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, data: "Show all bootcamps" });
};

exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, data: `get bootcamp ${req.params.id}` });
};

exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, data: "Create new bootcamps" });
};

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, data: `Update bootcamp ${req.params.id}` });
};

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, data: `Delete bootcamp ${req.params.id}` });
};
