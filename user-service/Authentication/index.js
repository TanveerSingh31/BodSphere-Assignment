import jwt from "jsonwebtoken";
import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';
import UserRepository from '../repository/user.repository.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const privateKey = fs.readFileSync(__dirname + '/private_key.pem');
const publicKey = fs.readFileSync(__dirname + '/public_key.pem');


export default class AuthenticationService {


    static async generateToken(data) {
        try{
            const accessToken = jwt.sign({userInfo : data}, privateKey, { algorithm: 'RS256', expiresIn: 600 });
            const refreshToken = jwt.sign({userInfo : data}, privateKey, { algorithm: 'RS256' });
            
            //  save tokens to db
            await UserRepository.saveUserTokens({accessToken, refreshToken});
            
            return {accessToken, refreshToken};
        }
        catch(err) {
            throw err;
        }
    }


    static async removeToken(userId) {
        try{
            const tokenData = jwt.verify(token, publicKey);
            if(tokenData?.userName) {
                // remove token of this username
            }
        }
        catch(err){
            throw err;
        }
    }


    static verifyToken(token) {

        const data = jwt.verify(token, publicKey);
        return data;
    }


    static async validateUser(req, res, next) {
        try{
            const accessToken = req.headers?.authorization;
            if(!accessToken) throw new Error('Unauthorized request');

            let userData = AuthenticationService.verifyToken(accessToken.split(' ')[1]);
            if(userData) {
                req.headers.userData = userData;
                next();
            }
        }
        catch(err) {
            return res.status(400).send({error: "true", message: "Unauthorized request", data: {} });
        }
    }

}