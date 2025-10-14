import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionString = await mongoose.connect(String(process.env.DATABASE_URL))
    console.log("✅ Database connected");
    return connectionString;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}