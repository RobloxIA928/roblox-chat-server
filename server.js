const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let messages = [];

app.get('/messages', (req, res) => {
  res.json(messages);
});

app.post('/messages', (req, res) => {
  const message = req.body;
  messages.push(message);
  res.json({ status: 'ok' });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
