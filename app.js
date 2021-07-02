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

const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT || 3000, () =>  console.log('Servidor corriendo en ' + PORT)); 
//Esto significa: ** si existe la variable PORT, usar el dato ** || ** si no directo a 3000