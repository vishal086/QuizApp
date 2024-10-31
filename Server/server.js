import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import router from './router/route.js';

import { connectDB } from './database/conn.js';

const app = express() 
 

 

app.use(cors()); 
app.use(express.json());
dotenv.config();


 
const port = process.env.PORT || 8080;



app.use('/api', router) 


app.get('/', (req, res) => {
    res.send("Welcome to Quiz Application")
}) 



app.listen(port,(err) => {
    console.log(`Server is Running at Port ${port}`)
    connectDB();
})

