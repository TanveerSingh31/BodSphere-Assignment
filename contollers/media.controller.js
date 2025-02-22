import multer from "multer";
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'node:fs';
import MediaService from "../services/media.service.js";


let upload;

setTimeout(()=>{
    const storage = multer.diskStorage({
        destination: global.DIR_NAME + '/Media/',
        filename: (req, file, cb) => {
          cb(null,file.originalname);
        }
    });
    upload = multer({ storage: storage });
}, 1000);



export class MediaController {

    static async uploadVideo(req, res, next) {
        try{

            let { description } = req.body;

            await new Promise((resolve, reject) => {
                upload.single("video")(req, res, (err) => {
                  if (err) {
                    return reject(err);
                  }
                  resolve();
                });
            });

            console.log(req.file.originalname);

            let data = await MediaService.uploadVideo({fileName: req.file.originalname, description})

            return res.status(201).send({error: "false", message: "Video uploaded successfully", data });
        }
        catch(err) {
            throw err;
        }
    }

    static async getVideo(req, res, next) {
        try{
            let { videoId } = req.query;

            let data = await MediaService.getVideo({id: videoId});

            let stream = fs.createReadStream(global.DIR_NAME + '/Media/' + data.fileName)
            
            res.writeHead(200, {
                "Content-Type": "video/mp4",
            });
    
            stream.pipe(res);
        }
        catch(err) {
            throw err;
        }
    }

}