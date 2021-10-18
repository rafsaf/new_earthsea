from typing import Any

from fastapi import APIRouter, Depends
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

from app import crud, models, schemas
from app.api import deps

router = APIRouter()


@router.post("/", response_model=schemas.ContentBase)
def create_content(
    *,
    db: Session = Depends(deps.get_db),
    content: schemas.ContentBase,
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Create content.
    """
    content = crud.content.create(db, content)
    return content
