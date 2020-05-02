const express = require("express");
const { getReviews } = require("../controllers/reviews");

const Review = require("../models/Review");

const router = express.Router({ mergeParams: true });

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

router.use(protect);
router.use(authorize("admin", "publisher"));

router.route("/").get(
  advancedResults(Review, {
    path: "bootcamp",
    select: "name description",
  }),
  getReviews
);
// router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
