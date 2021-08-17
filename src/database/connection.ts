import mongoose from "mongoose";
import { ApplicationException } from "@exceptions/ApplicationException";

const { MONGO_URL } = process.env;

export const connection = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
    });

    console.log("MONGODB IS LISTEN");
  } catch (error) {
    new ApplicationException("Error to connect with mongodb", 500);
  }
}
