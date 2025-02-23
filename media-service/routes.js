import express from 'express';
import { MediaController } from './contollers/media.controller.js';
import AuthenticationService from './Authentication/index.js';

const route = express.Router();

// Content API's
route.post('/video', MediaController.uploadVideo) 
route.get('/video', AuthenticationService.validateUser, MediaController.getVideo) // gets all videos


export { 
    route
}