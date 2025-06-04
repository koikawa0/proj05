import express from "express"
import cors from "cors"
import "./connection.js"
import {user} from "./database.js"

const server = express()

server.use(cors())
server.use(express.json())

server.get("/", function(req, res) {
  res.json({message: "ROUTE / GET"})
})

server.get("/",  async function(req, res) {
  const results = await user.find()
  res.status(200).json(results)
})

server.post("/", function(req, res){
  res.json({message: "ROUTE / POST"})
})

server.listen(4000, function(){
  console.log("SERVER IS RUNNING!")
  console.log("http://localhost:4000/")
})