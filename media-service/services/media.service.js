import MediaRepository from '../repository/media.repository.js';

export default class MediaService {


    static async uploadVideo({fileName, description}) {
        try{
            let data = await MediaRepository.uploadVideo({fileName, description});
            return data;
        }
        catch(err) {
            throw err;
        }
    }


    static async getVideo({id}) {
        return MediaRepository.getVideo({id});
    }

}