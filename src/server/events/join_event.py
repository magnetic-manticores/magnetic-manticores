from typing import Optional

from .event import CamelModel, Event


class _Payload(CamelModel):
    join_key: Optional[str] = None
    new_player_name: str


class InitEvent(Event):
    """Init event class."""

    payload: _Payload
