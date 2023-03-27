import { Request, Response, Router } from "express";
import {registerCtrl, loginCtrl} from "../controllers/auth"

const router = Router();
//** http://localhost:3000/auth/register [POST] */
router.post("/register",registerCtrl);
router.post("/login", loginCtrl );

export {router};