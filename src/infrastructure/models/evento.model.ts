import { Schema, model } from "mongoose";
import { IEvento } from "../../domain/interfaces/Evento.interfaces";

const eventoSchema = new Schema<IEvento>({
    id: {required: true, type: String},
    title : {required: true, type: String},
    description :{required: true, type: String},
    date: {required: true, type: Date},
    organizer: {required: true, type: String}
});
export const eventoModel = model("teventos",eventoSchema )