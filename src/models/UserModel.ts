import { Schema, Document, model } from "mongoose";

interface UserModelType extends Document {
  email: string;
  password: string;
}

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: true,
    lowercase: true,
  }
});

export const UserModel = model<UserModelType>("User", UserSchema);
