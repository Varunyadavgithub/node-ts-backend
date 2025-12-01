import mongoose from "mongoose";

export const connectDB: ()=>Promise<void> = async () => {
  try {
    await mongoose.connect(process.env.DB_URL as string);
    console.log("DB connected successfully.");
  } catch (error: any) {
    console.log("Error while connecting to DB.", error.message);
    process.exit(1);
  }
};