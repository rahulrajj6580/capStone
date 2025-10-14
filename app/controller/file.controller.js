const fs = require('fs');
const uploadfile = require('../middleware/upload');
const baseUrl = 'http://localhost:8080/files/';

exports.bookFileUpload = async(request, response) => {
    try{
        await uploadfile(request, response);

        if(request.file == undefined) {
            return response.status(400).send({message : "Please upload a file"})
        }
        response.status(201).send({message: "File uploaded"});
    }catch(err){
        
        if(err.code == 'LIMIT_FILE_SIZE'){
            return response.status(500).send({
                message : "File exceedind 2MB"
            })
        }

        response.status(500).send({
            message: `Error in uploading the file: ${request.file}. ${err}`,
        });
    }
}

exports.getAllFiles = (request, response) =>{
    const directoryPath = `${__dirname}../../../resources/`;

    fs.readdir(directoryPath, (err,files) => {
        console.log(err)
        if(err){
            return response.status(500).send({message: "Error in fetching files"});
        }

        let filesInDir = [];

        files.forEach((file) => {
            filesInDir.push({
                name : file,
                url: baseUrl + file
            });
        });

        return response.status(200).send(filesInDir);
    });
}

exports.downloadApi = (request, response) =>{
    const fileName = request.params.name;
    const dirPath = `${__dirname}../../../resources/`;

    response.download(dirPath + fileName , fileName, (err) => {
        if(err){
            response
                .status(500)
                .send({ message : `Dowload Error ${err}`});
        }
    });
};

exports.removeFile = (request, response) => {
    const fileName = request.params.name;
    const dirPath = `${__dirname}../../../resources/`;

    fs.unlink(dirPath + fileName , (err) => {
        if(err){
            response.status(500).send({
                message: `Error in deleting file ${err}`
            });
        }

        response.status(200).send({
            message: `File is deleted.`
        });
    });
};