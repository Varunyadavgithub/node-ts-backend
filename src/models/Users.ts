import mongoose, { model, mongo, Schema } from "mongoose";

interface IUser {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  booksAdded: string[];
  role: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true },
  phone: { type: String, trim: true, required: true },
  username: { type: String, trim: true, required: true },
  password: { type: String, trim: true, required: true },
  booksAdded: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
  role: { type: String, enum: ["creator", "visitor", "admin"] },
});

const User = model<IUser>("User", userSchema);
export { User, IUser };
