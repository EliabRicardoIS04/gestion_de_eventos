import {Router,Request, Response} from "express";
import { IEventoService } from "../../domain/services/IEvento.service";
import { GenerateIdService } from "../services/Gid.service";
import { EventoService } from "../services/Evento.service";
import { RegisterEvento } from "../../application/registerEvento";
import { ResponseAdapter } from "./responseAdapter";
import { schemaMiddleware } from "../middlewares/schema.middlewar";
import { create } from "domain";
import { createEventoSchema } from "../schema/evento.schema";

const generateIdSrv = new GenerateIdService();
const eventoSrv = new EventoService();



const register = new RegisterEvento(eventoSrv);


const userRouter = Router();

userRouter.post("/",schemaMiddleware( createEventoSchema), async (req: Request, res: Response)=>{
    
        const body = req.body;
        ResponseAdapter.handler(register.register(body), req, res);
       

});

userRouter.patch("/",schemaMiddleware( createEventoSchema), async (req: Request, res: Response)=>{
    
        const body = req.body;
        ResponseAdapter.handler(register.register(body), req, res);
       

});


export {userRouter} 