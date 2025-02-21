import jwt from "jsonwebtoken";
import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const privateKey = fs.readFileSync(__dirname + '/private_key.pem');
const publicKey = fs.readFileSync(__dirname + '/public_key.pem');


export default class AuthenticationService {


    static async generateToken(data) {
        try{
            const token = jwt.sign(data, privateKey, { algorithm: 'RS256' });
            //TODO: save token to db
            return token;
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


    static async verifyToken(token) {
        try{
            const token = jwt.verify(token, publicKey);
            return token;
        }
        catch(err) {
            throw err;
        }
    }

}