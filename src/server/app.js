const dotenv = require('dotenv');
const fetch = require('node-fetch');
const dotEnvResult = dotenv.config();
const express = require('express');

const app = express();
app.use(express.static('dist'));

if (dotEnvResult.error) {
    throw dotEnvResult.error;
}

const apiKey = process.env.API_KEY;
const baseUrl = `https://api.meaningcloud.com/sentiment-2.1?lang=en&key=${apiKey}`;

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

const getSentimentData = async (url = '') => {
    const request = await fetch(url);

    try {
        // get data and return it
        return await request.json();
    }
    catch (error) {
        // if there is any error, return null
        return null;
    }
};

// sentiment endpoint with query parameter named: url
// example: localhost:8081?url=http://www.example.com
app.get('/sentiment', function (req, res) {
    const url = `${baseUrl}&url=${req.query.url}`;

    getSentimentData(url)
        .then((sentimentResponse) => {
            res.send(sentimentResponse);
        });
});

module.exports = {
    app,
    getSentimentData
};