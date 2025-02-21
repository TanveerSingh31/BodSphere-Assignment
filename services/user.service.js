import UserRepository from '../repository/user.repository';
import AuthenticationService from '../Authentication';

export class UserService {


    static async register({email, password}) {
        try{
            let { email, password } = req.body;
            let data = await UserRepository.register({email , password});
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