import express from "express";
import { engine } from 'express-handlebars';
 
import mongoose from "mongoose";
import dotenv from "dotenv";
import subjectsRouter from "./routes/subjectsRouter.js";
import departmentRouter from "./routes/departmentRouter.js";

dotenv.config();

const mongoconnectionUrl = "mongodb://127.0.0.1:27017/project";
mongoose.connect(process.env.mongoconnectionUrl);

const app = express();
app.use(express.urlencoded({extended:true}))
 

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './Templates');

 
app.use("/subjects",subjectsRouter);
app.use("/departments",departmentRouter);

app.listen(process.env.port,() =>{
console.log("started the application on http://localhost:" + process.env.port );
});

