import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://urmi:22122007@cluster0.vztaojt.mongodb.net/MERN').then(() => { console.log("MongoDB Connected");});

};