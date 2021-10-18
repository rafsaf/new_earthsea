from typing import Any, Dict, List

from fastapi import APIRouter, Depends, HTTPException, Body
from sqlalchemy.orm import Session

from app import crud, models, schemas
from app.api import deps

router = APIRouter()

examples = [
    {
        "id": "Krogulec",
        "desc": "Główny bohater serii, czarnoksiężnik o prawdziwym imieniu Ged, Władca Smoków, Arcymag",
        "categories": "Postać;Arcymag;Bohater;Ged;Krogulec;Jastrząb;Sokół;Gont",
        "content": "# Ged (md content)",
    },
]


@router.post("/", response_model=schemas.ContentBase)
def create_content(
    content: schemas.ContentCreate,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Create content.
    """
    obj = crud.content.get(db, content.id)
    if obj is None:
        new_content = crud.content.create(db, content)
        return new_content
    else:
        raise HTTPException(404, "Content with this title already exists")


@router.get("/", response_model=List[schemas.ContentBase])
def get_contents(
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Get content.
    """
    contents = crud.content.get_multi(db)
    return contents


@router.delete("/{content_id}", response_model=None)
def delete_content(
    content_id: str,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Delete content.
    """
    obj = crud.content.get(db, content_id)
    if obj is None:
        raise HTTPException(404, "Content with this title does not exist")
    else:
        crud.content.remove(db, content_id)
