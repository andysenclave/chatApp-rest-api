import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app   = express();
const port  = 3000;
const timeStamp = new Date();
//connect to mongoose

mongoose.connect('mongodb://localhost:27017/chatApp');
const db   = mongoose.connection;

const Users = require('./models/Users');

app.get('/', (req, res) => {
        res.send(`Please use the API parameter to access the webservice`);
    })
    .get('/ok', (req, res) => res.send(`/ok`))
    .get('/api/users', (req, res) => {
        Users.getUsers((error, Users)=>{
            if(error) {
                throw error;
            }
            res.json(Users);
        });
    })
    .listen(port); // port 3000 to listen to

console.log(`${timeStamp}:Running server on port ${port}`);