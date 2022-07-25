from typing import Any, Dict

from humps.main import camelize
from pydantic import BaseModel

from .types import EventType


def to_camel(string):
    """Convert any string to camel case."""
    return camelize(string)


class CamelModel(BaseModel):
    """Base model for flexible object to work with camel case and snake case."""

    class Config:
        alias_generator = to_camel
        allow_population_by_field_name = True


class Event(CamelModel):
    """Base event class."""

    type: EventType
    payload: Dict[str, Any]
