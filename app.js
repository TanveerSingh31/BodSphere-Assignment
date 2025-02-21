import express from 'express';
const app = express();
import {route} from './routes.js';


app.use(
    express.urlencoded({extended: true})
);
app.use(route);






app.listen(3000, ()=>{
    console.log('server listening on port 3000');
})