export class NotCreatedError extends Error {
    constructor(message?:string){
        super(message || "Error at creating resources");
    }
}