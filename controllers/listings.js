const Listing = require("../models/listing");
const { cloudinary } = require("../cloudConfig");

module.exports.index = async (req, res) => {
  const listings = await Listing.find({});
  res.render("listings/index", { listings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new");
};

module.exports.createListing = async (req, res) => {
  const listingData = req.body.listing;

  if (!req.file) {
    req.flash("error", "Image upload failed! Please try again.");
    return res.redirect("/listings/new");
  }

  const newListing = new Listing(listingData);
  newListing.image = req.file.path;
  newListing.owner = req.user._id;

  await newListing.save();

  req.flash("success", "Successfully added new listing!");
  res.redirect(`/listings`);
};
