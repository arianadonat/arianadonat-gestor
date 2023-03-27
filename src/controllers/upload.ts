import { Request, Response, response } from 'express';
import dbConnect from "../config/mongo";
import { handleHttp } from "../utils/error.handle";
import { registerUpload } from '../service/storage';
import { RequestExt } from '../interfaces/req-ext';
import { register } from 'ts-node';
import { Storage } from "../interfaces/storage";


const getFile = async (req: RequestExt, res: Response) => {
    try {
     const {user, file} = req;
     console.log(user);
     const dataToRegister: Storage = {
       fileName: `${file?.filename}`,
       idUser: `${user?.id}`,
       path:`${file?.path}`
      };
      const response = await registerUpload(dataToRegister);
        res.send ();
    } catch (e) {
      handleHttp (res, "ERRO_GET_BLOG");
    }

};

export {getFile};
 
    
    



