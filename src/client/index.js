require.config({ paths: { vs: 'node_modules/monaco-editor/dev/vs' } });
require(['vs/editor/editor.main'], function () {
    window.editor = monaco.editor.create(document.getElementById('container'), {
        value: ['print("hello")'].join('\n'),
        language: 'python'
    });
    console.log(editor.getValue()) // ToDo: Remove
});

window.addEventListener("DOMContentLoaded", () => {
  // Open the WebSocket connection and register event handlers.
  const websocket = new WebSocket("ws://localhost:8001/")
  init(websocket);
  on_click(websocket);
  receive_message(websocket);
});

function init(websocket) {
  websocket.addEventListener("open", () => {
    // Send an "init" event for the first player.
    console.log('init is called') // ToDo: Remove
    let event = { type: "init" };
    websocket.send(JSON.stringify(event));
  });
}

function on_click(websocket) {
  // When clicking a column, send a "play" event for a move in that column.
  code_submit.addEventListener("click", ({ target }) => {
    console.log('click happened') // ToDo: Remove
    const event = {
      type: "submit",
      code: window.editor.getValue(),
    };
    websocket.send(JSON.stringify(event));
  });
}

function receive_message(websocket){
    websocket.addEventListener("message", ({ data }) => {
    const event = JSON.parse(data);
    switch (event.type) {
      case "init":
        console.log(event.message)
        break;
      case "error":
        showMessage(event.message);
        break;
      default:
        throw new Error(`Unsupported event type: ${event.type}.`);
    }
  });
}

function showMessage(message) {
  window.setTimeout(() => window.alert(message), 50);
}

function browser_close(websocket) {
  window.addEventListener('close', ({ data }) => {
    websocket.close(1000)
  });
}
