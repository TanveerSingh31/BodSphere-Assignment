import UserRepository from '../repository/user.repository.js';
import AuthenticationService from '../Authentication/index.js';

export default class UserService {


    static async register({email, password}) {
        try{
            let data = await UserRepository.addUser({email , password});
            return data;
        }
        catch(err) {
            throw err;
        }
    }


    static async login({email, password}) {
        try{
            let { email, password } = req.body;

            // get 
            let userData = await UserRepository.getUserDetails({email});

            if(!userData || userData?.password != password) {
                throw Error(401, 'password doesnot match');
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