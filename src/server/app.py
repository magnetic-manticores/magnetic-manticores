import asyncio as aio
import json

import websockets as ws


async def submit(websocket):
    """Receives the submission from the client."""
    message = await websocket.recv()
    event = json.loads(message)
    assert event["type"] == "submit"
    await process_code(websocket, event["code"])


async def process_code(websocket, code: str):
    """Processes the client submission."""
    print(f"Message from server {code}")
    await submit(websocket)


async def handler(websocket: ws.WebSocketServerProtocol):
    """Boilerplate message handler"""
    message = await websocket.recv()
    event = json.loads(message)
    assert event["type"] == "init"
    event = {"type": "init", "message": "Message from server: Hello Client."}
    await websocket.send(json.dumps(event))
    await submit(websocket)


async def main(port: int):
    """Main event loop for websocket"""
    async with ws.serve(handler, "127.0.0.1", port):
        print(f"Server started on {port=}")
        await aio.Future()


if __name__ == "__main__":
    aio.run(main(8001))
