from typing import Any, Dict

from .event import CamelModel, Event


class _Payload(CamelModel):
    state: Dict[str, Any]


class UpdateStateEvent(Event):
    """Update state event class."""

    payload: _Payload
