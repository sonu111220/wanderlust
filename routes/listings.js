// 


// const express = require("express");
// const router = express.Router();
// const Listing = require("../models/listing");
// const wrapAsync = require("../utils/wrapAsync");
// const ExpressError = require("../utils/ExpressError");
// const { isLoggedIn, validateListing } = require("../middleware");

// // ✅ INDEX — Show all listings
// router.get(
//   "/",
//   wrapAsync(async (req, res) => {
//     const listings = await Listing.find({});
//     res.render("listings/index", { listings });
//   })
// );

// // ✅ NEW — Form to create new listing
// router.get("/new", isLoggedIn, (req, res) => {
//   res.render("listings/new");
// });

// // ✅ CREATE — Save listing to DB
// router.post(
//   "/",
//   isLoggedIn,
//   validateListing,
//   wrapAsync(async (req, res) => {
//     const newListing = new Listing(req.body.listing);
//     newListing.owner = req.user._id;
//     await newListing.save();
//     req.flash("success", "🎉 Listing created successfully!");
//     res.redirect(`/listings/${newListing._id}`);
//   })
// );

// // ✅ SHOW — Single listing details
// router.get(
//   "/:id",
//   wrapAsync(async (req, res) => {
//     const listing = await Listing.findById(req.params.id)
//       .populate("owner")
//       .populate({
//         path: "reviews",
//         populate: { path: "author" },
//       });

//     if (!listing) {
//       req.flash("error", "Listing not found!");
//       return res.redirect("/listings");
//     }

//     res.render("listings/show", { listing });
//   })
// );

// module.exports = router;

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


// const express = require("express");
// const router = express.Router();
// const Listing = require("../models/listing");
// const { isLoggedIn, validateListing } = require("../middleware");
// const wrapAsync = require("../utils/wrapAsync");

// // ✅ Multer + Cloudinary setup
// const multer = require("multer");
// const { storage } = require("../cloudConfig");
// const upload = multer({ storage });

// // 🏠 All Listings
// router.get("/", wrapAsync(async (req, res) => {
//   const listings = await Listing.find({});
//   res.render("listings/index", { listings });
// }));

// // ➕ New Listing Form
// router.get("/new", isLoggedIn, (req, res) => {
//   res.render("listings/new");
// });

// // 🧩 Create Listing (with Cloudinary)
// router.post("/", isLoggedIn, upload.single("listing[image]"), validateListing, wrapAsync(async (req, res) => {
//   const newListing = new Listing(req.body.listing);
//   newListing.owner = req.user ? req.user._id : null;

//   if (req.file) {
//     newListing.image = { url: req.file.path, filename: req.file.filename };
//   }

//   await newListing.save();
//   req.flash("success", "✅ New listing created!");
//   res.redirect(`/listings/${newListing._id}`);
// }));

// // 👀 Show Listing
// router.get("/:id", wrapAsync(async (req, res) => {
//   const { id } = req.params;
//   const listing = await Listing.findById(id)
//     .populate({ path: "reviews", populate: { path: "author" } })
//     .populate("owner");

//   if (!listing) {
//     req.flash("error", "Listing not found");
//     return res.redirect("/listings");
//   }

//   res.render("listings/show", { listing });
// }));

// // ✏️ Edit Form
// router.get("/:id/edit", isLoggedIn, wrapAsync(async (req, res) => {
//   const listing = await Listing.findById(req.params.id);
//   if (!listing) {
//     req.flash("error", "Listing not found");
//     return res.redirect("/listings");
//   }
//   res.render("listings/edit", { listing });
// }));

// // 🔁 Update Listing (Cloudinary)
// router.put("/:id", isLoggedIn, upload.single("listing[image]"), validateListing, wrapAsync(async (req, res) => {
//   const { id } = req.params;
//   const listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

//   if (req.file) {
//     listing.image = { url: req.file.path, filename: req.file.filename };
//   }

//   await listing.save();
//   req.flash("success", "✅ Listing updated!");
//   res.redirect(`/listings/${listing._id}`);
// }));

// // ❌ Delete Listing
// router.delete("/:id", isLoggedIn, wrapAsync(async (req, res) => {
//   await Listing.findByIdAndDelete(req.params.id);
//   req.flash("success", "🗑️ Listing deleted successfully!");
//   res.redirect("/listings");
// }));

// module.exports = router;



// const express = require("express");
// const router = express.Router();
// const Listing = require("../models/listing");
// const multer = require("multer");
// const { storage } = require("../cloudConfig");
// const upload = multer({ storage });

// // ✅ Index Route — Show all listings
// router.get("/", async (req, res) => {
//   const listings = await Listing.find({});
//   res.render("listings/index", { listings });
// });

// // ✅ New Form Route
// router.get("/new", (req, res) => {
//   res.render("listings/new");
// });

// // ✅ Create Route — Cloudinary Upload + Save DB
// router.post("/", upload.single("imageFile"), async (req, res) => {
//   try {
//     const newListing = new Listing(req.body.listing);

//     // If file uploaded → Cloudinary
//     if (req.file) {
//       newListing.image = {
//         url: req.file.path,
//         filename: req.file.filename,
//       };
//     }

//     await newListing.save();
//     req.flash("success", "Listing created successfully!");
//     res.redirect("/listings");
//   } catch (e) {
//     console.log(e);
//     req.flash("error", "Something went wrong while creating listing.");
//     res.redirect("/listings/new");
//   }
// });

// // ✅ Show Route
// router.get("/:id", async (req, res) => {
//   const listing = await Listing.findById(req.params.id).populate("reviews");
//   if (!listing) {
//     req.flash("error", "Listing not found!");
//     return res.redirect("/listings");
//   }
//   res.render("listings/show", { listing });
// });

// // ✅ Delete Route
// router.delete("/:id", async (req, res) => {
//   await Listing.findByIdAndDelete(req.params.id);
//   req.flash("success", "Listing deleted!");
//   res.redirect("/listings");
// });

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const Listing = require("../models/listing");
// const ExpressError = require("../utils/ExpressError");
// const wrapAsync = require("../utils/wrapAsync");
// const { validateListing, isLoggedIn } = require("../middleware");

// // 🟢 Cloudinary setup
// const multer = require("multer");
// const { storage } = require("../cloudConfig");
// const upload = multer({ storage });

// // 🏠 Index - Show all listings
// router.get(
//   "/",
//   wrapAsync(async (req, res) => {
//     const listings = await Listing.find({}).populate("owner");
//     res.render("listings/index", { listings });
//   })
// );

// // ➕ New - Show form to create listing (Protected)
// router.get("/new", isLoggedIn, (req, res) => {
//   res.render("listings/new");
// });

// // 🧩 Create - Add new listing to DB (with image upload)
// router.post(
//   "/",
//   isLoggedIn,
//   upload.single("imageFile"), // ✅ Important for file upload
//   validateListing,
//   wrapAsync(async (req, res) => {
//     const newListing = new Listing(req.body.listing);
//     newListing.owner = req.user._id;

//     // ✅ Agar file upload hui ho to image info save karo
//     if (req.file) {
//       newListing.image = {
//         url: req.file.path,      // Cloudinary URL
//         filename: req.file.filename, // Cloudinary filename
//       };
//     }

//     await newListing.save();
//     req.flash("success", "🎉 New listing created successfully!");
//     res.redirect(`/listings/${newListing._id}`);
//   })
// );

// // 👀 Show - Show details of one listing
// router.get(
//   "/:id",
//   wrapAsync(async (req, res) => {
//     const { id } = req.params;

//     const listing = await Listing.findById(id)
//       .populate({
//         path: "reviews",
//         populate: { path: "author" },
//       })
//       .populate("owner");

//     if (!listing) {
//       req.flash("error", "Listing not found!");
//       return res.redirect("/listings");
//     }

//     res.render("listings/show", { listing });
//   })
// );

// module.exports = router;

// const express = require("express");
// const router = express.Router();
// const Listing = require("../models/listing");
// const ExpressError = require("../utils/ExpressError");
// const wrapAsync = require("../utils/wrapAsync");
// const { validateListing, isLoggedIn } = require("../middleware");

// // 🧩 Multer + Cloudinary setup
// const multer = require("multer");
// const { storage } = require("../cloudConfig"); // <-- make sure cloudConfig.js is correctly set up
// const upload = multer({ storage });

// // 🏠 Index - Show all listings
// router.get(
//   "/",
//   wrapAsync(async (req, res) => {
//     const listings = await Listing.find({}).populate("owner");
//     res.render("listings/index", { listings });
//   })
// );

// // ➕ New - Show form to create listing (Protected)
// router.get("/new", isLoggedIn, (req, res) => {
//   res.render("listings/new");
// });

// // 🧩 Create - Add new listing to DB (with Cloudinary upload)
// router.post(
//   "/",
//   isLoggedIn,
//   upload.single("listing[image]"), // 👈 Multer will handle the file upload
//   validateListing,
//   wrapAsync(async (req, res) => {
//     const newListing = new Listing(req.body.listing);
//     newListing.owner = req.user._id;

//     // ✅ If image was uploaded, store Cloudinary data
//     if (req.file) {
//       newListing.image = {
//         url: req.file.path,
//         filename: req.file.filename,
//       };
//     }

//     await newListing.save();
//     req.flash("success", "🎉 New listing created successfully!");
//     res.redirect(`/listings/${newListing._id}`);
//   })
// );

// // 👀 Show - Show details of one listing
// router.get(
//   "/:id",
//   wrapAsync(async (req, res) => {
//     const { id } = req.params;

//     const listing = await Listing.findById(id)
//       .populate({
//         path: "reviews",
//         populate: { path: "author" },
//       })
//       .populate("owner");

//     if (!listing) {
//       req.flash("error", "Listing not found!");
//       return res.redirect("/listings");
//     }

//     res.render("listings/show", { listing });
//   })
// );

// module.exports = router;



// const express = require("express");
// const router = express.Router();
// const Listing = require("../models/listing");
// const ExpressError = require("../utils/ExpressError");
// const wrapAsync = require("../utils/wrapAsync");
// const { validateListing, isLoggedIn } = require("../middleware");

// // 🏠 INDEX - Show all listings
// router.get(
//   "/",
//   wrapAsync(async (req, res) => {
//     const allListings = await Listing.find({});
//     res.render("listings/index", { allListings });
//   })
// );

// // ➕ NEW - Show form to create listing (Protected)
// router.get("/new", isLoggedIn, (req, res) => {
//   res.render("listings/new");
// });

// // 🧩 CREATE - Add new listing (Only logged in users)

// router.post(
//   "/",
//   isLoggedIn,
//   validateListing,
//   wrapAsync(async (req, res) => {
//     const newListing = new Listing(req.body.listing);
//     newListing.owner = req.user._id; // 👈 owner assign karo
//     await newListing.save();
//     req.flash("success", "🎉 New listing created successfully!");
//     res.redirect(`/listings/${newListing._id}`);
//   })
// );



// // 👀 SHOW - Details of one listing (populate owner + reviews)
// router.get(
//   "/:id",
//   wrapAsync(async (req, res) => {
//     const { id } = req.params;
//     const listing = await Listing.findById(id)
//       .populate("reviews")
//       .populate("owner"); // 👈 load owner info

//     if (!listing) {
//       req.flash("error", "Listing not found!");
//       return res.redirect("/listings");
//     }

//     res.render("listings/show", { listing });
//   })
// );

// // ✏️ EDIT - Show form to edit listing (Only owner)
// router.get(
//   "/:id/edit",
//   isLoggedIn,
//   wrapAsync(async (req, res) => {
//     const { id } = req.params;
//     const listing = await Listing.findById(id);

//     if (!listing) {
//       req.flash("error", "Listing not found!");
//       return res.redirect("/listings");
//     }

//     // 🧩 Check ownership
//     if (!listing.owner.equals(req.user._id)) {
//       req.flash("error", "⛔ You do not have permission to edit this listing!");
//       return res.redirect(`/listings/${id}`);
//     }

//     res.render("listings/edit", { listing });
//   })
// );

// // 🔄 UPDATE - Only owner can update
// router.put(
//   "/:id",
//   isLoggedIn,
//   validateListing,
//   wrapAsync(async (req, res) => {
//     const { id } = req.params;
//     const listing = await Listing.findById(id);

//     if (!listing) {
//       req.flash("error", "Listing not found!");
//       return res.redirect("/listings");
//     }

//     // 🧩 Check ownership
//     if (!listing.owner.equals(req.user._id)) {
//       req.flash("error", "⛔ You do not have permission to update this listing!");
//       return res.redirect(`/listings/${id}`);
//     }

//     const updatedListing = await Listing.findByIdAndUpdate(id, req.body.listing, {
//       new: true,
//       runValidators: true,
//     });

//     req.flash("success", "✅ Listing updated successfully!");
//     res.redirect(`/listings/${id}`);
//   })
// );

// // ❌ DELETE - Only owner can delete
// router.delete(
//   "/:id",
//   isLoggedIn,
//   wrapAsync(async (req, res) => {
//     const { id } = req.params;
//     const listing = await Listing.findById(id);

//     if (!listing) {
//       req.flash("error", "Listing not found!");
//       return res.redirect("/listings");
//     }

//     // 🧩 Check ownership
//     if (!listing.owner.equals(req.user._id)) {
//       req.flash("error", "⛔ You do not have permission to delete this listing!");
//       return res.redirect(`/listings/${id}`);
//     }

//     await Listing.findByIdAndDelete(id);
//     req.flash("success", "🗑️ Listing deleted successfully!");
//     res.redirect("/listings");
//   })
// );

// module.exports = router;

