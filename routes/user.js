
const express = require("express");
const passport = require("passport");
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");

const router = express.Router();

// ✅ Render Signup Form
router.get("/signup", (req, res) => {
  res.render("users/signup");
});

// ✅ Handle Signup Logic
router.post(
  "/signup",
  wrapAsync(async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      const newUser = new User({ email, username });
      const registeredUser = await User.register(newUser, password);
      req.login(registeredUser, (err) => {
        if (err) return next(err);
        req.flash("success", "Welcome to Wanderlust!");
        res.redirect("/listings");
      });
    } catch (e) {
      req.flash("error", e.message);
      res.redirect("/signup");
    }
  })
);

// ✅ Render Login Form
router.get("/login", (req, res) => {
  res.render("users/login");
});

// ✅ Handle Login Logic
router.post(
  "/login",
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login",
  }),
  (req, res) => {
    req.flash("success", "Welcome back!");
    res.redirect("/listings");
  }
);

// ✅ Logout Route
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.flash("success", "You have logged out!");
    res.redirect("/listings");
  });
});

module.exports = router;

// ✅ LOGOUT ROUTE
router.get("/logout", (req, res, next) => {
  req.logout(err => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You have successfully logged out!");
    res.redirect("/listings");
  });
});

