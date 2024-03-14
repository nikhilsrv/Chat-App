import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authroutes from "./routes/auth.js"
import messageroutes from "./routes/message.js"
import connectToMongoDB from "./db/connetion.js";
import userroutes from "./routes/user.js"
import {app, server} from "./socket/socket.js"
import cors from "cors"
import path from "path"
dotenv.config()
const port=process.env.PORT||5000;
const __dirname=path.resolve();
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(express.static(path.join(__dirname,"/frontend/dist")))
app.use("/api/auth",authroutes);
app.use("/api/message",messageroutes);
app.use("/api/user",userroutes)

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"/frontend/dist/index.html"))
})


server.listen(port,()=>{
    connectToMongoDB();
    console.log(`Server running at ${port}`)
})


