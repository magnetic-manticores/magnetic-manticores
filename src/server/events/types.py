from enum import Enum


class EventType(Enum):
    """Event types."""

    INIT = "init"
    UPDATE_STATE = "update_state"
