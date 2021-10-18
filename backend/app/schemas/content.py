from pydantic import BaseModel, Field
from typing import Optional


class ContentBase(BaseModel):
    id: str = Field(..., max_length=96)
    categories: str = Field(..., max_length=1024)
    content: str = Field(..., max_length=50000)


class ContentUpdate(BaseModel):
    id: Optional[str] = Field(..., max_length=96)
    categories: Optional[str] = Field(..., max_length=1024)
    content: Optional[str] = Field(..., max_length=50000)
