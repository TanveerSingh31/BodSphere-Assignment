import model from '../Models/models.js';

export default class MediaRepository {


    static async uploadVideo({fileName, description}) {
        try{
            let data = await model.Video.create({fileName, description});
            return data;
        }
        catch(err) {
            throw err;
        }
    }

    static async getVideo({id}) {
        let data = await model.Video.findOne({_id: id}, 'fileName');
        return data;
    }

}