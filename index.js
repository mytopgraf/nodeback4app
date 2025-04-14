const express = require('express');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())

app.get('/', (req, res) => {
  res.send('Привет! Это простое Node.js приложение 🚀');
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
