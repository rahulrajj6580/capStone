const redis = require("redis");
const express = require('express');

const {promisify} = require('util');

const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT)
});
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

client.on("connect", () =>{
    console.log('Connected to Redis')
});

client.on("error", (err) =>{
    console.log('Redis connection error:',err);
});

module.exports = { client, getAsync, setAsync};