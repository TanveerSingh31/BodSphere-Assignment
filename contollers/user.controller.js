import UserService from '../services/user.service.js';

export class UserContoller {


    static async register(req, res, next) {
        try{
            console.log(req.body);
            let { email, password, confirmPassword } = req.body;

            if(password != confirmPassword) {
                return res.status(400).send({error: "true", message: "password & confirm password don't match", data: {} });
            } 

            let data = await UserService.register({email , password});
    
            return res.status(201).send({error: "false", message: "User regisration successful", data: {}});
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

            res.status(201).send({error: "false", message: "User login successfull", data: token });
        }
        catch(err) {
            res.status(400).send({error: "true", message: err.message, data: {} });
        }
    }


}