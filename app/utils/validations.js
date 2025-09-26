const { body } = require('express-validator');
const db = require("../models");
const book = db.book


exports.checkDuplicate = async (title)=> {
    const existingbook = await book.findOne({title:title});
    if(existingbook){
        return false;       
    }else{
        return true;
    }
}

exports.title = body('title').notEmpty().withMessage('Tittle was empty').isLength({max : 15}).withMessage('exceeding title characters')

exports.author = body('author').notEmpty().withMessage('Author was empty').isLength({max : 15}).withMessage('exceeding author characters')

exports.description = body('description').notEmpty().withMessage('description was empty').isLength({max : 15}).withMessage('exceeding description characters')

exports.publishedDate = body('publishedDate').notEmpty().withMessage('date was epmty').matches(/^\d{4}\/\d{2}\/\d{2}$/).withMessage('Date should be in YYYY/MM/DD format').custom(async (date) =>{
    let givenDate = new Date(date);
    let currentDate = new Date ();
    try{
        if(givenDate > currentDate) {
            throw new Error('Date can be future date')
        }
    }catch(err){
        throw err
    }
})

exports.genre = body('genre').notEmpty().withMessage('genre was empty').isLength({max : 15}).withMessage('exceeding genre characters')



