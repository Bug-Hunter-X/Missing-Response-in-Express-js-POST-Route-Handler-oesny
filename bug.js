const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process the data and then respond
  // Missing response handling
});
app.listen(3000, () => console.log('Server listening on port 3000'));