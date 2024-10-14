import { IEvento, IEventoCreate } from "../../domain/interfaces/Evento.interfaces";
import { eventoModel } from "../models/evento.model";


export const addEvento = async (evento: IEvento)=>{
    try {
        const newEvento = new eventoModel(evento);
        return await newEvento.save();
    } catch (error) {
        throw new Error("no de guardo en la base de datos");
    }
};

export const updateEvento = async (id: string , evento:IEventoCreate )=>{
    try {
       return await eventoModel.findByIdAndUpdate(id, evento);
    } catch (error) {
        throw new Error("no de guardo en la base de datos");
    }
};