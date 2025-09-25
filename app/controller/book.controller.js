const db = require("../models")
const book = db.book

exports.add = async(request, response) =>{

try{

    if(!request.body){
        new Error("body cant be empty")
        return;
    }    
    const  newBook = new book({
        title : request.body.title,
        author: request.body.title,
        genre : request.body.genre,
        description : request.body.description,
        year : request.body.year
    }) 

    const data = await newBook.save(newBook);
    response.send(data)

}catch(err){
    console.error(err);
}

};