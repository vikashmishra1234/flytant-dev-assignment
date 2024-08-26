const express = require('express');
const cors = require('cors');
const ConnectToDb = require('./dbConnect');
const Router = require('./routes/routes')
require('dotenv').config();

const app = express();
const Port = 5000;

app.use(cors());
app.use(express.json());
app.use('/',Router);

ConnectToDb();
app.listen(Port,()=>{
    console.log("Server Running...");
})