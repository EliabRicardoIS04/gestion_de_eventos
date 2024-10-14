import Joi from "joi";


const id = Joi.string();
const title = Joi.string();
const description = Joi.string();
const date = Joi.date();
const organizer = Joi.string();



export const createEventoSchema= Joi.object({
    id:id.required(),
    title : title.required(),
    date: date.required(),
    organizer: organizer.required()
});

export const updateTodoSchema =Joi.object({
    id:id,
    title : title,
    date: date,
    organizer: organizer
});







