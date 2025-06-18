import mongoose from "mongoose"
import "dotenv/config"

const adress = process.env.MONGO_URI

await mongoose.connect(adress)
console.log("CONNECTED WITH THE DATABASE!")

mongoose.Promise = global.Promise