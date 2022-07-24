import { TEST } from "./game.js"

console.log(TEST);

window.addEventListener("DOMContentLoaded", () => {
  const websocket = new WebSocket("ws://localhost:8001");

  // todo: do things with the websocket in this file - i.e. sending/receiving messages
  // Register event listeners to communicate with websocket
  initGame(websocket);
  receiveMessages(websocket);
})

// Sends initial init event to websocket to create/join a new game
function initGame(websocket) {
  websocket.addEventListener("open", () => {
    let event = { type: "init" };  // init event for initialising game

    // Get the URL used to access page
    const params = new URLSearchParams(window.location.search);
    if (params.has("joinKey")) {
      // Second player joining an existing game using a joinKey
      event.joinKey = params.get("joinKey");
    }
    // Otherwise, the first player is starting a new game
    websocket.send(JSON.stringify(event));
  })
}

// Handles all events/messages received from websocket
function receiveMessages(websocket) {
  websocket.addEventListener("message", ({ msg }) => {
    // parse incoming websocket message to JSON
    const event = JSON.parse(msg);
    switch (event.type) {  // proceed according to event type
      case "init":  // initial game creation; make join/share button
        break;
      case "startGame": // both players connected and ready to start game:
        // allocate roles and change live view
        break;
      case "codeUpdate":  // update displayed text/code in editor
        break;
      case "editLimit":  // editing character limit reached for bugger:
        // revert to given file edit state & inform player
        break;
      case "timeUp":  // round time expired; ready to move to next round
        break;
      case "testingResults":  // results from code testing to be shown
        break
      case "error":  // any error or exception thrown by game logic
        showAlert(`An error occurred: ${event.message}. Please refer to websocket console.`);
        break;
    }
  })
}

function showAlert(msg) {
  window.setTimeout(() => {
    window.alert(msg)
  }, 50);
}
