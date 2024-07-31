import express from "express";
import ruta from "./routes";
import cors from 'cors';
import { config } from "dotenv";
config();

const app = express();

app.set("port",process.env.PORT)
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use("/", ruta);


export default app;