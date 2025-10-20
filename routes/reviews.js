// const express = require("express");
// const router = express.Router({ mergeParams: true });
// const Listing = require("../models/listing");
// const Review = require("../models/review");
// const { isLoggedIn, validateReview, isReviewAuthor } = require("../middleware");
// const wrapAsync = require("../utils/wrapAsync");
// const ExpressError = require("../utils/ExpressError");

// // ---------------- CREATE REVIEW ----------------
// router.post(
//   "/",
//   isLoggedIn,
//   validateReview,
//   wrapAsync(async (req, res) => {
//     const listing = await Listing.findById(req.params.id);
//     if (!listing) {
//       req.flash("error", "Listing not found!");
//       return res.redirect("/listings");
//     }

//     const review = new Review(req.body.review);
//     review.author = req.user._id; // ✅ logged-in user is author
//     listing.reviews.push(review);

//     await review.save();
//     await listing.save();

//     req.flash("success", "🎉 Review added successfully!");
//     res.redirect(`/listings/${listing._id}`);
//   })
// );

// // ---------------- DELETE REVIEW ----------------
// router.delete(
//   "/:reviewId",
//   isLoggedIn,
//   isReviewAuthor, // ✅ only author can delete
//   wrapAsync(async (req, res) => {
//     const { id, reviewId } = req.params;

//     // remove review reference from listing
//     await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
//     await Review.findByIdAndDelete(reviewId);

//     req.flash("success", "🗑️ Review deleted successfully!");
//     res.redirect(`/listings/${id}`);
//   })
// );

// module.exports = router;



const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");
const Listing = require("../models/listing");
const Review = require("../models/review");

// 🧩 Create Review
router.post("/", isLoggedIn, (req, res, next) => {
  if (!req.body.review.rating) req.body.review.rating = 1;
  next();
}, validateReview, wrapAsync(async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) throw new ExpressError("Listing not found", 404);

  const review = new Review(req.body.review);
  review.author = req.user._id;

  listing.reviews.push(review);
  await review.save();
  await listing.save();

  req.flash("success", "✅ Review added!");
  res.redirect(`/listings/${listing._id}`);
}));

// 🗑️ Delete Review
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(async (req, res) => {
  const { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "🗑️ Review deleted successfully!");
  res.redirect(`/listings/${id}`);
}));

module.exports = router;


// const mongoose = require("mongoose");

// const reviewSchema = new mongoose.Schema({
//   rating: {
//     type: Number,
//     min: 1,
//     max: 5,
//     required: true,
//   },
//   comment: {
//     type: String,
//     trim: true,
//   },
//   author: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
// });

// // ✅ Export model
// module.exports = mongoose.model("Review", reviewSchema);
