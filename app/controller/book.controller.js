const { request } = require("express");
const db = require("../models")
const book = db.book

exports.addBooks = async (request, response) => {

    try {

        const newBook = new book({
            title: request.body.title,
            author: request.body.title,
            genre: request.body.genre,
            description: request.body.description,
            year: request.body.year
        })

        const data = await newBook.save(newBook);
        return response.status(200).send(data);

    } catch (err) {
        response.status(500).send({ message: "error in adding a new record" });
    }

};

exports.getAllBooks = async (_, response) => {
    try {
        const data = await book.find();
        return response.send(data);

    } catch (err) {
        response.status(200).status(400).send({ message: "error in getting records" });
    }

}

exports.getBookById = async (request, response) => {
    try {
        const id = request.params.id;
        const data = await book.findById(id)
        return response.status(200).send(data);

    } catch (err) {
        response.status(404).send({ message: "error in getting the book by id" })
    }
}

exports.updateBookById = async (request,response) =>{
    try{
        const id = request.params.id;
        const updateData = request.body        
        const data = await book.findByIdAndUpdate(id,updateData, {new : true})
        if(!data){
            return response.status(404).send({message:"book not found"});
        }
        response.status(200).send(data);
    }catch(err){
        response.status(500).send({message: "failed with updating record"});
    }
}