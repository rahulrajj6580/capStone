const express = require('express');
const cors = require('cors');


var corsOption = {
    origin : "https://localhost:8081"
};

const app = express();

const PORT = 8080;

app.use(cors(corsOption));

app.use(express.json());

app.use(express.urlencoded({extended : true}));


