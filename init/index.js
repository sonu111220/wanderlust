// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../models/listing.js");

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

// const initDB = async () => {
//   await Listing.deleteMany({});
//   await Listing.insertMany(initData.data);
//   console.log("data was initialized");
// };

// initDB();




const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => console.log("✅ Connected to DB"))
  .catch((err) => console.log("❌ DB Connection Error:", err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    console.log("🗑️ Old listings deleted");

    // Ensure every listing has a proper image object
    const listingsWithImages = initData.data.map((obj) => ({
      ...obj,
      image:
        obj.image && obj.image.url
          ? obj.image
          : {
              url: "https://via.placeholder.com/600x400?text=No+Image",
              filename: "default-placeholder",
            },
    }));

    await Listing.insertMany(listingsWithImages);
    console.log("🌱 Database seeded successfully!");

  } catch (err) {
    console.error("❌ Error seeding DB:", err);
  } finally {
    mongoose.connection.close();
    console.log("🔒 Connection closed");
  }
};

initDB();
