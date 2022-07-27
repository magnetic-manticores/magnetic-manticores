const express = require('express');
const app = express();

app.use(express.static('.')); // serve the user the ./static folder with all the .html and .js files for local rendering

app.listen(8000, () => {
  console.log('Server listening on port 8000 (http://127.0.0.1:8000/)');
});

function on_open(websocket) {
  websocket.addEventListener('open', () => {
    // ToDo: Implement test: change text in monaco editor (welcome message)
    // monaco.editor.setValue = 'Welcome'
  });
}

function on_submit(websocket) {
  // ToDo: Implement test: 'click' event reads the editor content
  // editor_content = monaco.editor.getValue()
}
