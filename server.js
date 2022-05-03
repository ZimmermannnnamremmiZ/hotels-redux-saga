const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'fake-token-4-8-15-16-23-42'
  });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));