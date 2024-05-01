// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });

// as connecct db is an asynchronous function it will return an promise
connectDB()
.then(()=>{
  const port=process.env.PORT;
 app.listen(port || 8000,()=>{
  console.log(`server is listening at port ${port}`);
 })
})
.catch((err)=>{
 console.log("MongoDb connection error index.js",err);
})






/*
import express from 'express'
const app=express()

;(async()=>{
  try {
 await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

 app.on("error",(e)=>{
    console.log("Error",e);
    throw e
 })
  app.listen(process.env.PORT,()=>{
    console.log(`app is listening at port ${process.env.PORT}`);
  })
  } catch (error) {
 console.error("Error",error);
  throw error
  }
})()
*/
