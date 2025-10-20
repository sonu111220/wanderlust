// const listingSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: String,
//   image: {
//     type: String,
//     default:
//       "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     set: (v) =>
//       v === ""
//         ? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
//         : v,
//   },
//   price: Number,
//   location: String,
//   country: String,
// });

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema = new Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description: String,
//     image: {
//         type: String,
//         default: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", // fallback image
//         set: (v) =>
//             v === ""
//                 ? "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
//                 : v,
//     },
//     price: {
//         type: Number,
//         required: true,
//         min: 0
//     },
//     location: String,
//     country: String
// });

// const Listing = mongoose.model("Listing", listingSchema);

// module.exports = Listing;


// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema = new Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description: String,
//     image: {
//         filename: {
//             type: String,
//             default: "listingimage"
//         },
//         url: {
//             type: String,
//             default: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
//         }
//     },
//     price: {
//         type: Number,
//         required: true,
//         min: 0
//     },
//     location: String,
//     country: String
// });

// const Listing = mongoose.model("Listing", listingSchema);

// module.exports = Listing;

// c

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// // image sub-schema (Cloudinary style)
// const ImageSchema = new Schema({
//   url: { type: String, required: true },
//   filename: String,
// });

// // Allow either a string OR an object by using Mixed at top-level, but add helpers
// const listingSchema = new Schema({
//   title: { type: String, required: true },
//   description: String,
//   price: { type: Number, required: true, min: 0 },
//   location: String,
//   country: String,

//   // store either a string (legacy) or an object { url, filename } (cloudinary)
//   image: {
//     type: Schema.Types.Mixed,
//     required: false,
//   },

//   owner: {
//     type: Schema.Types.ObjectId,
//     ref: "User",
//   },

//   reviews: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Review",
//     },
//   ],
// },
// {
//   toJSON: { virtuals: true },
//   toObject: { virtuals: true },
// });

// // Virtual to return a usable image URL regardless of storage shape
// listingSchema.virtual("imageUrl").get(function () {
//   // if image is a string (legacy)
//   if (typeof this.image === "string" && this.image.trim() !== "") {
//     return this.image;
//   }
//   // if image is an object with url (cloudinary)
//   if (this.image && typeof this.image === "object" && this.image.url) {
//     return this.image.url;
//   }
//   // fallback placeholder
//   return "https://via.placeholder.com/600x300?text=No+Image";
// });

// module.exports = mongoose.model("Listing", listingSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// image sub-schema (Cloudinary style)
const ImageSchema = new Schema({
  url: { type: String, required: true },
  filename: String,
});

// Allow either a string OR an object by using Mixed at top-level, but add helpers
const listingSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true, min: 0 },
  location: String,
  country: String,

  // store either a string (legacy) or an object { url, filename } (cloudinary)
  image: {
    type: Schema.Types.Mixed,
    required: false,
  },

  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

// Virtual to return a usable image URL regardless of storage shape
listingSchema.virtual("imageUrl").get(function () {
  // if image is a string (legacy)
  if (typeof this.image === "string" && this.image.trim() !== "") {
    return this.image;
  }
  // if image is an object with url (cloudinary)
  if (this.image && typeof this.image === "object" && this.image.url) {
    return this.image.url;
  }
  // fallback placeholder
  return "https://via.placeholder.com/600x300?text=No+Image";
});

module.exports = mongoose.model("Listing", listingSchema);



// const mongoose = require("mongoose");

// const listingSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   price: Number,
//   location: String,
//   country: String,
//   image: String, // ✅ image URL string only
//   owner: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
//   reviews: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Review",
//     },
//   ],
// });

// module.exports = mongoose.model("Listing", listingSchema);

// const mongoose = require("mongoose");

// const listingSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   image: String, // simple string URL
//   price: Number,
//   location: String,
//   country: String,
//   owner: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
//   reviews: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Review",
//     },
//   ],
// });

// module.exports = mongoose.model("Listing", listingSchema);

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// // ✅ Sub-schema for image (Cloudinary)
// const ImageSchema = new Schema({
//   url: {
//     type: String,
//     required: true,
//   },
//   filename: String,
// });

// const ListingSchema = new Schema({
//   title: {
//     type: String,
//     required: [true, "Title is required"],
//   },
//   description: String,
//   price: {
//     type: Number,
//     required: [true, "Price is required"],
//     min: 0,
//   },
//   location: String,
//   country: String,

//   // ✅ Cloudinary image object
//   image: {
//     type: ImageSchema,
//     required: [true, "Image is required"],
//   },

//   owner: {
//     type: Schema.Types.ObjectId,
//     ref: "User",
//   },

//   reviews: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Review",
//     },
//   ],
// });

// module.exports = mongoose.model("Listing", ListingSchema);



// const mongoose = require("mongoose");

// const listingSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   price: Number,
//   location: String,
//   country: String,
//   image: {
//     url: String,
//     filename: String,
//   },
//   owner: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
//   reviews: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Review",
//     },
//   ],
// });

// module.exports = mongoose.model("Listing", listingSchema);


// const mongoose = require("mongoose");

// const listingSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   price: Number,
//   location: String,
//   image: {
//     url: String,
//     filename: String
//   },
//   owner: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User"
//   },
//   reviews: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Review"
//     }
//   ]
// });

// module.exports = mongoose.model("Listing", listingSchema);


// const mongoose = require("mongoose");

// const listingSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   image: {
//     url: String,
//     filename: String,
//   },
//   price: Number,
//   location: String,
//   country: String,
//   owner: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
//   reviews: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Review",
//     },
//   ],
// });

// module.exports = mongoose.model("Listing", listingSchema);



// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema = new Schema({
//   title: String,
//   description: String,
//   image: String,
//   price: Number,
//   location: String,
//   country: String,
//   owner: {
//     type: Schema.Types.ObjectId,
//     ref: "User", // 👈 connects to User model
//   },
//   reviews: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Review",
//     },
//   ],
// });

// module.exports = mongoose.model("Listing", listingSchema);


// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema = new Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description: String,
//     image: {
//         type: String,  // 👈 ab sirf string hoga
//         default: "https://via.placeholder.com/600x300?text=No+Image"
//     },
//     price: {
//         type: Number,
//         required: true,
//         min: 0
//     },
//     location: String,
//     country: String,
//     reviews: [
//   {
//     type: Schema.Types.ObjectId,
//     ref: "Review",
//   },
// ],

// });

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;


// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema = new Schema({
//   title: { type: String, required: true },
//   description: String,
//   image: {
//     filename: { type: String, default: "listingimage" },
//     url: { type: String, default: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" }
//   },
//   price: { type: Number, required: true, min: 0 },
//   location: String,
//   country: String,
//   reviews: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Review"
//     }
//   ]
// });

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;
