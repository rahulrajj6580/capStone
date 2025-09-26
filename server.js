const express = require('express');
const cors = require('cors');

const dbConfiguration = require("./app/config/db.config");

const app = express();

var corsOption = {
    origin : "https://localhost:8081"
};


const PORT = process.env.PORT || 8080;

app.use(cors(corsOption));

app.use(express.json());

app.use(express.urlencoded({extended : true}));

const  db = require("./app/models");
const book = db.book;

db.mongoose.connect(`mongodb://${dbConfiguration.HOST}:${dbConfiguration.PORT}/${dbConfiguration.DB}`,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(()=> {
    console.log("MongoDB connection successful")
})
.catch((err) =>{
    console.log("Something went wrong while connecting MongoDb");
    process.exit();
});

require("./app/routes/book.route")(app);

app.listen(PORT, () => {
    console.log(`Server is on and running on port ${PORT}.`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: 'Internal Server Error' });
});




