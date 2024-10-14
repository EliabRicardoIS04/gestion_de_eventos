import { connect } from "mongoose";

 const initDatabase = async (url: string)=>{
    try {
        await connect(url);
        console.log("conectado a la base de datos con exito")
    } catch (error) {
        console.error(error);
        process.exit(1);   
    }
};

export {initDatabase};