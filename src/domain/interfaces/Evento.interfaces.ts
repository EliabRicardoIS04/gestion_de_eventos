export interface IEvento{
    id:String;
    title : String ;
    description : String ;
    date: Date;
    organizer: String;

}

export interface IEventoCreate extends Omit<IEvento,"id">{}
