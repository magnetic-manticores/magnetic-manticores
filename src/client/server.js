const express = require('express');
const app = express();

app.use(express.static('static')); // serve the user the ./static folder with all the .html and .js files for local rendering

app.listen(8000, () => {
  console.log('Server listening on port 8000 (http://127.0.0.1:8000/)');
});
