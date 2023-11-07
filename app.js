const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/home.html'));
});

app.get('/register.html', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/register.html'));
});

app.get('/login.html', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/login.html'));
});
app.get('/home.html', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/home.html'));
});

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(port, () => {
  console.log('Servidor Corriendo');
});