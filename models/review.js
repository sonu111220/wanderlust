// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const reviewSchema = new Schema({
//   body: {
//     type: String,
//     required: true,
//   },
//   rating: {
//     type: Number,
//     required: true,
//     min: 1,
//     max: 5,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   }
// });

// const Review = mongoose.model("Review", reviewSchema);
// module.exports = Review;


// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const reviewSchema = new Schema({
//   rating: {
//     type: Number,
//     min: 1,
//     max: 5,
//     required: true
//    author: {
//     type: Schema.Types.ObjectId,
//     ref: "User", // 👈 ye important hai
//   },
// });
// //   },
// //   body: {
// //     type: String,
// //     required: true
// //   }
// // });

// const Review = mongoose.model("Review", reviewSchema);
// module.exports = Review;


// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const reviewSchema = new Schema({
//   body: String,
//   rating: Number,
//   author: {
//     type: Schema.Types.ObjectId,
//     ref: "User", // 👈 ye important hai
//   },
// });

// module.exports = mongoose.model("Review", reviewSchema);

// const mongoose = require("mongoose");

// const reviewSchema = new mongoose.Schema({
//   rating: Number,
//   comment: String,
//   author: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
// });

// module.exports = mongoose.model("Review", reviewSchema);


const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  body: {
    type: String,
    trim: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Review", reviewSchema);
