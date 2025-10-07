module.exports = mongoose => {
    var schema = mongoose.Schema({
        bookId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Books'
        },
        rating: Number,
        comment: String
    });
    const review = mongoose.model("Reviews", schema);
    return review;
}