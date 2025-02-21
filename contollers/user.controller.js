import UserService from '../services/user.service.js';

export class UserContoller {


    static async register(req, res, next) {
        try{
            console.log(req.body);
            let { email, password, confirmPassword } = req.body;

            if(password != confirmPassword) res.status(400).send({error: "true", message: "password & confirm password don't match", data: {} });

            let data = await UserService.register({email , password});
            res.status(201).send({error: "false", message: "User regisration success", data: {"accessToken": data} });
        }
        catch(err) {
            throw err;
        }
    }


    static async login(req, res, next) {
        try{
            let { email, password } = req.body;

            let token = await UserService.register({email , password});
            
            if(!token) {
                res.status(400).send({error: "true", message: "password is incorrect", data: {} });
            }

            res.status(201).send({error: "false", message: "User login success", data: {"accessToken": token} });
        }
        catch(err) {
            throw err;
        }
    }


}