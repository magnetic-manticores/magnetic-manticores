// todo: have logic to update the page here in response to websocket events

export const addJoinButton = function(wsEvent, parentDiv) {
  const joinLink = `${window.location.href}?joinKey=${wsEvent.joinKey}`;
  const joinButton = document.querySelector("#joinButton");
  joinButton.hidden = false;
  joinButton.addEventListener("click", () => {
    navigator.clipboard.writeText(joinLink).then();
  });
  parentDiv.appendChild(joinButton);
};
