from pydantic import BaseModel, Field
from typing import Optional


class ContentBase(BaseModel):
    id: str = Field(..., max_length=96)
    desc: str = Field(..., max_length=116)
    categories: str = Field(..., max_length=1024)
    content: str = Field(..., max_length=50000)

    class Config:
        orm_mode = True
        schema_extra = {
            "example": {
                "id": "Gont",
                "desc": "Jedna z wysp Ziemiomorza",
                "categories": "Gont;Wyspa;Ziemiomorze",
                "content": "## Gont **to wielka wyspa**",
            }
        }


class ContentCreate(BaseModel):
    id: str = Field(..., max_length=96)
    desc: str = Field(..., max_length=116)
    categories: str = Field(..., max_length=1024)
    content: str = Field(..., max_length=50000)

    class Config:
        orm_mode = True
        schema_extra = {
            "example": {
                "id": "Krogulec",
                "desc": "Główny bohater serii, czarnoksiężnik o prawdziwym imieniu Ged, Władca Smoków, Arcymag",
                "categories": "Postać;Arcymag;Bohater;Ged;Krogulec;Jastrząb;Sokół;Gont",
                "content": "# Ged (md content)",
            },
        }


class ContentUpdate(BaseModel):
    id: Optional[str] = Field(max_length=96, default=None)
    desc: Optional[str] = Field(max_length=116, default=None)
    categories: Optional[str] = Field(max_length=1024, default=None)
    content: Optional[str] = Field(max_length=50000, default=None)

    class Config:
        orm_mode = True
        schema_extra = {
            "example": {
                "id": "Gont",
                "desc": "Jedna z wysp Ziemiomorza",
                "categories": "Gont;Wyspa;Ziemiomorze",
                "content": "## Gont **to wielka wyspa**",
            }
        }
