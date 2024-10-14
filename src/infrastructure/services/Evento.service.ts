import { IEventoCreate, IEvento } from "../../domain/interfaces/Evento.interfaces";
import { IEventoService } from "../../domain/services/IEvento.service";
import { v4 as uuidv4 } from 'uuid';


export class EventoService implements IEventoService{
    get: (id: IEvento["id"]) => Promise<IEvento>;
    
    private eventos : IEvento[] =[];
    
    async create (evento: IEventoCreate) : Promise<IEvento>{
        const newEvento : IEvento= {
            id: uuidv4,
            ...evento
        }
        this.eventos.push(newEvento);
        return newEvento;
    };
/*
    async get(id: string): Promise<IUser> {
        const user = this.users.find((user) => user.id === id);
        if (!user) {
            throw new NotFoundError();
        }
        return user;
    }
        */
}