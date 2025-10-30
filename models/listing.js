

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
// const Schema = mongoose.Schema;

// // ✅ Image Sub-Schema (Cloudinary or Local)
// const ImageSchema = new Schema({
//   url: { type: String, required: true },
//   filename: String,
// });

// const listingSchema = new Schema(
//   {
//     title: { type: String, required: true },
//     description: String,
//     price: { type: Number, required: true, min: 0 },
//     location: String,
//     country: String,

//     // ✅ Store image as object OR string
//     image: {
//       type: Schema.Types.Mixed,
//       required: false,
//     },

//     owner: {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//     },

//     reviews: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: "Review",
//       },
//     ],
//   },
//   {
//     toJSON: { virtuals: true },
//     toObject: { virtuals: true },
//   }
// );

// // ✅ Virtual to always return a valid image URL
// listingSchema.virtual("imageUrl").get(function () {
//   if (typeof this.image === "string" && this.image.trim() !== "") {
//     return this.image;
//   }
//   if (this.image && typeof this.image === "object" && this.image.url) {
//     return this.image.url;
//   }
//   return "https://placekitten.com/600/300"; // fallback
// });

// module.exports = mongoose.model("Listing", listingSchema);

