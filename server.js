const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Indica que os arquivos estáticos serão servidos a partir do diretório principal
app.use(express.static(__dirname));

// Rota para servir o arquivo index.html quando acessar a raiz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicia o servidor na porta especificada
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
