import mongoose from "mongoose";

const UserScheme = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  birthday: Date
})

const user = mongoose.model("user", UserScheme)
export {user}