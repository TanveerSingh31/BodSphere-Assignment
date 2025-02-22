import express from 'express';
const app = express();
import {route} from './routes.js';
import models from './Models/models.js';


app.use(express.json());
app.use(route);




app.listen(3000, ()=>{
    console.log('server listening on port 3000');
})