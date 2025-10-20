// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const Listing = require("./models/listing.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// main()
//   .then(() => {
//     console.log("connected to DB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function main() {
//   await mongoose.connect(MONGO_URL);
// }

//   app.get("/", (req, res) => {
//   res.send("Hi, I am root");
// });

// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My New Villa",
//     description: "By the beach",
//     price: 1200,
//     location: "Calangute, Goa",
//     country: "India",
//   });

//   await sampleListing.save();
//   console.log("sample was saved");
//   res.send("successful testing");
// });

// app.listen(8080, () => {
//   console.log("server is listening to port 8080");
// });

// const express = require("express");
// const mongoose = require("mongoose");
// const path = require("path");
// const methodOverride = require("method-override");

// const Listing = require("./models/listing"); // ✅ model import

// const app = express();

// // Database connection
// mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
//   .then(() => {
//     console.log("✅ MongoDB connected");
//   })
//   .catch((err) => {
//     console.log("❌ MongoDB error:", err);
//   });

// // Middleware
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));

// // Root route
// app.get("/", (req, res) => {
//   res.send("Welcome to WanderLust!");
// });

// // ✅ Index route for listings
// app.get("/listings", async (req, res) => {
//   try {
//     const listings = await Listing.find({});
//     res.render("listings/index", { listings });
//   } catch (err) {
//     res.send("Error fetching listings: " + err);
//   }
// });

// // ✅ Test route to insert one sample listing
// app.get("/testListing", async (req, res) => {
//   try {
//     let sampleListing = new Listing({
//       title: "My New Villa",
//       description: "By the beach",
//       price: 1200,
//       location: "Calangute, Goa",
//       country: "India",
//     });

//     await sampleListing.save();
//     console.log("✅ Sample listing saved");
//     res.send("Sample listing created successfully!");
//   } catch (err) {
//     res.send("Error creating listing: " + err);
//   }
// });

// // Server
// app.listen(8080, () => {
//   console.log("🚀 Server running on port 8080");
// });


// const express = require("express");
// const mongoose = require("mongoose");
// const path = require("path");
// const methodOverride = require("method-override");

// const Listing = require("./models/listing"); // ✅ model import

// const app = express();

// // Database connection
// mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
//   .then(() => {
//     console.log("✅ MongoDB connected");
//   })
//   .catch((err) => {
//     console.log("❌ MongoDB error:", err);
//   });

// // Middleware
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));

// // Root route
// app.get("/", (req, res) => {
//   res.send("Welcome to WanderLust!");
// });

// // ✅ Index route (all listings)
// app.get("/listings", async (req, res) => {
//   try {
//     const listings = await Listing.find({});
//     res.render("listings/index", { listings });
//   } catch (err) {
//     res.send("Error fetching listings: " + err);
//   }
// });

// // ✅ Show route (single listing details)
// app.get("/listings/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const listing = await Listing.findById(id);
//     if (!listing) {
//       return res.send("Listing not found");
//     }
//     res.render("listings/show", { listing });
//   } catch (err) {
//     res.send("Error fetching listing: " + err);
//   }
// });

// // ✅ Edit form route
// app.get("/listings/:id/edit", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const listing = await Listing.findById(id);
//     if (!listing) {
//       return res.send("Listing not found");
//     }
//     res.render("listings/edit", { listing });
//   } catch (err) {
//     res.send("Error fetching listing for edit: " + err);
//   }
// });

// // ✅ Update route (PUT)
// app.put("/listings/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedListing = await Listing.findByIdAndUpdate(id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     res.redirect(`/listings/${updatedListing._id}`);
//   } catch (err) {
//     res.send("Error updating listing: " + err);
//   }
// });

// // ✅ Delete route
// app.delete("/listings/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     await Listing.findByIdAndDelete(id);
//     res.redirect("/listings");
//   } catch (err) {
//     res.send("Error deleting listing: " + err);
//   }
// });

// // Server
// app.listen(8080, () => {
//   console.log("🚀 Server running on port 8080");
// });

// const express = require("express");
// const mongoose = require("mongoose");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const path = require("path");

// const Listing = require("./models/listing");

// const app = express();

// // DB connection
// mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((err) => {
//     console.log("DB connection error:", err);
//   });

// // Middleware
// app.engine("ejs", ejsMate);
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));

// // Routes

// // Home
// app.get("/", (req, res) => {
//   res.send("Hi, I am root");
// });

// // Index - Show all listings
// app.get("/listings", async (req, res) => {
//   const allListings = await Listing.find({});
//   res.render("listings/index", { allListings });
// });

// // New - Show form
// app.get("/listings/new", (req, res) => {
//   res.render("listings/new");
// });

// // Create - Add new listing to DB
// app.post("/listings", async (req, res) => {
//   const { listing } = req.body;
//   const newListing = new Listing(listing);
//   await newListing.save();
//   res.redirect("/listings");
// });

// // Show - Show details of one listing
// app.get("/listings/:id", async (req, res) => {
//   const { id } = req.params;
//   const listing = await Listing.findById(id);
//   res.render("listings/show", { listing });
// });

// // Edit form
// app.get("/listings/:id/edit", async (req, res) => {
//   const { id } = req.params;
//   const listing = await Listing.findById(id);
//   res.render("listings/edit", { listing });
// });

// // Update
// app.put("/listings/:id", async (req, res) => {
//   const { id } = req.params;
//   const { listing } = req.body;
//   await Listing.findByIdAndUpdate(id, listing);
//   res.redirect(`/listings/${id}`);
// });

// // Delete
// app.delete("/listings/:id", async (req, res) => {
//   const { id } = req.params;
//   await Listing.findByIdAndDelete(id);
//   res.redirect("/listings");
// });

// // Server
// app.listen(8080, () => {
//   console.log("Server is running on port 8080");
// });


// const express = require("express");
// const mongoose = require("mongoose");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const path = require("path");

// const Listing = require("./models/listing");

// const app = express();

// // DB connection
// mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((err) => {
//     console.log("DB connection error:", err);
//   });

// // Middleware
// app.engine("ejs", ejsMate);
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.engine("ejs",ejsMate);
// app.use(express.static(path.join(__dirname,"/public")));

// // Routes

// // Home
// app.get("/", (req, res) => {
//   res.send("Hi, I am root");
// });

// // Index - Show all listings
// app.get("/listings", async (req, res) => {
//   const allListings = await Listing.find({});
//   res.render("listings/index", { allListings });
// });

// // New - Show form
// app.get("/listings/new", (req, res) => {
//   res.render("listings/new");
// });

// // Create - Add new listing to DB
// app.post("/listings", async (req, res,next) => {
//     try{
//          const { listing } = req.body;
//   const newListing = new Listing( listing);
//   await newListing.save();
//   res.redirect("/listings");
//     } catch(err) {
//         next(err);
//     }
// });

// // Show - Show details of one listing
// app.get("/listings/:id", async (req, res) => {
//   const { id } = req.params;
//   const listing = await Listing.findById(id);
//   res.render("listings/show", { listing });
// });

// // Edit form (GET request)
// app.get("/listings/:id/edit", async (req, res) => {
//   const { id } = req.params;
//   const listing = await Listing.findById(id);
//   res.render("listings/edit", { listing });
// });

// // Update listing (PUT request)
// app.put("/listings/:id", async (req, res) => {
//   const { id } = req.params;
//   const { listing } = req.body;
//   await Listing.findByIdAndUpdate(id, listing);
//   res.redirect(`/listings/${id}`);
// });

// // Delete
// app.delete("/listings/:id", async (req, res) => {
//   const { id } = req.params;
//   await Listing.findByIdAndDelete(id);
//   res.redirect("/listings");
// });


// app.use((err,req,res,next)=>{
//     res.send("Something went wrong!");
// });
// // Server
// app.listen(8080, () => {
//   console.log("Server is running on port 8080");
// });


// const express = require("express");
// const mongoose = require("mongoose");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const path = require("path");

// const Listing = require("./models/listing");
// const wrapAsync = require("./utils/wrapAsync");  // ⬅️ Import your wrapper

// const app = express();

// // DB connection
// mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((err) => {
//     console.log("DB connection error:", err);
//   });

// // Middleware
// app.engine("ejs", ejsMate);
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname, "/public")));

// // Routes

// // Home
// app.get("/", (req, res) => {
//   res.send("Hi, I am root");
// });

// // Index - Show all listings
// app.get("/listings", wrapAsync(async (req, res) => {
//   const allListings = await Listing.find({});
//   res.render("listings/index", { allListings });
// }));

// // New - Show form
// app.get("/listings/new", (req, res) => {
//   res.render("listings/new");
// });

// // Create - Add new listing
// app.post("/listings", wrapAsync(async (req, res) => {
//   const { listing } = req.body;
//   const newListing = new Listing(listing);
//   await newListing.save();
//   res.redirect("/listings");
// }));

// // Show one listing
// app.get("/listings/:id", wrapAsync(async (req, res) => {
//   const { id } = req.params;
//   const listing = await Listing.findById(id);
//   res.render("listings/show", { listing });
// }));

// // Edit form
// app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
//   const { id } = req.params;
//   const listing = await Listing.findById(id);
//   res.render("listings/edit", { listing });
// }));

// // Update listing
// app.put("/listings/:id", wrapAsync(async (req, res) => {
//   const { id } = req.params;
//   const { listing } = req.body;
//   await Listing.findByIdAndUpdate(id, listing, { runValidators: true });
//   res.redirect(`/listings/${id}`);
// }));

// // Delete
// app.delete("/listings/:id", wrapAsync(async (req, res) => {
//   const { id } = req.params;
//   await Listing.findByIdAndDelete(id);
//   res.redirect("/listings");
// }));

// // Error Handler
// app.use((err, req, res, next) => {
//   console.error(err);
//   if (err.name === "ValidationError") {
//     return res.send("Something went wrong! Invalid data entered.");
//   }
//   res.send("Something went wrong!");
// });

// // Server
// app.listen(8080, () => {
//   console.log("Server is running on port 8080");
// });

// const express = require("express");
// const mongoose = require("mongoose");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const path = require("path");

// const Listing = require("./models/listing");
// const ExpressError = require("./utils/ExpressError"); // <-- Import custom error

// const app = express();

// // DB connection
// mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((err) => {
//     console.log("DB connection error:", err);
//   });

// // Middleware
// app.engine("ejs", ejsMate);
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname, "/public")));

// // Routes

// // Home
// app.get("/", (req, res) => {
//   res.send("Hi, I am root");
// });

// // Index - Show all listings
// app.get("/listings", async (req, res, next) => {
//   try {
//     const allListings = await Listing.find({});
//     res.render("listings/index", { allListings });
//   } catch (err) {
//     next(err);
//   }
// });

// // New - Show form
// app.get("/listings/new", (req, res) => {
//   res.render("listings/new");
// });

// // Create - Add new listing to DB
// app.post("/listings", async (req, res, next) => {
//   try {
//     const { listing } = req.body;
//     const newListing = new Listing(listing);
//     await newListing.save();
//     res.redirect("/listings");
//   } catch (err) {
//     if (err.name === "ValidationError") {
//       return next(new ExpressError("Something went wrong! Invalid data entered.", 400));
//     }
//     next(err);
//   }
// });

// // Show - Show details of one listing
// app.get("/listings/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const listing = await Listing.findById(id);
//     if (!listing) {
//       throw new ExpressError("Listing not found", 404);
//     }
//     res.render("listings/show", { listing });
//   } catch (err) {
//     next(err);
//   }
// });

// // Edit form
// app.get("/listings/:id/edit", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const listing = await Listing.findById(id);
//     if (!listing) {
//       throw new ExpressError("Listing not found", 404);
//     }
//     res.render("listings/edit", { listing });
//   } catch (err) {
//     next(err);
//   }
// });

// // Update listing
// app.put("/listings/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const { listing } = req.body;
//     const updatedListing = await Listing.findByIdAndUpdate(id, listing, { runValidators: true });
//     if (!updatedListing) {
//       throw new ExpressError("Listing not found for update", 404);
//     }
//     res.redirect(`/listings/${id}`);
//   } catch (err) {
//     if (err.name === "ValidationError") {
//       return next(new ExpressError("Something went wrong! Invalid data while updating.", 400));
//     }
//     next(err);
//   }
// });

// // Delete
// app.delete("/listings/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const deletedListing = await Listing.findByIdAndDelete(id);
//     if (!deletedListing) {
//       throw new ExpressError("Listing not found for deletion", 404);
//     }
//     res.redirect("/listings");
//   } catch (err) {
//     next(err);
//   }
// });

// // Catch all 404 for undefined routes
// app.all("*", (req, res, next) => {
//   next(new ExpressError("Page Not Found", 404));
// });

// // Global Error Handler
// app.use((err, req, res, next) => {
//   const { statusCode = 500, message = "Something went wrong!" } = err;
//   res.status(statusCode).send(message);
// });

// // Server
// app.listen(8080, () => {
//   console.log("Server is running on port 8080");
// });


// const express = require("express");
// const mongoose = require("mongoose");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const path = require("path");

// const Listing = require("./models/listing");
// const ExpressError = require("./utils/ExpressError"); // custom error

// const app = express();

// // DB connection
// mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((err) => {
//     console.log("DB connection error:", err);
//   });

// // Middleware
// app.engine("ejs", ejsMate);
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname, "/public")));

// // Routes

// // Home
// app.get("/", (req, res) => {
//   res.send("Hi, I am root");
// });

// // Index - Show all listings
// app.get("/listings", async (req, res, next) => {
//   try {
//     const allListings = await Listing.find({});
//     res.render("listings/index", { allListings });
//   } catch (err) {
//     next(err);
//   }
// });

// // New - Show form
// app.get("/listings/new", (req, res) => {
//   res.render("listings/new");
// });

// // Create - Add new listing
// app.post("/listings", async (req, res, next) => {
//   try {
//     const { listing } = req.body;
//     const newListing = new Listing(listing);
//     await newListing.save();
//     res.redirect("/listings");
//   } catch (err) {
//     if (err.name === "ValidationError") {
//       return next(new ExpressError("Something went wrong! Invalid data entered.", 400));
//     }
//     next(err);
//   }
// });

// // Show - Show one listing
// app.get("/listings/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const listing = await Listing.findById(id);
//     if (!listing) {
//       throw new ExpressError("Listing not found", 404);
//     }
//     res.render("listings/show", { listing });
//   } catch (err) {
//     next(err);
//   }
// });

// // Edit form
// app.get("/listings/:id/edit", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const listing = await Listing.findById(id);
//     if (!listing) {
//       throw new ExpressError("Listing not found", 404);
//     }
//     res.render("listings/edit", { listing });
//   } catch (err) {
//     next(err);
//   }
// });

// // Update listing
// app.put("/listings/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const { listing } = req.body;
//     const updatedListing = await Listing.findByIdAndUpdate(id, listing, { runValidators: true });
//     if (!updatedListing) {
//       throw new ExpressError("Listing not found for update", 404);
//     }
//     res.redirect(`/listings/${id}`);
//   } catch (err) {
//     if (err.name === "ValidationError") {
//       return next(new ExpressError("Something went wrong! Invalid data while updating.", 400));
//     }
//     next(err);
//   }
// });

// // Delete listing
// app.delete("/listings/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const deletedListing = await Listing.findByIdAndDelete(id);
//     if (!deletedListing) {
//       throw new ExpressError("Listing not found for deletion", 404);
//     }
//     res.redirect("/listings");
//   } catch (err) {
//     next(err);
//   }
// });

// // Catch all 404 routes (FIXED version)
// app.use((req, res, next) => {
//   next(new ExpressError("Page Not Found", 404));
// });

// // Global Error Handler
// app.use((err, req, res, next) => {
//   const { statusCode = 500, message = "Something went wrong!" } = err;
//   res.status(statusCode).send(message);
// });

// // Server
// app.listen(8080, () => {
//   console.log("Server is running on port 8080");
// });

// const express = require("express");
// const mongoose = require("mongoose");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const path = require("path");

// const Listing = require("./models/listing");
// const ExpressError = require("./utils/ExpressError"); // custom error

// const app = express();

// // DB connection
// mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((err) => {
//     console.log("DB connection error:", err);
//   });

// // Middleware
// app.engine("ejs", ejsMate);
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname, "/public")));

// // Routes

// // Home
// app.get("/", (req, res) => {
//   res.send("Hi, I am root");
// });

// // Index - Show all listings
// app.get("/listings", async (req, res, next) => {
//   try {
//     const allListings = await Listing.find({});
//     res.render("listings/index", { allListings });
//   } catch (err) {
//     next(err);
//   }
// });

// // New - Show form
// app.get("/listings/new", (req, res) => {
//   res.render("listings/new");
// });

// // Create - Add new listing
// app.post("/listings", async (req, res, next) => {
//   try {
//     const { listing } = req.body;
//     const newListing = new Listing(listing);
//     await newListing.save();
//     res.redirect("/listings");
//   } catch (err) {
//     if (err.name === "ValidationError") {
//       return next(new ExpressError("Something went wrong! Invalid data entered.", 400));
//     }
//     next(err);
//   }
// });

// // Show - Show one listing
// app.get("/listings/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const listing = await Listing.findById(id);
//     if (!listing) {
//       throw new ExpressError("Listing not found", 404);
//     }
//     res.render("listings/show", { listing });
//   } catch (err) {
//     next(err);
//   }
// });

// // Edit form
// app.get("/listings/:id/edit", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const listing = await Listing.findById(id);
//     if (!listing) {
//       throw new ExpressError("Listing not found", 404);
//     }
//     res.render("listings/edit", { listing });
//   } catch (err) {
//     next(err);
//   }
// });

// // Update listing
// app.put("/listings/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const { listing } = req.body;
//     const updatedListing = await Listing.findByIdAndUpdate(id, listing, { runValidators: true });
//     if (!updatedListing) {
//       throw new ExpressError("Listing not found for update", 404);
//     }
//     res.redirect(`/listings/${id}`);
//   } catch (err) {
//     if (err.name === "ValidationError") {
//       return next(new ExpressError("Something went wrong! Invalid data while updating.", 400));
//     }
//     next(err);
//   }
// });

// // Delete listing
// app.delete("/listings/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const deletedListing = await Listing.findByIdAndDelete(id);
//     if (!deletedListing) {
//       throw new ExpressError("Listing not found for deletion", 404);
//     }
//     res.redirect("/listings");
//   } catch (err) {
//     next(err);
//   }
// });

// // Catch all 404 routes
// app.use((req, res, next) => {
//   next(new ExpressError("Page Not Found", 404));
// });

// // Global Error Handler (renders error.ejs)
// app.use((err, req, res, next) => {
//   const { statusCode = 500 } = err;
//   if (!err.message) err.message = "Something went wrong!";
//   res.status(statusCode).render("error", { err });
// });

// // Server
// app.listen(8080, () => {
//   console.log("Server is running on port 8080");
// });


// const express = require("express");
// const mongoose = require("mongoose");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const path = require("path");

// const Listing = require("./models/listing");
// const ExpressError = require("./utils/ExpressError");

// const app = express();

// // DB connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/wanderlust")
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((err) => {
//     console.log("DB connection error:", err);
//   });

// // Middleware
// app.engine("ejs", ejsMate);
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname, "/public")));

// // Routes

// // Home
// app.get("/", (req, res) => {
//   res.send("Hi, I am root");
// });

// // Index - Show all listings
// app.get("/listings", async (req, res, next) => {
//   try {
//     const allListings = await Listing.find({});
//     res.render("listings/index", { allListings });
//   } catch (err) {
//     next(err);
//   }
// });

// // New - Show form
// app.get("/listings/new", (req, res) => {
//   res.render("listings/new");
// });

// // Create - Add new listing to DB
// app.post("/listings", async (req, res, next) => {
//   try {
//     const { listing } = req.body;
//     const newListing = new Listing(listing);
//     await newListing.save();
//     res.redirect("/listings");
//   } catch (err) {
//     next(err);
//   }
// });

// // Show - Show details of one listing
// app.get("/listings/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const listing = await Listing.findById(id);
//     if (!listing) throw new ExpressError("Listing not found", 404);
//     res.render("listings/show", { listing });
//   } catch (err) {
//     next(err);
//   }
// });

// // Edit form (GET request)
// app.get("/listings/:id/edit", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const listing = await Listing.findById(id);
//     if (!listing) throw new ExpressError("Listing not found", 404);
//     res.render("listings/edit", { listing });
//   } catch (err) {
//     next(err);
//   }
// });

// // Update listing (PUT request)
// app.put("/listings/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const { listing } = req.body;
//     const updatedListing = await Listing.findByIdAndUpdate(id, listing, {
//       new: true,
//       runValidators: true,
//     });
//     if (!updatedListing) throw new ExpressError("Listing not found", 404);
//     res.redirect(`/listings/${id}`);
//   } catch (err) {
//     next(err);
//   }
// });

// // Delete
// app.delete("/listings/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const deletedListing = await Listing.findByIdAndDelete(id);
//     if (!deletedListing) throw new ExpressError("Listing not found", 404);
//     res.redirect("/listings");
//   } catch (err) {
//     next(err);
//   }
// });

// // Catch all unknown routes (404)
// app.all(/.*/, (req, res, next) => {
//   next(new ExpressError(404, "Page Not Found"));
// });

// // Error handler
// app.use((err, req, res, next) => {
//   const { statusCode = 500, message = "Something went wrong" } = err;
//   res.status(statusCode).render("err", { err });
// });

// // Server
// app.listen(8080, () => {
//   console.log("Server is running on port 8080");
// });


// const express = require("express");
// const mongoose = require("mongoose");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const path = require("path");

// const Listing = require("./models/listing");
// const ExpressError = require("./utils/ExpressError");
// const { validateListing } = require("./middleware");

// const app = express();

// // DB connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/wanderlust")
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((err) => {
//     console.log("DB connection error:", err);
//   });

// // Middleware
// app.engine("ejs", ejsMate);
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname, "/public")));

// // -------------------- Routes -------------------- //

// // Home
// app.get("/", (req, res) => {
//   res.send("Hi, I am root");
// });

// // Index - Show all listings
// app.get("/listings", async (req, res, next) => {
//   try {
//     const allListings = await Listing.find({});
//     res.render("listings/index", { allListings });
//   } catch (err) {
//     next(err);
//   }
// });

// // New - Show form
// app.get("/listings/new", (req, res) => {
//   res.render("listings/new");
// });

// // Create - Add new listing to DB
// app.post("/listings", validateListing, async (req, res, next) => {
//   try {
//     const { listing } = req.body;
//     const newListing = new Listing(listing);
//     await newListing.save();
//     res.redirect("/listings");
//   } catch (err) {
//     next(err);
//   }
// });

// // Show - Show details of one listing
// app.get("/listings/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const listing = await Listing.findById(id);
//     if (!listing) throw new ExpressError("Listing not found", 404);
//     res.render("listings/show", { listing });
//   } catch (err) {
//     next(err);
//   }
// });

// // Edit form (GET request)
// app.get("/listings/:id/edit", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const listing = await Listing.findById(id);
//     if (!listing) throw new ExpressError("Listing not found", 404);
//     res.render("listings/edit", { listing });
//   } catch (err) {
//     next(err);
//   }
// });

// // Update listing (PUT request)
// app.put("/listings/:id", validateListing, async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const { listing } = req.body;
//     const updatedListing = await Listing.findByIdAndUpdate(id, listing, {
//       new: true,
//       runValidators: true,
//     });
//     if (!updatedListing) throw new ExpressError("Listing not found", 404);
//     res.redirect(`/listings/${id}`);
//   } catch (err) {
//     next(err);
//   }
// });

// // Delete
// app.delete("/listings/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const deletedListing = await Listing.findByIdAndDelete(id);
//     if (!deletedListing) throw new ExpressError("Listing not found", 404);
//     res.redirect("/listings");
//   } catch (err) {
//     next(err);
//   }
// });

// // -------------------- Error Handling -------------------- //

// // Catch all unknown routes (404)
// app.all(/(.*)/, (req, res, next) => {
//   next(new ExpressError("Page Not Found", 404));
// });


// // Error handler middleware
// app.use((err, req, res, next) => {
//   const { statusCode = 500, message = "Something went wrong" } = err;
//   res.status(statusCode).render("err", { err });
// });

// // -------------------- Server -------------------- //
// app.listen(8080, () => {
//   console.log("Server is running on port 8080");
// });

// const express = require("express");
// const mongoose = require("mongoose");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const path = require("path");
// const session = require("express-session");
// const flash = require("connect-flash");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const User = require("./models/user");

// const ExpressError = require("./utils/ExpressError");


// // app.use((req, res, next) => {
// //   res.locals.success = req.flash("success");
// //   res.locals.error = req.flash("error");
// //   next();
// // });


// // Routes
// const listingRoutes = require("./routes/listing");

// const app = express();

// // DB connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/wanderlust")
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.log("DB connection error:", err));

// // Middleware
// app.engine("ejs", ejsMate);
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname, "/public")));
// const reviewRoutes = require("./routes/reviews");
// app.use("/listings/:id/reviews", reviewRoutes);


// const sessionOptions = {
//   secret: "mysecretkey",
//   resave: false,
//   saveUninitialized: true,
//     cookie: {
//     httpOnly: true,
//     expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 3 days
//     maxAge: 1000 * 60 * 60 * 24 * 7,
//     httpOnly:true,
//   },
//   };

// app.use(session(sessionOptions));
// app.use(flash()); 


// // app.use(passport.initialize());
// // app.use(passport.session());
// // passport.use(new LocalStrategy(User.authenticate()));

// // passport.serializeUser(User.serializeUser());
// // passport.deserializeUser(User.deserializeUser());

// app.use((req, res, next) => {
//   res.locals.success = req.flash("success");
//   res.locals.error = req.flash("error");
//   next();
// });



// // -------------------- Routes -------------------- //
// app.get("/", (req, res) => {
//   res.send("Hi, I am root");
// });
// app.use("/listings", listingRoutes);

// -------------------- Error Handling -------------------- //
// app.all("/*", (req, res, next) => {
//   next(new ExpressError("Page Not Found", 404));
// });



// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
// // Yeh hamesha last middleware hoga
// app.use((req, res) => {
//   res.status(404).send("Page Not Found");
// })
// app.use((err, req, res, next) => {
//   const { statusCode = 500 } = err;
//   if (!err.message) err.message = "Something went wrong!";
//   res.status(statusCode).render("err", { err });
// });

// // -------------------- Server -------------------- //
// app.listen(8080, () => {
//   console.log("Server is running on port 8080");
// });
// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }


// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }


// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const path = require("path");
// const ejsMate = require("ejs-mate");
// const methodOverride = require("method-override");
// const session = require("express-session");
// const flash = require("connect-flash");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");

// const User = require("./models/user");
// const Listing = require("./models/listing");

// // ✅ Routes
// const listingRoutes = require("./routes/listing");
// const userRoutes = require("./routes/user");
// const reviewRoutes = require("./routes/review");

// // ✅ MongoDB Connection
// mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.log("❌ MongoDB Connection Error:", err));


// // ✅ View Engine Setup
// app.engine("ejs", ejsMate);
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));


// // ✅ Middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname, "public")));


// // ✅ Session Configuration
// const sessionConfig = {
//   secret: "bettersecret",
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     httpOnly: true,
//     expires: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days
//     maxAge: 1000 * 60 * 60 * 24 * 3
//   }
// };
// app.use(session(sessionConfig));
// app.use(flash());


// // ✅ Passport Configuration
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());


// // ✅ Flash + Current User Middleware (VERY IMPORTANT)
// app.use((req, res, next) => {
//   res.locals.currentUser = req.user;      // 👈 makes currentUser available in all EJS
//   res.locals.success = req.flash("success");
//   res.locals.error = req.flash("error");
//   next();
// });


// // ✅ Routes
// app.use("/listings", listingRoutes);
// app.use("/", userRoutes);
// app.use("/listings/:id/reviews", reviewRoutes);


// // ✅ Root Route
// app.get("/", (req, res) => {
//   res.render("home");
// });


// // ✅ Error Handling (404)
// app.all("*", (req, res, next) => {
//   res.status(404).render("error", { err: "Page Not Found" });
// });


// // ✅ Global Error Handler
// app.use((err, req, res, next) => {
//   console.error("❌ Error:", err);
//   res.status(err.status || 500).render("error", { err });
// });


// // ✅ Start Server
// app.listen(8080, () => {
//   console.log("🚀 Server running on http://localhost:8080");
// });


// ==========================
// 📦 REQUIREMENTS
// ==========================
// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

// const express = require("express");
// const app = express();
// const path = require("path");
// const ejsMate = require("ejs-mate");
// const mongoose = require("mongoose");
// const methodOverride = require("method-override");
// const session = require("express-session");
// const flash = require("connect-flash");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");

// // ✅ MODELS
// const User = require("./models/user");
// const Listing = require("./models/listing");
// const Review = require("./models/review");

// // ✅ ROUTES
// const listingsRouter = require("./routes/listings");
// const reviewsRouter = require("./routes/reviews");
// const authRoutes = require("./routes/auth");

// // ✅ UTILITIES
// const ExpressError = require("./utils/ExpressError");

// // ==========================
// // 🌐 MONGOOSE CONNECTION
// // ==========================
// mongoose
//   .connect("mongodb://127.0.0.1:27017/wanderlust")
//   .then(() => {
//     console.log("✅ MongoDB Connected Successfully!");
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB Connection Error:", err);
//   });

// // ==========================
// // ⚙️ APP CONFIGURATION
// // ==========================
// app.engine("ejs", ejsMate);
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname, "public")));

// // ==========================
// // 💾 SESSION CONFIG
// // ==========================
// const sessionConfig = {
//   secret: "supersecretcode",
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     httpOnly: true,
//     expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 1 week
//     maxAge: 1000 * 60 * 60 * 24 * 7,
//   },
// };
// app.use(session(sessionConfig));
// app.use(flash());

// // ==========================
// // 🔐 PASSPORT CONFIG
// // ==========================
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// // ==========================
// // 🌟 GLOBAL VARIABLES
// // ==========================
// app.use((req, res, next) => {
//   res.locals.currentUser = req.user;
//   res.locals.success = req.flash("success");
//   res.locals.error = req.flash("error");
//   next();
// });

// // ==========================
// // 🧭 ROUTES
// // ==========================
// app.get("/", (req, res) => {
//   res.render("home");
// });

// app.use("/", authRoutes);
// app.use("/listings", listingsRouter);
// app.use("/listings/:id/reviews", reviewsRouter);

// // ==========================
// // 🚫 404 ERROR HANDLER
// // ==========================

// app.all(/.*/, (req, res) => {
//   res.status(404).send("404 Page Not Found");
// });

// // app.all("*", (req, res, next) => {
// //   next(new ExpressError(404, "Page Not Found"));
// // });

// // ==========================
// // ⚠️ GENERIC ERROR HANDLER
// // ==========================
// app.use((err, req, res, next) => {
//   const { statusCode = 500, message = "Something went wrong!" } = err;
//   res.status(statusCode).render("error", { err });
// });

// // ==========================
// // 🚀 SERVER START
// // ==========================
// app.listen(8080, () => {
//   console.log("🌍 Server running on port 8080");
// });


// ==========================
// 🌍 ENVIRONMENT SETUP
// ==========================
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// ==========================
// 📦 IMPORTS
// ==========================
const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const MongoStore = require("connect-mongo");

// ✅ MODELS
const User = require("./models/user");

// ✅ ROUTES
const listingsRouter = require("./routes/listings");
const reviewsRouter = require("./routes/reviews");
const authRoutes = require("./routes/auth");

// ✅ UTILITIES
const ExpressError = require("./utils/ExpressError");

// ==========================
// 🌐 DATABASE CONNECTION (MongoDB Atlas)
// ==========================
const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/wanderlust";

mongoose
  .connect(dbUrl)
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ==========================
// ⚙️ APP CONFIGURATION
// ==========================
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// ==========================
// 💾 SESSION STORE (Mongo Atlas)
// ==========================
const secret = process.env.SESSION_SECRET || "supersecretcode";

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: { secret },
  touchAfter: 24 * 3600, // update session only once per day
});

store.on("error", function (e) {
  console.log("SESSION STORE ERROR", e);
});

const sessionConfig = {
  store,
  secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 1 week
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

app.use(session(sessionConfig));
app.use(flash());

// ==========================
// 🔐 PASSPORT CONFIG
// ==========================
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ==========================
// 🌟 GLOBAL VARIABLES (for flash + user)
// ==========================
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// ==========================
// 🧭 ROUTES
// ==========================
app.get("/", (req, res) => {
  res.render("home");
});

app.use("/", authRoutes);
app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);

// ==========================
// 🚫 404 ERROR HANDLER
// ==========================
app.use((req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

// ⚠️ GENERIC ERROR HANDLER
// ==========================
app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Something went wrong!";
  console.error("❌ Error:", err);
  res.status(statusCode).render("error", { err });
});

// ==========================
// 🚀 SERVER START
// ==========================
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`🌍 Server running on http://localhost:${port}`);
});


// ✅ Basic Imports

// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const path = require("path");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const session = require("express-session");
// const flash = require("connect-flash");

// // ✅ Models
// const Listing = require("./models/listing");
// const Review = require("./models/review");

// // ✅ Routes
// const listingsRoutes = require("./routes/listings");
// const reviewsRoutes = require("./routes/reviews");

// // ✅ MongoDB
// mongoose
//   .connect("mongodb://127.0.0.1:27017/wanderlust")
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// // ✅ App Config
// app.engine("ejs", ejsMate);
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname, "public")));

// // ✅ Session & Flash
// const sessionConfig = {
//   secret: "bettersecret",
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     httpOnly: true,
//     expires: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days
//     maxAge: 1000 * 60 * 60 * 24 * 3,
//   },
// };
// app.use(session(sessionConfig));
// app.use(flash());

// // ✅ Global Middleware (for all templates)
// app.use((req, res, next) => {
//   res.locals.currentUser = req.user || null;
//   res.locals.success = req.flash("success");
//   res.locals.error = req.flash("error");
//   next();
// });

// // ✅ Routes
// app.use("/listings", listingsRoutes);
// app.use("/listings/:id/reviews", reviewsRoutes);

// // ✅ Root
// app.get("/", (req, res) => res.redirect("/listings"));

// app.use((req, res) => {
//   res.status(404).send("404 Page Not Found");
// });



// // ✅ Server
// app.listen(8080, () => {
//   console.log("🚀 Server running on http://localhost:8080");
// });



// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const path = require("path");
// const ejsMate = require("ejs-mate");
// const methodOverride = require("method-override");
// const session = require("express-session");
// const flash = require("connect-flash");

// // Routes
// const listingsRoutes = require("./routes/listings");
// const reviewsRoutes = require("./routes/reviews");

// // MongoDB connection
// mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

// app.engine("ejs", ejsMate);
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname, "public")));

// const sessionConfig = {
//   secret: "supersecretcode",
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     httpOnly: true,
//     expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
//     maxAge: 1000 * 60 * 60 * 24 * 7,
//   },
// };
// app.use(session(sessionConfig));
// app.use(flash());

// app.use((req, res, next) => {
//   res.locals.success = req.flash("success");
//   res.locals.error = req.flash("error");
//   next();
// });

// app.use("/listings", listingsRoutes);
// app.use("/listings/:id/reviews", reviewsRoutes);

// app.get("/", (req, res) => {
//   res.redirect("/listings");
// });

// app.listen(8080, () => {
//   console.log("Serving on port 8080");
// });

// const express = require("express");
// const mongoose = require("mongoose");
// const path = require("path");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const session = require("express-session");
// const flash = require("connect-flash");
// // const multer = require("multer");

// // // Cloudinary setup
// // const { storage } = require("./cloudConfig");
// // const upload = multer({ storage });

// // Models
// const Listing = require("./models/listing");

// // Express app setup
// const app = express();

// // Connect MongoDB
// mongoose
//   .connect("mongodb://127.0.0.1:27017/wanderlust")
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.log("❌ Mongo Error:", err));

// // View Engine setup
// app.engine("ejs", ejsMate);
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// // Middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname, "public")));

// const sessionConfig = {
//   secret: "supersecret",
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     httpOnly: true,
//     expires: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days
//   },
// };
// app.use(session(sessionConfig));
// app.use(flash());

// // Flash middleware
// app.use((req, res, next) => {
//   res.locals.success = req.flash("success");
//   res.locals.error = req.flash("error");
//   res.locals.currentUser = req.user;
//   next();
// });

// // Home route
// app.get("/", (req, res) => {
//   res.redirect("/listings");
// });

// // Import listings routes
// const listingsRoutes = require("./routes/listings");
// app.use("/listings", listingsRoutes);

// // Start server
// app.listen(8080, () => {
//   console.log("🚀 Server running on port 8080");
// });


// const express = require("express");
// const mongoose = require("mongoose");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const path = require("path");
// const session = require("express-session");
// const flash = require("connect-flash");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const ExpressError = require("./utils/ExpressError");
// const User = require("./models/user");

// // -------------------- ROUTES -------------------- //
// const listingRoutes = require("./routes/listing");
// const reviewRoutes = require("./routes/reviews");
// const userRoutes = require("./routes/user");

// const app = express();

// // -------------------- DATABASE CONNECTION -------------------- //
// mongoose
//   .connect("mongodb://127.0.0.1:27017/wanderlust")
//   .then(() => console.log("✅ MongoDB Connected Successfully"))
//   .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// // -------------------- EJS & PUBLIC SETUP -------------------- //
// app.engine("ejs", ejsMate);
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.static(path.join(__dirname, "public")));

// // -------------------- MIDDLEWARE -------------------- //
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));

// // -------------------- SESSION CONFIG -------------------- //
// const sessionConfig = {
//   secret: "supersecretkey",
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     httpOnly: true,
//     expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 7 days
//     maxAge: 1000 * 60 * 60 * 24 * 7,
//   },
// };
// app.use(session(sessionConfig));
// app.use(flash());

// // -------------------- PASSPORT CONFIG -------------------- //
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// // -------------------- GLOBAL VARIABLES -------------------- //
// app.use((req, res, next) => {
//   res.locals.currentUser = req.user; // logged-in user available in all views
//   res.locals.success = req.flash("success");
//   res.locals.error = req.flash("error");
//   next();
// });

// // -------------------- ROUTES -------------------- //
// app.get("/", (req, res) => {
//   res.render("home"); // Make sure views/home.ejs exists
// });

// app.use("/", userRoutes);
// app.use("/listings", listingRoutes);
// app.use("/listings/:id/reviews", reviewRoutes);

// // -------------------- ERROR HANDLERS -------------------- //
// // Handle invalid routes
// // app.all("/*", (req, res, next) => {
// //   next(new ExpressError("Page Not Found", 404));
// // });


// // Handle all errors
// // Handle invalid routes
// app.use((req, res, next) => {
//   next(new ExpressError("Page Not Found", 404));
// });

// // -------------------- START SERVER -------------------- //
// app.listen(8080, () => {
//   console.log("🚀 Server is running at http://localhost:8080");
// });



// const express = require("express");
// const mongoose = require("mongoose");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const path = require("path");
// const session = require("express-session");
// const flash = require("connect-flash");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const User = require("./models/user");
// const ExpressError = require("./utils/ExpressError");

// const listingRoutes = require("./routes/listing");
// const reviewRoutes = require("./routes/reviews");
// const userRoutes = require("./routes/user");

// const app = express();

// // -------------------- DB CONNECTION -------------------- //
// mongoose
//   .connect("mongodb://127.0.0.1:27017/wanderlust")
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch(err => console.log("❌ DB connection error:", err));

// // -------------------- MIDDLEWARE SETUP -------------------- //
// app.engine("ejs", ejsMate);
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname, "/public")));

// // -------------------- SESSION & FLASH -------------------- //
// const sessionOptions = {
//   secret: "mysecretkey",
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     httpOnly: true,
//     expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 7 days
//     maxAge: 1000 * 60 * 60 * 24 * 7,
//   },
// };
// app.use(session(sessionOptions));
// app.use(flash());

// // -------------------- PASSPORT CONFIG -------------------- //
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// // -------------------- FLASH MESSAGES -------------------- //
// app.use((req, res, next) => {
//   res.locals.currentUser = req.user; // logged-in user accessible in all EJS files
//   res.locals.success = req.flash("success");
//   res.locals.error = req.flash("error");
//   next();
// });

// // -------------------- ROUTES -------------------- //
// app.get("/", (req, res) => {
//   res.render("home"); // optional: create views/home.ejs
// });

// app.use("/listings", listingRoutes);
// app.use("/listings/:id/reviews", reviewRoutes);
// app.use("/", userRoutes);

// // -------------------- ERROR HANDLING -------------------- //
// app.all(/.*/, (req, res, next) => {
//   next(new ExpressError("Page Not Found", 404));
// });


// app.use((err, req, res, next) => {
//   const { statusCode = 500 } = err;
//   if (!err.message) err.message = "Something went wrong!";
//   res.status(statusCode).render("err", { err });
// });

// // -------------------- SERVER -------------------- //
// app.listen(8080, () => {
//   console.log("🚀 Server is running on port 8080");
// });



// const express = require("express");
// const mongoose = require("mongoose");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const path = require("path");

// const Listing = require("./models/listing");
// const Review = require("./models/review");   // ✅ review model import
// const ExpressError = require("./utils/ExpressError");
// const { validateListing, validateReview } = require("./middleware"); // ✅ import validation

// const app = express();

// // DB connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/wanderlust")
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((err) => {
//     console.log("DB connection error:", err);
//   });

// // Middleware
// app.engine("ejs", ejsMate);
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname, "/public")));

// // -------------------- Routes -------------------- //

// // Home
// app.get("/", (req, res) => {
//   res.send("Hi, I am root");
// });

// // Index - Show all listings
// app.get("/listings", async (req, res, next) => {
//   try {
//     const allListings = await Listing.find({});
//     res.render("listings/index", { allListings });
//   } catch (err) {
//     next(err);
//   }
// });

// // New - Show form
// app.get("/listings/new", (req, res) => {
//   res.render("listings/new");
// });

// // Create - Add new listing to DB
// app.post("/listings", validateListing, async (req, res, next) => {
//   try {
//     const { listing } = req.body;
//     const newListing = new Listing(listing);
//     await newListing.save();
//     res.redirect("/listings");
//   } catch (err) {
//     next(err);
//   }
// });

// // Show - Show details of one listing (with reviews)
// app.get("/listings/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const listing = await Listing.findById(id).populate("reviews"); // ✅ populate reviews
//     if (!listing) throw new ExpressError("Listing not found", 404);
//     res.render("listings/show", { listing });
//   } catch (err) {
//     next(err);
//   }
// });

// // Edit form (GET request)
// app.get("/listings/:id/edit", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const listing = await Listing.findById(id);
//     if (!listing) throw new ExpressError("Listing not found", 404);
//     res.render("listings/edit", { listing });
//   } catch (err) {
//     next(err);
//   }
// });

// // Update listing (PUT request)
// app.put("/listings/:id", validateListing, async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const { listing } = req.body;
//     const updatedListing = await Listing.findByIdAndUpdate(id, listing, {
//       new: true,
//       runValidators: true,
//     });
//     if (!updatedListing) throw new ExpressError("Listing not found", 404);
//     res.redirect(`/listings/${id}`);
//   } catch (err) {
//     next(err);
//   }
// });

// // Delete
// app.delete("/listings/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const deletedListing = await Listing.findByIdAndDelete(id);
//     if (!deletedListing) throw new ExpressError("Listing not found", 404);
//     res.redirect("/listings");
//   } catch (err) {
//     next(err);
//   }
// });

// // -------------------- Reviews -------------------- //

// // Add Review
// app.post("/listings/:id/reviews", validateReview, async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const listing = await Listing.findById(id);
//     if (!listing) throw new ExpressError("Listing not found", 404);

//     const review = new Review(req.body.review);
//     await review.save();

//     listing.reviews.push(review);
//     await listing.save();

//     res.redirect(`/listings/${id}`);
//   } catch (err) {
//     next(err);
//   }
// });

// // -------------------- Error Handling -------------------- //

// // Catch all unknown routes (404)
// app.all(/(.*)/, (req, res, next) => {
//   next(new ExpressError("Page Not Found", 404));
// });

// // Error handler middleware
// app.use((err, req, res, next) => {
//   const { statusCode = 500, message = "Something went wrong" } = err;
//   res.status(statusCode).render("err", { err });
// });


// app.delete("/listings/:id/reviews/:reviewId", async (req, res, next) => {
//   try {
//     const { id, reviewId } = req.params;
//     // Review ko delete karo aur listing ke reviews array se pull karo
//     await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
//     await Review.findByIdAndDelete(reviewId);
//     res.redirect(`/listings/${id}`);
//   } catch (err) {
//     next(err);
//   }
// });

// // -------------------- Server -------------------- //
// app.listen(8080, () => {
//   console.log("Server is running on port 8080");
// });

// const express = require("express");
// const mongoose = require("mongoose");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const path = require("path");

// const Listing = require("./models/listing");
// const Review = require("./models/review"); // ✅ import
// const ExpressError = require("./utils/ExpressError");
// const { validateListing } = require("./middleware");

// const app = express();

// // DB connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/wanderlust")
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.log("DB connection error:", err));

// // Middleware
// app.engine("ejs", ejsMate);
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname, "/public")));

// // -------------------- Routes -------------------- //

// // Show all listings
// app.get("/listings", async (req, res, next) => {
//   try {
//     const allListings = await Listing.find({});
//     res.render("listings/index", { allListings });
//   } catch (err) {
//     next(err);
//   }
// });

// // New
// app.get("/listings/new", (req, res) => {
//   res.render("listings/new");
// });

// // Create
// app.post("/listings", validateListing, async (req, res, next) => {
//   try {
//     const { listing } = req.body;
//     const newListing = new Listing(listing);
//     await newListing.save();
//     res.redirect("/listings");
//   } catch (err) {
//     next(err);
//   }
// });

// // ✅ Show with reviews populated
// app.get("/listings/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const listing = await Listing.findById(id).populate("reviews"); // ✅ populate reviews
//     if (!listing) throw new ExpressError("Listing not found", 404);
//     res.render("listings/show", { listing });
//   } catch (err) {
//     next(err);
//   }
// });

// // ✅ Add Review
// app.post("/listings/:id/reviews", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const listing = await Listing.findById(id);
//     if (!listing) throw new ExpressError("Listing not found", 404);

//     const review = new Review(req.body.review);
//     await review.save();

//     listing.reviews.push(review);
//     await listing.save();

//     res.redirect(`/listings/${id}`);
//   } catch (err) {
//     next(err);
//   }
// });

// // -------------------- Error Handling -------------------- //
// app.all(/(.*)/, (req, res, next) => {
//   next(new ExpressError("Page Not Found", 404));
// });

// app.use((err, req, res, next) => {
//   const { statusCode = 500, message = "Something went wrong" } = err;
//   res.status(statusCode).render("err", { err });
// });

// // Server
// app.listen(8080, () => console.log("Server is running on port 8080"));


// app.js
// const express = require("express");
// const mongoose = require("mongoose");
// const path = require("path");
// const ejsMate = require("ejs-mate");
// const ExpressError = require("./utils/ExpressError");

// const app = express();

// // ----------------------------
// // MongoDB Connection
// // ----------------------------
// mongoose
//   .connect("mongodb://127.0.0.1:27017/majorproject")
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((err) => {
//     console.error("MongoDB connection error:", err);
//   });

// // ----------------------------
// // Middleware & Config
// // ----------------------------
// app.engine("ejs", ejsMate);
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// app.use(express.urlencoded({ extended: true }));

// // ----------------------------
// // Example Routes
// // ----------------------------
// app.get("/", (req, res) => {
//   res.send("Home Page Working 🚀");
// });

// // Add your other routes here
// // e.g. app.use("/users", userRoutes);

// // ----------------------------
// // Catch-All for 404 Errors
// // ----------------------------
// app.use((req, res, next) => {
//   next(new ExpressError(404, "Page Not Found"));
// });

// // ----------------------------
// // Global Error Handler
// // ----------------------------
// app.use((err, req, res, next) => {
//   const { statusCode = 500, message = "Something went wrong!" } = err;
//   res.status(statusCode).render("err", { err });
// });

// // ----------------------------
// // Start Server
// // ----------------------------
// const PORT = 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// app.js
// const express = require("express");
// const mongoose = require("mongoose");
// const path = require("path");
// const ejsMate = require("ejs-mate");
// const methodOverride = require("method-override");
// const ExpressError = require("./utils/ExpressError");

// const app = express();

// // =======================
// // MongoDB Connection
// // =======================
// mongoose
//   .connect("mongodb://127.0.0.1:27017/majorProject")
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((err) => {
//     console.log("MongoDB connection error:", err);
//   });

// // =======================
// // Middleware
// // =======================
// app.engine("ejs", ejsMate);
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname, "public")));

// // =======================
// // Routes
// // =======================

// // Home route
// app.get("/", (req, res) => {
//   res.render("home");
// });

// // Example route (you can add your own routes here)
// app.get("/test", (req, res) => {
//   res.send("Test route is working!");
// });

// // =======================
// // 404 Handler
// // =======================
// app.all(/.*/, (req, res, next) => {
//   next(new ExpressError(404, "Page Not Found"));
// });

// // =======================
// // Global Error Handler
// // =======================
// app.use((err, req, res, next) => {
//   const { statusCode = 500, message = "Something went wrong!" } = err;
//   res.status(statusCode).render("err", { err });
// });

// const PORT = 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
