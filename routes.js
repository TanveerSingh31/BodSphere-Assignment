import express from 'express';
import { UserContoller } from './contollers/user.controller.js';
import AuthenticationService from './Authentication/index.js';

const route = express.Router();

route.post('/register', UserContoller.register);
route.post('/login', UserContoller.login);
route.post('/user/profile', AuthenticationService.validateUser, UserContoller.login) // to create user profile
route.get('/videos', AuthenticationService.validateUser, UserContoller.login) // gets all videos






export { 
    route
}