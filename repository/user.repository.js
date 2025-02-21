import { Users } from '../models';
import AuthenticationService from '../Authentication';

export class UserRepository {


    static async addUser({email, password}) {
        try{
            let { email, password } = req.body;
            let data = await UserRepository.register({email , password});
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