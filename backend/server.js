import express from "express"
import mongoose from "mongoose"
import route from "./routes/toDoRoute.js"



import dotenv from "dotenv"
dotenv.config();

const app = express();
const PORT = process.env.port || 5000;

mongoose
.connect(process.env.DB_URL)
.then(()=>{
   console.log(`Connected to Database`);
})
.catch((err)=>console.log(err));

app.use("/route", route);

app.listen(PORT, ()=>{
   console.log(`Listening on PORT: 5000`);
})