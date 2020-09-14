const express = require('express');
const path = require('path');
const axios = require('axios');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    //res.send('Hello World Danilo');
    //res.set('Content-Type', 'text/html');
    //res.send(new Buffer('<h2>Test String</h2>'));
    res.sendFile(path.join(__dirname + '/pages/landing/index.html'));
});

app.get('/spaceimage', (req, res) => {
    //res.send('Hello World Danilo');
    res.send(req.query);
});

app.get('/images', (req, res) => {
        axios({
            method: 'get',
            url: 'https://source.unsplash.com/random',
            responseType: 'stream'
        })
        .then((response) => {
            console.log(response.data.responseUrl);
            res.send(response.data.responseUrl);
        })
});

app.listen(PORT, HOST);