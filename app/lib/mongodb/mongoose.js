import mongoose from "mongoose";

let initialized = false;

export async function connect() {
  mongoose.set("strictQuery", true);
  if (initialized) {
    console.log("MongoDB already connected");
    return;
  }
}
// otherwise connect to db
try {
  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: "next-imdb-clerk",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  initialized = true;

  console.log("MongoDB connected");
} catch (error) {
  console.log("MongoDB connection error", error);
}
