import mongoose from "mongoose"

const adress = "mongodb+srv://koikawa1:admin@database-proj05.zf7zg7s.mongodb.net/?retryWrites=true&w=majority&appName=database-proj05"

await mongoose.connect(adress)
console.log("CONNECTED WITH THE DATABASE!")

mongoose.Promise = global.Promise