// updateImages.js
const mongoose = require("mongoose");
const Listing = require("./models/listing");

async function updateImages() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
    console.log("✅ MongoDB connected");

    // 1) Jahan image object hai { url: "...", filename: "..." }
    const result1 = await Listing.updateMany(
      { "image.url": { $exists: true } },
      [
        { $set: { image: "$image.url" } } // sirf URL rakho
      ]
    );

    // 2) Jahan image missing ya empty hai
    const result2 = await Listing.updateMany(
      { $or: [{ image: null }, { image: "" }] },
      { $set: { image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" } }
    );

    console.log("🔧 Updated object images:", result1.modifiedCount);
    console.log("🔧 Fixed empty images:", result2.modifiedCount);

    await mongoose.disconnect();
    console.log("✅ MongoDB disconnected");
  } catch (err) {
    console.error("❌ Error:", err);
  }
}

updateImages();
