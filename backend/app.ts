import express from 'express'; 
import router from './src/routes/router';
require('dotenv').config();
const mongoose = require('mongoose');

// initializations
const app = express();

app.use('/contacts', router);

//settings
const port =3000;
mongoose.promise  = global.Promise;
const urlDb= "mongodb+srv://proyecto:sena12345@cluster0.tg5tnsm.mongodb.net/";
mongoose.connect(process.env.MONGO_URI)
    .then((mongoose: any) =>console.log("db conectada en atlas"))
    .catch((err: any) =>console.log(err))

//Starting the server
app.listen(port, ()=>{
    console.log(`Funcionanding, Server on port ${port}`);
});
