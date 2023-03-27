import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt.handle';
import { JwtPayload } from 'jsonwebtoken';
import { RequestExt } from '../interfaces/req-ext';

const checkJwt = (req:RequestExt, res: Response, next:NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser.split("").pop() // 11111
        const isUser = verifyToken(`${jwt}`) as {id: string};
        if(!isUser) {
            res.status(401)
            res.send("NO_TIENES_UN_JWT_VALIDO");
        }else {
         req.user = isUser;
         next();
        }
    }catch(e) {
        console.log({ e });
        res.status(400)
        res.send ("SESION_NO_VALIDA");
    }
};


export {checkJwt}