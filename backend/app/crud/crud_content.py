from app.crud.base import CRUDBase
from app.models import Content
from app.schemas import ContentCreate, ContentUpdate
from typing import Any, Dict, Optional, Union

from sqlalchemy.orm import Session
from sqlalchemy import select


class CRUDContent(CRUDBase[Content, ContentCreate, ContentUpdate]):
    def get_short(self, db: Session, skip: int = 0, limit: int = 100):
        return db.execute(
            select(Content.id, Content.desc).offset(skip).limit(limit)
        ).all()


content = CRUDContent(Content)
