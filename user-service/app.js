import express from 'express';
import models from './Models/models.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
global.DIR_NAME = __dirname;
console.log(global.DIR_NAME);

import {route} from './routes.js';


const app = express();



app.use(express.json());
app.use(route);


app.listen(3000, ()=>{
    console.log('server listening on port 3000');
})