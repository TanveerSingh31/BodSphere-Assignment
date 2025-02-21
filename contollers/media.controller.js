export class MediaContoller {


    static async (data) {
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