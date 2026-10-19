import express from "express";
import dotenv from "dotenv";


dotenv.config();

const app = express();


const PORT = process.env.PORT;


app.get("/api/health", (req, res)=>{
    return res.json({
        message: "OK"
    });
})


const startServer = async()=>{
    app.listen(PORT,()=>{
        console.log(`Server running PORT , ${PORT}`)
    })
}

startServer();
