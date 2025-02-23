import UserService from '../services/user.service.js';

export class UserContoller {


    static async register(req, res, next) {
        try{
            let { email, password, confirmPassword } = req.body;

            if(password != confirmPassword) {
                return res.status(400).send({error: "true", message: "password & confirm password don't match", data: {} });
            } 

            let data = await UserService.register({email , password});
    
            return res.status(201).send({error: "false", message: "User regisration successful, profile is created", data });
        }
        catch(err) {
            res.status(400).send({error: "true", message: err.message, data: {} });
        }
    }


    static async login(req, res, next) {
        try{
            let { email, password } = req.body;

            let token = await UserService.login({email , password});
            
            if(!token) {
                res.status(400).send({error: "true", message: "password is incorrect", data: {} });
            }

            res.status(200).send({error: "false", message: "User login successfull", data: token });
        }
        catch(err) {
            res.status(400).send({error: "true", message: err.message, data: {} });
        }
    }


    static async userProfile(req, res, next) {
        try{
            let userData = req.headers?.userData?.userInfo;
            if(!userData) {
                throw new Error("Not valid user");
            }

            let {_id} = userData;             
            let { name, profileImage, aboutUs } = req.body;
            
            
            let data = await UserService.saveUserProfile({userId: _id, name, profileImage, aboutUs });

            res.status(201).send({error: "false", message: "User profile saved", data: {} });

        }
        catch(err) {
            res.status(400).send({error: "true", message: err.message, data: {} });
        }
    }


}