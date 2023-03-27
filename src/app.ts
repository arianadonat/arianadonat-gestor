import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import dotenv from "dotenv"

dotenv.config()
import db from "./config/mongo";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
db().then(() => console.log("Conexion Raedy")).catch( (e) => console.log({e}));
app.listen(PORT, () => console.log ('listo por el puerto', PORT))