import express from 'express';
import { UserContoller } from './contollers/user.controller.js';
import AuthenticationService from './Authentication/index.js';

const route = express.Router();



// User API's
route.post('/register', UserContoller.register);
route.post('/login', UserContoller.login);
route.post('/user/profile', AuthenticationService.validateUser, UserContoller.userProfile) // to create user profile


export { 
    route
}