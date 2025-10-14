const Book = require('../models/books.model');

const checkBookCreator = async (request,response) =>{
    try{
        const bookId = request.params.bookId;
        if(!bookId){
            return response.status(400).send({message : `Book ID required`});
        }
        const bookData = await Book.findById(bookId);
        console.log(`book iddddddddd     ${bookData}`);

        if(!bookData){
            return response.status(404).send({message : `Book not found`});
        }

        if(bookData.createdBy.equals(request.user._id)){

            return response.status(403).send({message : `unauthorized`});             
        }
        console.log(`req.book          ${bookData}`);
        return  request.bookData;
    }catch(err){
        return response.status(500).send({message: 'Error verifying book Creator'});
    }
}

module.exports = checkBookCreator;