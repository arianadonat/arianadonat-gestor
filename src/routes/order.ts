import { Router } from "express";
import { getItems } from "../controllers/item";
import { checkJwt } from "../middleware/session";
/**
 * Esta ruta solo puede acceder las personas que tienen session activa!
 * que tenga un JWT valido!
 */
const router = Router();

router.get('/',getItems, checkJwt);

export {router};