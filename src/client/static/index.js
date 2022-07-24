import { TEST } from "./game.js"

console.log(TEST);

window.addEventListener("DOMContentLoaded", () => {
  const websocket = new WebSocket("ws://localhost:8001");
  // todo: do things with the websocket in this file - i.e. sending/receiving messages
  websocket.close();
})
