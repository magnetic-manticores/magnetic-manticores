from typing import List

from .event import CamelModel, Event
from .types import EventType


class _Payload(CamelModel):
    players: List[str]


class NewPlayersEvent(Event):
    """New players event class."""

    type: EventType = EventType.NEW_PLAYERS
    payload: _Payload
