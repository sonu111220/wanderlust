

const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");
const { isLoggedIn, validateListing } = require("../middleware");
const wrapAsync = require("../utils/wrapAsync");
const { storage } = require("../cloudConfig");
const multer = require("multer");
const upload = multer({ storage });

// 🏠 All Listings
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const listings = await Listing.find({});
    res.render("listings/index", { listings });
  })
);

// ➕ New Listing Form
router.get("/new", isLoggedIn, (req, res) => {
  res.render("listings/new");
});

// 🧩 Create Listing (with Cloudinary upload)
router.post(
  "/",
  isLoggedIn,
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(async (req, res) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user ? req.user._id : null;

    if (!req.file) {
      req.flash("error", "⚠️ Please upload an image before submitting!");
      return res.redirect("/listings/new");
    }

    newListing.image = {
      url: req.file.path,
      filename: req.file.filename,
    };

    await newListing.save();
    req.flash("success", `✅ Listing "${newListing.title}" created successfully!`);
    res.redirect(`/listings/${newListing._id}`);
  })
);

// 👀 Show Single Listing
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id)
      .populate({
        path: "reviews",
        populate: { path: "author" },
      })
      .populate("owner");

    if (!listing) {
      req.flash("error", "❌ Listing not found!");
      return res.redirect("/listings");
    }

    res.render("listings/show", { listing });
  })
);

// ✏️ Edit Listing Form
router.get(
  "/:id/edit",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
      req.flash("error", "⚠️ Listing not found!");
      return res.redirect("/listings");
    }

    res.render("listings/edit", { listing });
  })
);

// 🔁 Update Listing (with optional new Cloudinary image)
router.put(
  "/:id",
  isLoggedIn,
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if (req.file) {
      listing.image = {
        url: req.file.path,
        filename: req.file.filename,
      };
    }

    await listing.save();
    req.flash("success", `✏️ "${listing.title}" updated successfully!`);
    res.redirect(`/listings/${listing._id}`);
  })
);

// ❌ Delete Listing
router.delete(
  "/:id",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "🗑️ Listing deleted successfully!");
    res.redirect("/listings");
  })
);

module.exports = router;




