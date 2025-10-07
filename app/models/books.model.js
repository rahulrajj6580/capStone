module.exports = mongoose => {
    var schema = mongoose.Schema({
        title: String,
        author: String,
        genre: String,
        description: String,
        publishedDate: Date
    });
    const book = mongoose.model("Books", schema)
    return book;
};
