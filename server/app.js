import express from 'express';
import mongoose from 'mongoose';
import { createServer } from 'node:http';
import {Server} from 'socket.io'
import router  from './router/routes.js';
import cors from 'cors';

const app=express();
const server= createServer(app);
const io = new Server(server);

//middlewares
app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({limit: '50kb', extended: true}));
app.use(cors());
app.use("/", router);

//Socket io pluggin
io.on('connection', (client) => { 
    console.log("Client connected");
    io.on('disconnect', ()=>{
        console.log("client disconnected");
    })

});

app.listen(3000, ()=>{
    console.log("Server listening on port 3000");
});

//Database Connection 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test').then(()=>{
    console.log("Database connected!");
  });
}
