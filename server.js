const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Indica que os arquivos estáticos serão servidos a partir da pasta 'pages'
app.use(express.static(path.join(__dirname, 'pages')));

// Rota para servir o arquivo index.html quando acessar a raiz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para servir o arquivo consulta.html quando acessar /consulta
app.get('/consulta', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'consulta', 'consulta.html'));
});

// Inicia o servidor na porta especificada
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
