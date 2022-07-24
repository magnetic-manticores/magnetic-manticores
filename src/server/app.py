import asyncio as aio
import json
import secrets
from typing import Dict, Set, Tuple

import websockets as ws
from game import Game

GAME_DIR: Dict[str, Tuple[Game, Set[ws.WebSocketServerProtocol]]] = {}


async def handler(websocket: ws.WebSocketServerProtocol):
    """Boilerplate message handler"""
    msg: str = await websocket.recv()
    event: Dict[str, str] = json.loads(msg)
    assert event["type"] == "init"

    if "joinKey" in event.keys():
        # todo: This is the second player joining an existing game
        pass
    else:
        # This is a new player initialising a game
        await initialise_game(websocket)


async def initialise_game(websocket: ws.WebSocketServerProtocol):
    """Initialises a new game for a new player 1"""
    new_game: Game = Game()
    connected: Set[ws.WebSocketServerProtocol] = {websocket}

    join_key: str = secrets.token_urlsafe(16)  # generate a 16 byte join key
    GAME_DIR[join_key] = new_game, connected  # populate GAME_DIR with game information

    try:
        event = {
            "type": "init",
            "joinKey": join_key,
        }
        await websocket.send(json.dumps(event))

        pass  # todo: like actually play the game
    finally:
        del GAME_DIR[join_key]  # remove the game from memory once the game is over


async def main(port: int):
    """Main event loop for websocket"""
    async with ws.serve(handler, "127.0.0.1", port):
        print(f"Server started on {port=}")
        await aio.Future()


if __name__ == "__main__":
    aio.run(main(8001))
