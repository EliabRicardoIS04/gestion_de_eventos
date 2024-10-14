import express,{Request, Response} from "express";
import { userRouter } from "./infrastructure/httpAdapter/requestAdapter";
import { Parameters } from "./infrastructure/utils/constans";
import { initDatabase } from "./infrastructure/bd/mongo";

const app = express();
app.use(express.json());

app.use("/user", userRouter);


const url_glbd =`mongodb://${Parameters.DATABASE_HOST}:${Parameters.DATABASE_PORT}/${Parameters.DATABASE_NAME}`;



app.listen(3000, async()=>{
    await initDatabase (url_glbd);
    console.log("server running at port 8080");
})