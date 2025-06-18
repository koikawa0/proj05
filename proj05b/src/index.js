import express from "express"
import cors from "cors"
import "./connection.js"
import {user} from "./database.js"

const server = express()

server.use(cors())
server.use(express.json())

server.get("/",  async function(req, res) {
  const results = await user.find()
  res.status(200).json(results)
})

server.post("/", async function(req, res){
  try  {
    const newUser = new user(req.body)
    const result = await newUser.save()
    res.status(201).json(result)
  }
  catch(error) {
    console.log(error.message)
    answer.sendStatus(500)
  }
  })

server.listen(4000, function(){
  console.log("SERVER IS RUNNING!")
  console.log("http://localhost:4000/")
})