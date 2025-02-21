import express from 'express';
import { UserContoller } from './contollers/user.controller.js';
const route = express.Router();


route.post('/register', UserContoller.register)
route.post('/login')
route.post('/user/profile') // to create user profile
route.get('/videos') // gets all videos

export { 
    route
}