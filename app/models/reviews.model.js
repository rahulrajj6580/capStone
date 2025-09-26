module.exports = mongoose =>{
var schema = mongoose.Schema({
    bookId : {
        type : mongoose.Schema.Types.ObjectId, 
        ref : 'Book'
    },
    rating: Number,
    comment: String
});
const review = mongoose.model("Reviews", schema);
return review;
}