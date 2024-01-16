const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'pages')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'login', 'login.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
