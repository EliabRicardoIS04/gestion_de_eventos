import { NotCreatedError } from "../domain/errors/NotCreateError";
import { IEventoCreate } from "../domain/interfaces/Evento.interfaces";
import { IEventoService } from "../domain/services/IEvento.service";
import { addEvento } from "../infrastructure/controller/evento.controller";



export class RegisterEvento{
    constructor(private readonly eventoSrv: IEventoService){

    }

    async register(evento: IEventoCreate){
        try{
            const newEvento = await addEventoto( this.eventoSrv.create(evento));
            
        }catch(error){
            throw error || new NotCreatedError();
        }
    }
}