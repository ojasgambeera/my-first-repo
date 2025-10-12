const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Welcome to Pickle Business!'));
app.listen(3000, () => console.log('Web app running on port 3000'));

