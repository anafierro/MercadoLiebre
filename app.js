const express = require('express');
const app = express();

const path = require('path');

const publicPath = path.resolve('./public');
app.use('/static', express.static(publicPath));


app.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/home.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve('./views/register.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve('./views/login.html'));
})

app.listen(3000, () =>  console.log('Servidor corriendo'));