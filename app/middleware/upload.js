const util = require('util');
const multer = require('multer');
const maxSize = 20 * 1024 * 1024;
const path = require('path');
const fs = require('fs');

const uploadPath = path.join(__dirname,'..','..','resources');

if(!fs.existsSync(uploadPath)){
    fs.mkdirSync(uploadPath,{recursive: true});
}
let storage = multer.diskStorage({
    destination: (request, file , cb) =>{
        cb(null, uploadPath);
    },
    filename: ( request, file, cb ) => {
        cb(null, file.originalname);
    }
})

let uploadFile = multer({
    storage: storage,
    limits: { fileSize : maxSize},
}).single('bookImg');

let uploadMiddleware = util.promisify(uploadFile);

module.exports = uploadMiddleware;