import { Users } from '../models.js';
import AuthenticationService from '../Authentication/index.js';

export default class UserRepository {


    static async addUser({email, password}) {
        try{
            let data = await Users.create({email , password});
            return data;
        }
        catch(err) {
            throw err;
        }
    }


    static async getUserData({email}) {
        try{
            // get 
            let userData = await Users.findOne({email});
            return userData;
        }
        catch(err) {
            throw err;
        }
    }

}