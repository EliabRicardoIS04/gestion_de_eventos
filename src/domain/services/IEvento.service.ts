import { IEvento,IEventoCreate } from "../interfaces/Evento.interfaces";

export interface IEventoService{
    create:(user: IEventoCreate)=> Promise<IEvento>;
    get: (id: IEvento["id"]) => Promise<IEvento>;
}