import asyncio as aio

import websockets as ws
from game import Game


async def handler(websocket: ws.WebSocketServerProtocol):
    """Boilerplate message handler"""
    Game()


async def main(port: int):
    """Main event loop for websocket"""
    async with ws.serve(handler, "127.0.0.1", port):
        print(f"Server started on {port=}")
        await aio.Future()


if __name__ == "__main__":
    aio.run(main(8001))
