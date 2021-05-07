var path = require('path');
const express = require('express');
//const mockAPIResponse = require('./mockAPI.js');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

const app = express();
app.use(express.static('dist'));

const cors = require('cors');
app.use(cors());

const result = dotenv.config();
if (result.error) {
    throw result.error;
}

const apiKey = process.env.API_KEY;
const baseUrl = `https://api.meaningcloud.com/sentiment-2.1?lang=en&key=${apiKey}`;

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
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
