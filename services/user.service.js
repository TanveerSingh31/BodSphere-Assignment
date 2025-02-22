import UserRepository from '../repository/user.repository.js';
import AuthenticationService from '../Authentication/index.js';

export default class UserService {


    static async register({email, password}) {
        try{
            let userFound = await UserRepository.getUserData({email});
            if(userFound) throw new Error('Your profile already exists, please login');

            let result = await UserRepository.addUser({email , password});
        }
        catch(err) {
            throw err;
        }
    }


    static async login({email, password}) {
        try{
            let userData = await UserRepository.getUserData({email, password});

            if(!userData) {
                throw Error('email or password is incorrect');
            }
            
            // generate jwt
            let token = await AuthenticationService.generateToken(userData);

            return token;
        }
        catch(err) {
            throw err;
        }
    }

}