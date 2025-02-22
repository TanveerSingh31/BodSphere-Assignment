import model from '../Models/models.js';
import AuthenticationService from '../Authentication/index.js';

export default class UserRepository {


    static async addUser({email, password}) {
        try{
            console.log({email, password});
            let data = await model.Users.create({email , password});
            return data;
        }
        catch(err) {
            throw err;
        }
    }


    static async getUserData({email, password}) {
        try{
            let userData = await model.Users.findOne({email, ...(password && {password})}, 'email');
            return userData;
        }
        catch(err) {
            throw err;
        }
    }




    static async saveUserTokens({email ,accessToken, refreshToken}) {
        try{
            await model.Users.updateOne({accessToken, refreshToken}, {email});
        }
        catch(err) {
            throw err;
        }
    }

}