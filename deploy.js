// deploy.js
const express = require('express');
const app = express();
const port = 80;

app.post('/deploy', (req, res) => {
  // Тут можна додати логіку для оновлення застосунку
  console.log('Received deploy request!');
  
  // Простий лог для тесту
  res.send('Deployment started...');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
