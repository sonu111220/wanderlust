
// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

// // ==========================
// // 📦 IMPORTS
// // ==========================
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
// const MongoStore = require("connect-mongo");

// // ✅ MODELS
// const User = require("./models/user");

// // ✅ ROUTES
// const listingsRouter = require("./routes/listings");
// const reviewsRouter = require("./routes/reviews");
// const authRoutes = require("./routes/auth");

// // ✅ UTILITIES
// const ExpressError = require("./utils/ExpressError");

// // ==========================
// // 🌐 DATABASE CONNECTION (MongoDB Atlas)
// // ==========================
// const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/wanderlust";

// mongoose
//   .connect(dbUrl)
//   .then(() => console.log("✅ MongoDB Connected Successfully!"))
//   .catch((err) => console.error("❌ MongoDB Connection Error:", err));

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
// // 💾 SESSION STORE (Mongo Atlas)
// // ==========================
// const secret = process.env.SESSION_SECRET || "supersecretcode";

// const store = MongoStore.create({
//   mongoUrl: dbUrl,
//   crypto: { secret },
//   touchAfter: 24 * 3600, // update session only once per day
// });

// store.on("error", function (e) {
//   console.log("SESSION STORE ERROR", e);
// });

// const sessionConfig = {
//   store,
//   secret,
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
// // 🌟 GLOBAL VARIABLES (for flash + user)
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
// app.use((req, res, next) => {
//   next(new ExpressError("Page Not Found", 404));
// });

// // ⚠️ GENERIC ERROR HANDLER
// // ==========================
// app.use((err, req, res, next) => {
//   const { statusCode = 500 } = err;
//   if (!err.message) err.message = "Something went wrong!";
//   console.error("❌ Error:", err);
//   res.status(statusCode).render("error", { err });
// });

// // ==========================
// // 🚀 SERVER START
// // ==========================
// const port = process.env.PORT || 8080;
// app.listen(port, () => {
//   console.log(`🌍 Server running on http://localhost:${port}`);
// });


// ==========================
// 🌍 ENVIRONMENT SETUP
// ==========================
// const ejsMate = require("ejs-mate");
// const mongoose = require("mongoose");
// const methodOverride = require("method-override");
// const session = require("express-session");
// const flash = require("connect-flash");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const MongoStore = require("connect-mongo");

// // ✅ MODELS
// const User = require("./models/user");

// // ✅ ROUTES
// const listingsRouter = require("./routes/listings");
// const reviewsRouter = require("./routes/reviews");
// const authRoutes = require("./routes/auth");

// // ✅ UTILITIES
// const ExpressError = require("./utils/ExpressError");

// // ==========================
// // 🌐 DATABASE CONNECTION (MongoDB Atlas)
// // ==========================
// const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/wanderlust";

// mongoose
//   .connect(dbUrl)
//   .then(() => console.log("✅ MongoDB Connected Successfully!"))
//   .catch((err) => console.error("❌ MongoDB Connection Error:", err));

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
// // 💾 SESSION STORE (Mongo Atlas)
// // ==========================
// const secret = process.env.SESSION_SECRET || "supersecretcode";

// const store = MongoStore.create({
//   mongoUrl: dbUrl,
//   crypto: { secret },
//   touchAfter: 24 * 3600, // Update session only once per day
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


// store.on("error", (e) => {
//   console.log("❌ SESSION STORE ERROR", e);
// });

// const sessionConfig = {
//   store,
//   name: "wanderSession", // custom cookie name (more secure)
//   secret,
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production", // only https in production
//     expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
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


// // routes
// app.use("/listings", listingsRouter);
// app.use("/listings/:id/reviews", reviewRouter);
// app.use("/", userRouter);

// // 404 handler (must be last)
// app.all("*", (req, res, next) => {
//   next(new ExpressError("Page Not Found", 404));
// });

// // error handler
// app.use((err, req, res, next) => {
//   const { statusCode = 500 } = err;
//   if (!err.message) err.message = "Oh No, Something Went Wrong!";
//   res.status(statusCode).render("error.ejs", { err });
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
// // ==========================
// // 🚫 404 ERROR HANDLER
// // ==========================
// app.use((req, res, next) => {
//   next(new ExpressError("Page Not Found", 404));
// });

// // ⚠️ GENERIC ERROR HANDLER
// app.use((err, req, res, next) => {
//   const { statusCode = 500 } = err;
//   if (!err.message) err.message = "Something went wrong!";
//   console.error("❌ Error:", err);
//   res.status(statusCode).render("error", { err });
// });if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

// // ==========================
// // 📦 IMPORTS
// // ==========================
// const express = require("express");
// const app = express();
// const path = require("path");


// // 🚫 404 ERROR HANDLER
// // ==========================
// app.use((req, res, next) => {
//   next(new ExpressError("Page Not Found", 404));
// });

// // ⚠️ GENERIC ERROR HANDLER
// // ==========================
// app.use((err, req, res, next) => {
//   const { statusCode = 500 } = err;
//   if (!err.message) err.message = "Something went wrong!";
//   console.error("❌ Error:", err);
//   res.status(statusCode).render("error", { err });
// });

// ==========================
// 🚀 SERVER START
// ==========================
// const port = process.env.PORT || 8080;
// app.listen(port, () => {
//   console.log(`🚀 Server running on port ${port}`);
// });


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
const userRouter = require("./routes/user");

// ✅ UTILITIES
const ExpressError = require("./utils/ExpressError");

// ==========================
// 🌐 DATABASE CONNECTION (MongoDB Atlas)
// ==========================
const dbUrl = process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/wanderlust";

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
  touchAfter: 24 * 3600, // Update session only once per day
});

store.on("error", (e) => {
  console.log("❌ SESSION STORE ERROR", e);
});

const sessionConfig = {
  store,
  name: "wanderSession",
  secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
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
// 🌟 GLOBAL VARIABLES
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
// 🏠 Redirect root route to all listings
app.get("/", (req, res) => {
  res.redirect("/listings");
});


app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);
// 🌱 TEMPORARY TEST ROUTE
app.get("/seed", async (req, res) => {
  const Listing = require("./models/listing");
  const sample = new Listing({
    title: "Sample Apartment",
    description: "Cozy place in Karachi",
    price: 1500,
    location: "Karachi",
    country: "Pakistan",
    image: {
      url: "https://placekitten.com/600/300",
      filename: "kitten.jpg",
    },
  });
  await sample.save();
  res.send("✅ Seed listing added!");
});


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
  res.status(statusCode).render("error", { err });
});

// ==========================
// 🚀 SERVER START
// ==========================
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`🌍 Server running on http://localhost:${port}`);
});


// ==========================
// 🌍 ENVIRONMENT SETUP
// // ==========================
// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

// // ==========================
// // 📦 IMPORTS
// // ==========================
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
// const MongoStore = require("connect-mongo");

// // ✅ MODELS
// const User = require("./models/user");

// // ✅ ROUTES
// const listingsRouter = require("./routes/listings");
// const reviewsRouter = require("./routes/reviews");
// const authRoutes = require("./routes/auth");

// // ✅ UTILITIES
// const ExpressError = require("./utils/ExpressError");

// // ==========================
// // 🌐 DATABASE CONNECTION (MongoDB Atlas)
// // ==========================
// const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/wanderlust";

// mongoose
//   .connect(dbUrl)
//   .then(() => console.log("✅ MongoDB Connected Successfully!"))
//   .catch((err) => console.error("❌ MongoDB Connection Error:", err));

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
// // 💾 SESSION STORE (Mongo Atlas)
// // ==========================
// const secret = process.env.SESSION_SECRET || "supersecretcode";

// const store = MongoStore.create({
//   mongoUrl: dbUrl,
//   crypto: { secret },
//   touchAfter: 24 * 3600, // update session only once per day
// });

// store.on("error", function (e) {
//   console.log("SESSION STORE ERROR", e);
// });

// const sessionConfig = {
//   store,
//   secret,
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
// // 🌟 GLOBAL VARIABLES (for flash + user)
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
// app.use((req, res, next) => {
//   next(new ExpressError("Page Not Found", 404));
// });

// // ⚠️ GENERIC ERROR HANDLER
// // ==========================
// app.use((err, req, res, next) => {
//   const { statusCode = 500 } = err;
//   if (!err.message) err.message = "Something went wrong!";
//   console.error("❌ Error:", err);
//   res.status(statusCode).render("error", { err });
// });

// // ==========================
// // 🚀 SERVER START
// // ==========================
// const port = process.env.PORT || 8080;
// app.listen(port, () => {
//   console.log(`🌍 Server running on http://localhost:${port}`);
// });


// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

// // ==========================
// // 📦 IMPORTS
// // ==========================
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
// const MongoStore = require("connect-mongo");

// // ✅ MODELS
// const User = require("./models/user");

// // ✅ ROUTES
// const listingsRouter = require("./routes/listings");
// const reviewsRouter = require("./routes/reviews");
// const authRoutes = require("./routes/auth");

// // ✅ UTILITIES
// const ExpressError = require("./utils/ExpressError");

// // ==========================
// // 🌐 DATABASE CONNECTION (MongoDB Atlas)
// // ==========================
// const dbUrl = process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/wanderlust";

// mongoose
//   .connect(dbUrl)
//   .then(() => console.log("✅ MongoDB Connected Successfully!"))
//   .catch((err) => console.error("❌ MongoDB Connection Error:", err));

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
// // 💾 SESSION STORE (Mongo Atlas)
// // ==========================
// const secret = process.env.SESSION_SECRET || "supersecretcode";

// const store = MongoStore.create({
//   mongoUrl: dbUrl,
//   crypto: { secret },
//   touchAfter: 24 * 3600, // update session once per day
// });

// store.on("error", (e) => {
//   console.log("❌ SESSION STORE ERROR", e);
// });

// const sessionConfig = {
//   store,
//   name: "wanderSession", // custom cookie name (for security)
//   secret,
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production", // only HTTPS in production
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
// // 🌟 GLOBAL VARIABLES (for flash + user)
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

// // ==========================
// // 🚫 404 ERROR HANDLER
// // ==========================
// app.use((req, res, next) => {
//   next(new ExpressError("Page Not Found", 404));
// });

// // ⚠️ GENERIC ERROR HANDLER
// app.use((err, req, res, next) => {
//   const { statusCode = 500 } = err;
//   if (!err.message) err.message = "Something went wrong!";
//   console.error("❌ Error:", err);
//   res.status(statusCode).render("error", { err });
// });

// // // 🚫 404 ERROR HANDLER
// // // ==========================
// // app.all("*", (req, res, next) => {
// //   next(new ExpressError("Page Not Found", 404));
// // });

// // // ⚠️ GENERIC ERROR HANDLER
// // // ==========================
// // app.use((err, req, res, next) => {
// //   const { statusCode = 500 } = err;
// //   if (!err.message) err.message = "Something went wrong!";
// //   console.error("❌ Error:", err);
// //   res.status(statusCode).render("error", { err });
// // });

// // ==========================
// // 🚀 SERVER START
// // ==========================
// const port = process.env.PORT || 8080;
// app.listen(port, () => {
//   console.log(`🚀 Server running on http://localhost:${port}`);
// });
